import { OnInit, Component } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { AppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { UserApiService } from '../user-api.service';
import { UserActions } from '../user.actions';
import { User } from '../entities/user';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})

export class DisplayUsersComponent implements OnInit {

  public users: User[];
  public isLoading: boolean;
  public userSearch: string;

  constructor(private ngRedux: NgRedux<AppState>, private userApi: UserApiService, private userActions: UserActions) { }
  ngOnInit() {

    this.ngRedux.select(state => state.users).subscribe(result => {
      this.users = result.users;
      this.isLoading = result.isLoading;
  });

  this.userActions.getUsers()

}

deleteUser(user: User) {

  this.userApi.deleteUser(user._id).subscribe(removeUser => {
    this.userActions.deleteUser(user._id)
  }, error => {
    this.userActions.deleteUser(user._id)
  });
}

  updateQuiz(quiz: Quiz) {

  }

  onUserClicked(user: User) {
    console.log(user);
    console.log(this.userSearch)
  }
}
