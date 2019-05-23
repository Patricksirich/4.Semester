import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { Quiz, Question, Option } from '../entities/quiz';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Gender } from '../entities/user';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.sass']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<AppState>, private fb: FormBuilder) { }
  public quizForm: FormGroup


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.ngRedux.select(state => state.quizzes).subscribe(result => {
      let quizzes = result.quizzes
      let quiz = quizzes.find(quiz => quiz._id === id)
      console.log(quiz)
      console.log(quiz.questions)


      this.quizForm = this.fb.group({
        title: [quiz.title],
        questions: this.fb.array(quiz.questions)
      });
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
   };
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
