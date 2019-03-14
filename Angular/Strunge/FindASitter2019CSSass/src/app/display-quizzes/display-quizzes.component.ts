import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { TempDataService } from '../service/temp-data.service';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.scss']
})
export class DisplayQuizzesComponent implements OnInit {
  quizzes: Quiz[]
  constructor(private tempData: TempDataService) { }

  ngOnInit() {
    
    this.quizzes = this.tempData.getQuizzes();
  }

}
