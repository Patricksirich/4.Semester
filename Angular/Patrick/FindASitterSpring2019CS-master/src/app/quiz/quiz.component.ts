import { Component, OnInit, Input, Output } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { EventEmitter } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

@Input() quizInput: Quiz
@Output() quizClicked: EventEmitter<Quiz> = new EventEmitter<Quiz>();
@Output() deleteClicked: EventEmitter<any> = new EventEmitter<any>();


  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  emitQuizClicked(quiz: Quiz) {
    this.quizClicked.emit(this.quizInput);
  }

  emitDeleteQuiz() {
    this.deleteClicked.emit(this.quizInput);
  }

}
