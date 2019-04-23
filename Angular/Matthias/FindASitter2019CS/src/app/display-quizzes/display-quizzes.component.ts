import { Component, OnInit, Injectable } from '@angular/core';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.scss']
})
export class DisplayQuizzesComponent implements OnInit {
  private quizzes: Quiz[];

  constructor(private tempData: TempDataService) { 
  }

  ngOnInit() {
    if(this.tempData.getQuizzes().length > 0){
    this.quizzes = this.tempData.getQuizzes();
    }
  }

  handleDeleteQuiz(id: String) {
    console.log(id);
    this.quizzes.splice(+id-1, 1);
  }

  handleQuizClicked(quiz){
    console.log(quiz);
  }

}

