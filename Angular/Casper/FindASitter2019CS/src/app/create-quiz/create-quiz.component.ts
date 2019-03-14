import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Quiz } from '../entities/quiz';
import { Route } from '@angular/router';
import { TempDataService } from '../service/temp-data.service';
import { Gender } from '../entities/user';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  createNewQuizForm: FormGroup;
  quizzes: Quiz[]

  constructor(private fb: FormBuilder, private router: Route, private tempData: TempDataService) { }

  ngOnInit() {
    this.createNewQuizForm = this.fb.group(
      {
        quiztitle: ['', Validators.required],
        question1: ['', Validators.required],
        option1_1: [[''], [''], Validators.required],
        option1_2: [[''], [''], Validators.required],
        option1_3: [[''], [''], Validators.required],
        question2: ['', Validators.required],
        option2_1: [[''], [''], Validators.required],
        option2_2: [[''], [''], Validators.required],
        option2_3: [[''], [''], Validators.required]
      }
    )
  }

  saveQuiz(): Quiz {
    const id = this.tempData.getQuizzes.length;
    return {
      _id: id.toString(), visible: false, user: {
        _id: '1', username: 'Casper', email: 'Something@something.dk',
        gender: Gender.MALE, birthDate: new Date("14/02/1990")
      }, title: 'test',
      questions: [
        {
          title: this.createNewQuizForm.value.question1,
          options: [
            { answer: this.createNewQuizForm.value.option1_1[0], correct: this.createNewQuizForm.value.option1_1[1]},
            { answer: this.createNewQuizForm.value.option1_2[0], correct: this.createNewQuizForm.value.option1_2[1] },
            { answer: this.createNewQuizForm.value.option1_3[0], correct: this.createNewQuizForm.value.option1_3[1] }
          ]
        }
      ]
    }
  }
}
