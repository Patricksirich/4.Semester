import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';
import { Router } from '@angular/router';
import { Gender } from '../entities/user';
import { QuizActions } from '../quiz.actions';
import { QuizAPIService } from '../quiz-api.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  createQuiz: FormGroup;

  constructor(private fb: FormBuilder, private data: TempDataService, private router: Router,
    private quizActions: QuizActions, private quizApi: QuizAPIService) { }

  saveQuiz() {
    // save a user who created this quiz.
    // hardcode a user until we have a proper login.
    let quiz = this.createQuiz.value as Quiz;

    quiz.user = { _id: '1',
    username: 'Casper',
    email: 'cf@an.dk',
    gender: Gender.MALE,
    birthDate: undefined
   };

    console.log("1");
    this.quizApi.createQuiz(quiz).subscribe(quizFromWebservice => {
      console.log(quizFromWebservice);
      console.log("3")
      this.quizActions.addNewQuiz(quizFromWebservice);
      this.router.navigate(['/portal/display-quizzes']);
    }, error => {
      //write some code for handling errors in the webservice.
      console.log("Something bad happened")
    });
    console.log("2");
    console.log(quiz)
  }


  createNewQuestion() {
    const question = this.fb.group({
      title: ['', Validators.required],
      options: this.fb.array([])
    });

    const questions = this.createQuiz.controls.questions as FormArray;
    const options = question.controls.options as FormArray;
    options.push(this.createNewOptionGroup());
    options.push(this.createNewOptionGroup());
    questions.push(question);
  }
  createNewOption(questionIndex: number){
    const option = this.createNewOptionGroup();
    const questions = this.createQuiz.controls.questions as FormArray;
    const options = (<FormArray>questions.controls[questionIndex]).controls['options'] as FormArray;
    options.push(option);
  }
  private createNewOptionGroup(): FormGroup {
    return this.fb.group({
      answer: ['', Validators.required],
      correct: [false, Validators.required]
    });
  }


  ngOnInit() {
    this.createQuiz = this.fb.group({
      title: [''],
      questions: this.fb.array([])
    })
  }
}
