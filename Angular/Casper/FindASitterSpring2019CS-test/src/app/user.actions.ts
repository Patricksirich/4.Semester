import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "./store";
import { User } from './entities/user';
import { UserApiService } from './user-api.service';

@Injectable({ providedIn: "root" })
export class UserActions {
  constructor(private ngRedux: NgRedux<AppState>, private api: UserApiService) {}

  static CREATE_USER: string = "CREATE_USER";
  static UPDATE_USER: string = "UPDATE_USER";
  static DELETE_USER: string = "DELETE_USER";


  static GET_USERS: string = "GET_USERS";
  static GET_USERS_LOADING = "GET_USERS_LOADING";
  static GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
  static GET_USERS_FAILED = "GET_USERS_FAILED";

  getUsers() : void {
    this.ngRedux.dispatch({ type: UserActions.GET_USERS_LOADING }); // start a "spinner"
    // call the webservice
    this.api.getAllUsers().subscribe(users => {
      this.ngRedux.dispatch({
        type: UserActions.GET_USERS_SUCCESS,
        payload: users.filter(user => user.localId == "Studene")
      });

    }, error => {
        this.ngRedux.dispatch({
        type: UserActions.GET_USERS_FAILED,
        payload: error
      });
    });
  }

   createUser(users: User) {
     this.ngRedux.dispatch({
       type: UserActions.CREATE_USER,
       payload: users
     });
   }

   deleteUser(userId: string) {
    console.log('Deleting user')
      this.ngRedux.dispatch({
        type: UserActions.DELETE_USER,
        payload: userId
    })
  }

  updateUser(user: User, userId: string): void{
    this.ngRedux.dispatch({
      type: UserActions.UPDATE_USER,
      payload: {user, userId}
    });
  }

}
