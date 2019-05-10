import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "./store";
import { Quiz, Rating } from "./entities/quiz";
import { QuizApiService } from './quiz-api.service';

@Injectable({ providedIn: "root" })
export class QuizActions {
  constructor(private ngRedux: NgRedux<AppState>, private api: QuizApiService) {}

  static LOG_IN: string = "LOG_IN";
  static NEW_QUIZ: string = "NEW_QUIZ";
  static UPDATE_QUIZ: string = "UPDATE_QUIZ";
  static DELETE_QUIZ: string = "DELETE_QUIZ";

  static GET_QUIZZES_LOADING: string = "GET_QUIZZES_LOADING";
  static GET_QUIZZES_SUCCESS: string = "GET_QUIZZES_SUCCESS";
  static GET_QUIZZES_FAILED: string = "GET_QUIZZES_FAILED";


  static CREATE_RATING: string = "CREATE_RATING";

  getQuizzes() : void {
    this.ngRedux.dispatch({ type: QuizActions.GET_QUIZZES_LOADING }); // start a spinner
    // Call the webservice
    this.api.getAllQuizzes().subscribe(quizzes => {
      this.ngRedux.dispatch({
        type: QuizActions.GET_QUIZZES_SUCCESS,
        payload: quizzes.filter(quiz => quiz.user && quiz.questions)
        //if(quizList[i].hasOwnProperty('user' && 'questions') && !this.quizzes.some(quiz => quiz._id == quizList[i]._id)){

        // payload: quizzes.filter(quiz => quiz.customerId == 'mps')
      })
    }, error => {
      this.ngRedux.dispatch({
        type: QuizActions.GET_QUIZZES_FAILED,
        payload: error
      });
    });
  }

  deleteQuiz(id: string) : void {
    this.api.deleteQuiz(id).subscribe(quizzes => {
      this.ngRedux.dispatch({
        type: QuizActions.DELETE_QUIZ,
        payload: quizzes
      });
    });
  }

  updateQuiz(quizzes: Quiz, quizId: string, quiz: Quiz): void{
    this.ngRedux.dispatch({
      type: QuizActions.UPDATE_QUIZ,
      payload: {quizzes, quizId, quiz}
    });
  }

  createRating(rating: Rating, quizId: string) {
    this.ngRedux.dispatch({
      type: QuizActions.CREATE_RATING,
      // payload: {rating: rating, quizId: quizId}
      payload: {rating, quizId}
    });
  }

  setLoggedIn(isLoggedIn: boolean): void {
    this.ngRedux.dispatch({
      type: QuizActions.LOG_IN,
      payload: isLoggedIn
    });
  }

  addNewQuiz(quizzes: Quiz): void {
    this.ngRedux.dispatch({
      type: QuizActions.NEW_QUIZ,
      payload: quizzes
    });
  }
}
