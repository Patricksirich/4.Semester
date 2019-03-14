import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit {
  quiz: Quiz;

  constructor(private tempData: TempDataService) { }

  ngOnInit() {
    const id = '1';
    this.quiz = this.tempData.findQuiz(id);
    // get ID from URL
    // find quiz object based on ID
    // load quiz in HTML
  }

}
