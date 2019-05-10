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
  isLoading: boolean;
  public userSearch: string;

  constructor(private ngRedux: NgRedux<AppState>, private quizActions: QuizActions, private quizApi: QuizApiService) { }
  ngOnInit() {

    // Subscribe to the redux store (quizzes).
    this.ngRedux.select(state => state.quizzes).subscribe(result => {
      this.isLoading = result.isLoading;
      this.quizzes = result.quizzes;
    });

    this.quizActions.getQuizzes();

    /*console.log("1");
    this.quizApi.getAllQuizzes().subscribe(allQuizzes => {
      console.log(allQuizzes);
      var quizList: Quiz[] = allQuizzes;
      for (let i = 0; i < quizList.length; i++) {
        if(quizList[i].hasOwnProperty('user' && 'questions') && !this.quizzes.some(quiz => quiz._id == quizList[i]._id)){
          console.log(quizList[i]);
          this.quizActions.addNewQuiz(quizList[i]);
        }
      }
      console.log("3");
    }, error => {
      // Write some code for handling errors 
      console.log("Something bad happened", error)
    });
    console.log("2");*/

}
  onQuizClicked(quiz: Quiz) {
    console.log(quiz);
    console.log(this.userSearch);
  }

  handleDeleteQuiz(quiz: Quiz) {
    this.quizApi.deleteQuiz(quiz._id).subscribe(deleteQuiz => {

    }, error => {

    });
    /*
    console.log("1");
    var id = quiz._id;
    console.log("id before: " + id);
    this.quizApi.deleteQuiz(id).subscribe(deleteQuiz => {
      console.log("id inside: " + id);
      console.log(deleteQuiz);
      console.log("3");
    }, message => {
      // Write some code for handling errors
      console.log("Something happened", message)
    });
    var localId = this.quizzes.findIndex(quiz =>  quiz._id == id);
    console.log("localId: " + localId);
    this.quizzes.splice(localId, 1);
    console.log("2");
    */
  }
}
