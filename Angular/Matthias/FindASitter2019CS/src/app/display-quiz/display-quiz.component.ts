import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';
import { Identifiers } from '@angular/compiler';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit {
  quiz: Quiz;

  constructor(private tempData: TempDataService, private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id')
    this.quiz = this.tempData.findQuiz(id); 
    // get ID from URL
    // find quiz object based on ID
    // load quiz in HTML
  }

}
