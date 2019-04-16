import { QuizActions } from './quiz.actions';
import { QuizState } from './store';
import { tassign } from 'tassign';

const INITIAL_STATE: QuizState = {isLoggedIn: false, quizzes: []}

export function quizReducer(state: QuizState = INITIAL_STATE, action:any) {
 switch (action.type) {
  case QuizActions.LOG_IN:
    console.log(action);
    return tassign(state, {isLoggedIn: action.payload});
    //return tassign(state, { isBaby: action.payload });
   default:
    return state;
}
}
