import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { AppState } from "./store";
import { QuizApiService } from './quiz-api.service';
import { User } from './entities/user';

@Injectable({ providedIn: "root" })
export class UserActions {
  constructor(private ngRedux: NgRedux<AppState>, private api: QuizApiService) {}

  static CREATE_USER: string = "CREATE_USER";

   createUser(users: User) {
     this.ngRedux.dispatch({
       type: UserActions.CREATE_USER,
       payload: users
     });
   }
}
