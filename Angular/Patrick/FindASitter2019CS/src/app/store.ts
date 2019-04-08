import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { quizReducer } from './../quiz.reducer';

export class QuizState {
    isLoggedIn: boolean;
}
export class AppState {
    quizzes?: QuizState;
}
export const rootReducer = combineReducers<AppState>({
    quizzes: quizReducer,

router: routerReducer
});
