import { OnInit, Component } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { TempDataService } from '../service/temp-data.service';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.scss']
})

export class DisplayQuizzesComponent implements OnInit {

  private quizzes: Quiz[];

  constructor(private data: TempDataService) { }
  ngOnInit() {
    this.quizzes = this.data.quizzes;
  }
  onQuizClicked(quiz: Quiz) {
    console.log(quiz);
  }
}
