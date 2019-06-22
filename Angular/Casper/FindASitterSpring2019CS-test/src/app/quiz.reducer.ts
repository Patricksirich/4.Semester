import { QuizActions } from "./quiz.actions";
import { QuizState } from "./store";
import { tassign } from "tassign";
import { TempDataService } from './service/temp-data.service';

let temp = new TempDataService();
const INITIAL_STATE: QuizState = { isLoggedIn: false, quizzes: [  ], isLoading: false };

export function quizReducer(state: QuizState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case QuizActions.LOG_IN:

      return tassign(state, { isLoggedIn: action.payload });

    case QuizActions.UPDATE_QUIZ:

      // action.payload: new quiz object
      // How to replace an object in an array without mutating state.
        let newQuizArray = tassign(state, { quizzes: [... state.quizzes, action.payload]});
        newQuizArray[action.payload.quizId] = action.payload.quiz;
      return newQuizArray

    case QuizActions.DELETE_QUIZ:
      return tassign(state, {quizzes: state.quizzes.filter(quiz => quiz._id != action.payload)});

    case QuizActions.NEW_QUIZ:

      let result = tassign(state, { quizzes: [... state.quizzes, action.payload]});
      console.log(result)
      return result

    case QuizActions.GET_QUIZZES_LOADING:
      return tassign(state, { isLoading: true});

    case QuizActions.GET_QUIZZES_SUCCESS:
      return tassign(state, { isLoading: false, quizzes: action.payload });

    case QuizActions.GET_QUIZZES_FAILED:
      return tassign(state, { isLoading: false});
    default:
      return state;
  }
}
