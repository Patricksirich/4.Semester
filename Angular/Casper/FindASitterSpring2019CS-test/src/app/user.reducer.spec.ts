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

  // 2.0: testing update user
  it('should update an existing user', () => {

    let user = {
      _id: '0',
      username: 'Testname',
      password: '',
      email: 'Test@test.com',
      birthDate: undefined,
    } as User;

    let startState = {users: [user]} as UserState;
    deepFreeze(startState)
    console.log(startState.users)

    user = {
      _id: user._id,
      username: 'TestnameUpdated',
      password: '',
      email: 'Test@test.com',
      birthDate: undefined,

    }
      let userId = user._id

      let actionObject = {type: UserActions.UPDATE_USER, payload: user, userId};
      let newStateObject = userReducer(startState, actionObject);

      console.log(newStateObject.users)
      expect(newStateObject.users[0].username).toBe('TestnameUpdated')
      expect(newStateObject.users.length).toBe(1)
  })
});

