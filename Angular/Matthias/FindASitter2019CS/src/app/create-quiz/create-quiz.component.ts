import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from '../entities/quiz';
import { TempDataService } from '../service/temp-data.service';
import { Gender } from '../entities/user';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})

export class CreateQuizComponent implements OnInit {
  createQuizForm: FormGroup;
  quizzes: Quiz[];
  quiz: Quiz;

  constructor(private fb: FormBuilder, private router: Router, private tempData: TempDataService) { }

  ngOnInit() {
    this.createQuizForm = this.fb.group(
      {
        quizTitle: new FormControl(),
        questionTitle: new FormControl(),
        optionAnswer1: new FormControl(),
        optionAnswer2: new FormControl(),
        optionAnswer3: new FormControl(),
        optionCorrect1: new FormControl(),
        optionCorrect2: new FormControl(),
        optionCorrect3: new FormControl()
      }
    )
  }

  onSubmit(createQuizForm) {
    console.log(createQuizForm.value)
  }

  saveQuiz(): Quiz {
    var id = (this.tempData.getQuizzes().length+1).toString();
    //console.log(createQuizForm.value)
    this.router.navigate(['portal/display-quizzes']);
    this.quiz = {  
      _id: id.toString(), visible: false, user: {
        _id: '1', username: 'Matthias', email: 'ms@ms.dk', gender: Gender.MALE,
        birthDate: new Date("23/09/1995")
      }, title: this.createQuizForm.value.quizTitle,
      questions: [
        {
          title: this.createQuizForm.value.questionTitle,
          options: [
            { answer: this.createQuizForm.value.optionAnswer1, correct: this.createQuizForm.value.optionCorrect1},
            { answer: this.createQuizForm.value.optionAnswer2, correct: this.createQuizForm.value.optionCorrect2},
            { answer: this.createQuizForm.value.optionAnswer3, correct: this.createQuizForm.value.optionCorrect3},
          ]
        }
      ]
    }
    console.log(this.quiz)
    this.tempData.setQuiz(this.quiz);
    return this.quiz;
  }

}
