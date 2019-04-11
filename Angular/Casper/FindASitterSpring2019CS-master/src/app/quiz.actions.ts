import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "./store";
import { Quiz } from "./entities/quiz";

@Injectable({ providedIn: "root" })
export class QuizActions {
  constructor(private ngRedux: NgRedux<AppState>) {}

  static LOG_IN: string = "LOG_IN";
  static NEW_QUIZ: string = "NEW_QUIZ";

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
