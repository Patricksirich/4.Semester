import { routerReducer } from "@angular-redux/router";
import { combineReducers } from "redux";
import { quizReducer } from "./quiz.reducer";
import { Quiz } from "./entities/quiz";
import { User } from "./entities/user"
import { userReducer } from './user.reducer';

export class QuizState {
  isLoggedIn: boolean;
  quizzes: Quiz[];
  errorMessage?: string;
  isLoading: boolean;
}

export class UserState {
  isLoggedIn: boolean;
  users: User[];
}

export class AppState {
  quizzes?: QuizState;
  users?: UserState;
}

export const rootReducer = combineReducers<AppState>({
  quizzes: quizReducer,
  users: userReducer,
  router: routerReducer
} as any);
