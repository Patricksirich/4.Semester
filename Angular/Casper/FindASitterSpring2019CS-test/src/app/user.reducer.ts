import { UserActions} from './user.actions'
import { UserState } from './store';
import { tassign } from "tassign";

const INITIAL_STATE: UserState = { isLoggedIn: false, users: [  ], isLoading: false}

export function userReducer(state: UserState = INITIAL_STATE, action: any) {
  switch(action.type) {

    case UserActions.CREATE_USER:

      let newUser = tassign(state, { users: [... state.users, action.payload]});
      console.log(newUser)
      return newUser

    case UserActions.DELETE_USER:
      return tassign(state, {users: state.users.filter(user => user._id != action.payload)});

    case UserActions.GET_USERS_LOADING:
      return tassign(state, { isLoading: true});

    case UserActions.GET_USERS_SUCCESS:
      return tassign(state, { isLoading: false, users: action.payload });

    case UserActions.GET_USERS_FAILED:
      return tassign(state, { isLoading: false});

    case UserActions.UPDATE_USER:
        let newUserArray = tassign(state, { users: [... state.users, action.payload]});
        console.log("Update user is: ", action.payload.userId)
        newUserArray[action.payload.userId] = action.payload.user;
        console.log("update user object : ", newUserArray[action.payload.userId])
      return newUserArray

    default:
      return state;
  }
}



