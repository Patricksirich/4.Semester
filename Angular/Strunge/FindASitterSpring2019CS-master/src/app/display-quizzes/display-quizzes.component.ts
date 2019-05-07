import { OnInit, Component } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { TempDataService } from '../service/temp-data.service';
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

  private quizzes: Quiz[];

  constructor(private ngRedux: NgRedux<AppState>, private quizApi: QuizApiService, private quizActions: QuizActions) { }
  ngOnInit() {
    this.quizApi.getAllQuizzes().subscribe(showAllQuizzes => {
      console.log(showAllQuizzes)
      var quizList: Quiz[] = showAllQuizzes;
      for (let i = 0; i < quizList.length; i++){
        if(quizList[i].hasOwnProperty('user' && 'questions') && !this.quizzes.some(quiz => quiz._id == quizList[i]._id)){
          console.log(quizList[i])
          this.quizActions.addNewQuiz(quizList[i])
        }
      }
    }, error => {
      console.error('Failure: ', error)
    })
    // Subscribe to the redux store (quizzes).
    this.ngRedux.select(state => state.quizzes).subscribe(result => {
      this.quizzes = result.quizzes;
  });

}
  onQuizClicked(quiz: Quiz) {
    console.log(quiz);
  }

  handleDeleteQuiz(quiz: Quiz) {
    var id = quiz._id
    console.log(id);
    this.quizApi.deleteQuiz(id).subscribe(deleteQuiz => {
      console.log('id: ' + id)
      console.log(deleteQuiz)
    }, error => {
      //this.quizzes.splice(+id-1, 1);
      console.warn('Failure: ', error)
    })
    var localId = this.quizzes.findIndex(quiz => quiz._id == id)
    this.quizzes.splice(localId, 1)
  }

}
