import { QuizActions } from './quiz.actions';
import { QuizState } from './store';
import { tassign } from 'tassign';

const INITIAL_STATE: QuizState = { isLoggedIn: false }

export function quizReducer(state: QuizState = INITIAL_STATE, action:any) {
 switch (action.type) {

  case QuizActions.LOG_IN:

    //state.isLoggedIn = action.payload;

    // YOU CANNOT MODIFY STATE IN REDUX
    // MAKE A COPY OF THE STATE
    // CHANGE ISLOGGEDIN VARIABLE IN THE COPY

    // Shallow copy of the state object and changes isLoggedIn of the copy.
    return tassign(state, {isLoggedIn: action.payload});

    //return Object.assign({}, state, { isLoggedIn: action.payload })

    //return tassign(state, { isBaby: action.payload });

   default:
    return state;
}
}
