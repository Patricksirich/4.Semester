import { OnInit, Component } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { AppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { QuizApiService } from '../quiz-api.service';
import { QuizActions } from '../quiz.actions';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.scss']
})

export class DisplayQuizzesComponent implements OnInit {

  public quizzes: Quiz[];
  public isLoading: boolean;
  public userSearch: string;

  constructor(private ngRedux: NgRedux<AppState>, private quizApi: QuizApiService, private quizActions: QuizActions) { }
  ngOnInit() {

    this.ngRedux.select(state => state.quizzes).subscribe(result => {
      this.quizzes = result.quizzes;
      this.isLoading = result.isLoading;
  });

  this.quizActions.getQuizzes();

}

deleteQuiz(quiz: Quiz) {

  this.quizApi.deleteQuiz(quiz._id).subscribe(removeQuiz => {
    this.quizActions.deleteQuiz(quiz._id)
  }, error => {
    this.quizActions.deleteQuiz(quiz._id)
  });
}

  updateQuiz(quiz: Quiz) {

  }

  onQuizClicked(quiz: Quiz) {
    console.log(quiz);
    console.log(this.userSearch)
  }
}
