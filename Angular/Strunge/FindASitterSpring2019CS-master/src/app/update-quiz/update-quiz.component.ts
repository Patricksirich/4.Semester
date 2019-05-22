import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { Quiz } from '../entities/quiz';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.sass']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<AppState>, private fb: FormBuilder) { }

  public quizzes: Quiz[]
  public quizForm: FormGroup

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.ngRedux.select(state => state.quizzes).subscribe(result => {
      this.quizzes = result.quizzes
      let quiz = this.quizzes.find(quiz => quiz._id === id)

      this.quizForm = this.fb.group({

      })
    })
  }
  updateQuiz(){

  }

}
