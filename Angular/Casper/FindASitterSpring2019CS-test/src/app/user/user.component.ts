import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../entities/user';
import { EventEmitter } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

@Input() userInput: User
@Output() userClicked: EventEmitter<User> = new EventEmitter<User>();
@Output() deleteClicked: EventEmitter<any> = new EventEmitter<any>();


  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  emitUserClicked(user: User) {
    this.userClicked.emit(this.userInput);
  }

  emitDeleteUser() {
    this.deleteClicked.emit(this.userInput);
  }

}
