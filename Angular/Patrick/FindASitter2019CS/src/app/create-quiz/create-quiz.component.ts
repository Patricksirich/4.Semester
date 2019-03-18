import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Quiz } from '../entities/quiz';
import { TempDataService } from '../service/temp-data.service';
import { Gender } from '../entities/user';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  createQuizForm: FormGroup;
  quizzes: Quiz[];

  constructor(private fb: FormBuilder, private router: Router, private tempData: TempDataService, private fm: FormsModule) { }

  onSubmit(form: NgForm){
    console.log(form)
  }

  ngOnInit() {
    this.createQuizForm = this.fb.group(
      {
        question1: ['', Validators.required],
        question2: ['', Validators.required],
        question3: ['', Validators.required],
        options1_1: [['', ''], Validators.required],
        options1_2: [['', ''], Validators.required],
        options1_3: [['', ''], Validators.required],
        options2_1: [['', ''], Validators.required],
        options2_2: [['', ''], Validators.required],
        options2_3: [['', ''], Validators.required],
        options3_1: [['', ''], Validators.required],
        options3_2: [['', ''], Validators.required],
        options3_3: [['', ''], Validators.required]
      }
    )
  }

  saveQuiz(): Quiz {
    const id = this.tempData.getQuizzes().length+1;
    return {
      _id: id.toString(), visible: false, user: {
        _id: '1', username: 'Matthias', email: 'ms@ms.dk', gender: Gender.MALE,
        birthDate: new Date("23/09/1995")
      }, title: 'test',
      questions: [
        {
          title: this.createQuizForm.value.question1,
          options: [
            { answer: this.createQuizForm.value.options1_1[0], correct: this.createQuizForm.value.options1_1[1]},
            { answer: this.createQuizForm.value.options1_2[0], correct: this.createQuizForm.value.options1_2[1]},
            { answer: this.createQuizForm.value.options1_3[0], correct: this.createQuizForm.value.options1_3[1]},
          ]
        }
      ]
    }
  }

}
