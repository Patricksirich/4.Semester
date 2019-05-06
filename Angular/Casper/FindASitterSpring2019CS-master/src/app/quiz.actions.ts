import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "./store";
import { Quiz, Rating } from "./entities/quiz";

@Injectable({ providedIn: "root" })
export class QuizActions {
  constructor(private ngRedux: NgRedux<AppState>) {}

  static LOG_IN: string = "LOG_IN";
  static NEW_QUIZ: string = "NEW_QUIZ";
  static UPDATE_QUIZ: string = "UPDATE_QUIZ";
  static DELETE_QUIZ: string = "DELETE_QUIZ";
  static CREATE_RATING: string = "CREATE_RATING";

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
