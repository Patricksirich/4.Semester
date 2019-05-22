import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { QuizActions } from '../quiz.actions';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss', './../app.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(private adminService: AdminService, private authService: AuthService,private quizActions: QuizActions) { }

  ngOnInit() {
  }
  
  logOut() : void{
    this.quizActions.setLoggedIn(false);
    this.adminService.isLoggedIn = false;
    this.authService.isLoggedIn = false;
    console.log("Is logging out!")
  }
}
