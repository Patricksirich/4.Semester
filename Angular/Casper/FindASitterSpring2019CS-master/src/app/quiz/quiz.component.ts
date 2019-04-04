import { Component, OnInit, Input, Output } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

@Input() quizInput: Quiz
@Output() quizClicked: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() { }

  ngOnInit() {
  }

  emitQuizClicked(quiz: Quiz) {
    this.quizClicked.emit(this.quizInput);
  }
}
