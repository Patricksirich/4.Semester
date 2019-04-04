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

  constructor(private tempData: TempDataService) {}

  ngOnInit() {
    this.quizzes = this.tempData.quizzes;
    }
    
  handleQuizClicked(quiz){
    //do whatever I want to handle the event.
    console.log(quiz)
    }
  }

