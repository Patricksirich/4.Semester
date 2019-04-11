import { quizReducer } from "./quiz.reducer";
import { QuizActions } from './quiz.actions';
var deepFreeze = require('deep-freeze');

fdescribe('quiz-reducer-tests', () => {

    // each it-block is a test case
    it('Should set state to true when logging in', () => {

      let startState = {isLoggedIn: undefined, quizzes: []};
      deepFreeze(startState)
      let actionObj = { type: QuizActions.LOG_IN, payload: true };
      let newStateObj = quizReducer(startState, actionObj);

      expect(newStateObj).toEqual({ isLoggedIn: true, quizzes: [] });
    });
})
