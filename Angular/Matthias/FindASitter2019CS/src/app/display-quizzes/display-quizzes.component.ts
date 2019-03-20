import { Component, OnInit, Injectable } from '@angular/core';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.scss']
})
export class DisplayQuizzesComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private tempData: TempDataService) { 
  }

  ngOnInit() {
    if(this.tempData.getQuizzes()){
    this.quizzes = this.tempData.getQuizzes();
    }
  }
}

