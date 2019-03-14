import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit {
  quiz: Quiz;
  
  constructor(private tempData: TempDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.quiz = this.tempData.getQuiz();

    //get ID from URL
    const id = this.route.snapshot.paramMap.get('id');
    //find quiz object based on ID
    this.quiz = this.tempData.findQuiz(id)
    //load quiz in HTML
  }

}
