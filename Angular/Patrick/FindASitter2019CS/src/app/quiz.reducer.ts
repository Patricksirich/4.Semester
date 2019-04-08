import { QuizActions } from './quiz.actions';
import { QuizState } from './store';
import { tassign } from 'tassign';

const INITIAL_STATE: QuizState = {isLoggedIn: false}

export function usersReducer(state: QuizState = INITIAL_STATE, action:any) {
switch (action.type) {
    case QuizActions.LOG_IN:

    // Shallow copy of the state object and changes isLoggedIn of the copy.
    return tassign(state, { isLoggedIn: action.payload})
  
    // return Object.assign({}, state, { isLoggedIn: action.payload })
  
    // return tassign(state, { isLoggedIn: action.payload });
  
    default:
    return state;
    }
}
