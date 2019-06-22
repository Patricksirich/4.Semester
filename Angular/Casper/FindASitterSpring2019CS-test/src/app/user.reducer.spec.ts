import { userReducer } from './user.reducer';
import { UserActions } from './user.actions';
import { UserState } from './store';
import { User } from './entities/user';
var deepFreeze = require('deep-freeze');

fdescribe('user-reducer-tests', () => {

  // Arrange - Act - Assert

  //1.0: testing create user
  it('Should create a new user', () => {

    // Arrange
  let startState = {users: []} as UserState;
  deepFreeze(startState)
  let user = {
    username: 'Testname',
    password: '',
    email: 'Test@test.com',
    birthDate: undefined,
    } as User;
  let actionObject =  {type: UserActions.CREATE_USER, payload: user};

    // Act
  let newStateObject = userReducer(startState, actionObject);

    // Assert
    expect(newStateObject.users[0].username).toBe('Testname')
    expect(newStateObject.users.length).toBe(1)
  });
});

