import { QuizActions } from "./quiz.actions";
import { QuizState } from "./store";
import { tassign } from "tassign";
import { TempDataService } from './service/temp-data.service';

let temp = new TempDataService();
const INITIAL_STATE: QuizState = { isLoggedIn: false, quizzes: temp.quizzes };

export function quizReducer(state: QuizState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case QuizActions.LOG_IN:
      // state.isLoggedIn = action.payload; !!YOU CANNOT MODIFY STATE IN REDUX!!

      // MAKE A COPY OF THE STATE
      // CHANGE ISLOGGEDIN VARIABLE IN THE COPY

      // Shallow copy of the state object and changes isLoggedIn of the copy.

      return tassign(state, { isLoggedIn: action.payload });

    case QuizActions.CREATE_RATING:
      // action.payload: rating object, id of quiz
      // action.payload.rating;
      // action.payload.quizId;
      // How to add an object to an array within an object in an array


    case QuizActions.UPDATE_QUIZ:

      // action.payload: new quiz object
      // How to replace an object in an array without mutating state.
        let newQuizArray = tassign(state, { quizzes: [... state.quizzes, action.payload]});
        newQuizArray[action.payload.quizId] = action.payload.quiz;
      return newQuizArray

    case QuizActions.DELETE_QUIZ:
      // action payload: id of the quiz
      // How to create a new array with a missing object from another array
      const newArray = state.quizzes.filter(x => x._id != action.payload);
      return

    case QuizActions.NEW_QUIZ:
  
      // Create a shallow copy of the array with the original quiz objects and the action payload
      // Return a new state object

      let result = tassign(state, { quizzes: [... state.quizzes, action.payload] });
      console.log(result)
      return result

    default:
      return state;
  }
}
