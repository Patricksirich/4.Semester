import { quizReducer } from "./quiz.reducer";
import { QuizActions } from './quiz.actions';
import { QuizState } from './store';
import { Quiz } from './entities/quiz';
var deepFreeze = require('deep-freeze');

fdescribe('quiz-reducer-tests', () => {

    // each it-block is a test case
    it('Should set state to true when logging in', () => {
      // Arrange - Act - Assert (principles of creating a unit test)

      // Arrange
      let startState = {isLoggedIn: undefined, quizzes: []};
      deepFreeze(startState)
      let actionObj = { type: QuizActions.LOG_IN, payload: true };

      // Act
      let newStateObj = quizReducer(startState, actionObj);
      // Assert
      expect(newStateObj).toEqual({ isLoggedIn: true, quizzes: [] });
    });

    it('should create new', () => {
      // Arrange
      let startState = {quizzes: []} as QuizState;
      deepFreeze(startState);

      let quiz = { title: 'test quiz', questions: []} as Quiz;
      let actionObj = { type: QuizActions.NEW_QUIZ, payload: quiz};
      // Act
      let newStateObj = quizReducer(startState, actionObj);
      // Assert
      expect(newStateObj.quizzes[0].title).toBe('test quiz')
      expect(newStateObj.quizzes.length).toBe(1);
    });
})
