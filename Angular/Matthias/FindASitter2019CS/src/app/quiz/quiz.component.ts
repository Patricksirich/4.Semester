import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../entities/quiz';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass']
})
export class QuizComponent implements OnInit {
  @Input() quiz: Quiz;
  @Output() quizClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  emitQuizClick(quiz: Quiz){
    this.quizClicked.emit(quiz)
  }

  emitDeleteQuiz() {
    this.deleteClicked.emit(+this.quiz._id);
  }

}
