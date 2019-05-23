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

  constructor(private quizActions: QuizActions, private adminService: AdminService, private authService: AuthService) {}
  ngOnInit() {
  }

  logout(): void {
    console.log("Logging out..")
    this.adminService.isLoggedIn = false;
    this.quizActions.setLoggedIn(false);
    this.authService.isLoggedIn = false;
  }

}
