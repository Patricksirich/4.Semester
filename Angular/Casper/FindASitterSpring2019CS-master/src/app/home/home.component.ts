import { Component, OnInit } from '@angular/core';
import { AppState } from '../store';
import { QuizActions } from '../quiz.actions';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './../app.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean;

  constructor(private quizActions: QuizActions, private ngRedux: NgRedux<AppState> ) { }

  ngOnInit() {
    this.ngRedux.select(state => state.quizzes).subscribe(res => {
      this.loggedIn = res.isLoggedIn;
    });
  }

  onLogoutClick() {
    this.quizActions.setLoggedIn(false);
  }
}
