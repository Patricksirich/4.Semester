import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
@Injectable({ providedIn: 'root'})
export class QuizActions {
constructor (
  private ngRedux: NgRedux<AppState>) {} 

  static LOG_IN: string = 'LOG_IN'; 

  setLoggedIn(isLoggedIn: boolean): void {
    this.ngRedux.dispatch({
      type: 'LOG_IN',
      payload: isLoggedIn
    })
  }
}
