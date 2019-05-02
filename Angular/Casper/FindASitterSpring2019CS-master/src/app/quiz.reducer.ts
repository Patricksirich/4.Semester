import { QuizActions } from "./quiz.actions";
import { QuizState } from "./store";
import { tassign } from "tassign";
import { TempDataService } from './service/temp-data.service';

let temp = new TempDataService();
const INITIAL_STATE: QuizState = { isLoggedIn: false, quizzes: temp.quizzes};

export function quizReducer(state: QuizState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case QuizActions.LOG_IN:
      // state.isLoggedIn = action.payload; !!YOU CANNOT MODIFY STATE IN REDUX!!

      // MAKE A COPY OF THE STATE
      // CHANGE ISLOGGEDIN VARIABLE IN THE COPY

      // Shallow copy of the state object and changes isLoggedIn of the copy.

      return tassign(state, { isLoggedIn: action.payload });


    case QuizActions.NEW_QUIZ:

      // Create a shallow copy of the array with the original quiz objects and the action payload
      // Return a new state object

      let result = tassign(state, { quizzes: [... state.quizzes, action.payload] });
      console.log(result)
      return result

    case QuizActions.UPDATE_QUIZ:

      let updateQuiz = tassign(state, { quizzes: [... state.quizzes, action.payload]});
      console.log(updateQuiz)
      return updateQuiz

    case QuizActions.DELETE_QUIZ:

      let removeQuiz = tassign(state, { quizzes: [... state.quizzes, action.payload]});
      console.log(removeQuiz)
      return removeQuiz

    default:
      return state;
  }
}
