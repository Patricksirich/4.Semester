import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { Quiz, Option } from '../entities/quiz';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Gender } from '../entities/user';
import { element } from '@angular/core/src/render3';
import { QuizApiService } from '../quiz-api.service';
import { QuizActions } from '../quiz.actions';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.sass']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<AppState>,
    private fb: FormBuilder, private quizApi: QuizApiService, private router: Router,
    private quizActions: QuizActions) { }

  public quiz: Quiz;
  public quizForm: FormGroup;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ngRedux.select(state => state.quizzes).subscribe(result => {
      this.quiz = result.quizzes.find(quiz => quiz._id === id);

      this.quizForm = this.fb.group({
        title: [this.quiz.title],
        questions: this.fb.array([])

      })

    })
      let index = 0;
      this.quiz.questions.forEach(element => {
        const questions = this.quizForm.controls.questions as FormArray;
        questions.push(this.fb.group({
          title: [element.title],
          options: this.fb.array([])
        }));


      //@ts-ignore
      const options = questions.controls[index].controls.options as FormArray;

      this.quiz.questions[index].options.forEach(option => {
        options.push(this.fb.group({
          answer: [option.answer],
          correct: [option.correct]
        }));
    });
    index++;
  })
}

  updateQuiz() {
    // save a user who created this quiz.
    // hardcode a user until we have a proper login.
    let quiz = this.quizForm.value as Quiz;

    quiz.user = { _id: '1',
    username: 'Strunge',
    email: 'Chr@Chr.org',
    gender: Gender.MALE,
    birthDate: undefined
   }

   console.log("1");
   this.quizApi.createQuiz(quiz).subscribe(quizFromWs => {
     console.log(quizFromWs);
     console.log('3');
    this.quizActions.addNewQuiz(quiz);
    this.router.navigate(['/portal/display-quizzes']);
   }, error => {
     // Write some code for handling errors
     console.log("Something bad happened", error)
     // this.quizActions.addNewQuizFailed(error);
   });
   console.log("2");
  }

  createNewQuestion() {
    const question = this.fb.group({
      title: ['', Validators.required],
      options: this.fb.array([])
    });

    const questions = this.quizForm.controls.questions as FormArray;
    const options = question.controls.options as FormArray;
    options.push(this.createNewOptionGroup());
    options.push(this.createNewOptionGroup());
    questions.push(question);
  }
  createNewOption(questionIndex: number){
    const option = this.createNewOptionGroup();
    const questions = this.quizForm.controls.questions as FormArray;
    const options = (<FormArray>questions.controls[questionIndex]).controls['options'] as FormArray;
    options.push(option);
  }
  private createNewOptionGroup(): FormGroup {
    return this.fb.group({
      answer: ['', Validators.required],
      correct: [false, Validators.required]
    });
  }

}
