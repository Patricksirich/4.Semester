import { UserActions} from './user.actions'
import { UserState } from './store';
import { tassign } from "tassign";

const INITIAL_STATE: UserState = { isLoggedIn: false, users: [  ]}

export function userReducer(state: UserState = INITIAL_STATE, action: any) {
  switch(action.type) {

    case UserActions.CREATE_USER:

      let newUser = tassign(state, { users: [... state.users, action.payload]});
      console.log(newUser)
      return newUser

    default:
      return state;

  }
}



