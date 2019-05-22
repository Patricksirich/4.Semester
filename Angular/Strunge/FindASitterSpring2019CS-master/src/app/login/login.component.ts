import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { QuizActions } from '../quiz.actions';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-login', // name of component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router, private authService: AuthService,
    private quizActions: QuizActions, private adminService: AdminService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]], // multiple validators
        password: ['', Validators.required] // Single validator
      }
    )
  }

  onSubmit() : void {
    console.log(this.loginForm);

    console.log('Hello', this.loginForm.value);
    if(this.loginForm.valid && this.loginForm.value.username == 'admin') {
      //login as admin
      console.log('Trying to login as admin');
      this.authService.login().subscribe(result => {
        console.log(result);
      })
      this.adminService.login().subscribe(result => {
        console.log(result);
        this.router.navigate(['portal']);
      })
    }

    else if(this.loginForm.valid && this.loginForm.value.username != 'admin'){
      this.authService.login().subscribe(result => {
        console.log(result);
        this.router.navigate(['portal/display-quizzes']);
      })
    }
    this.snackBar.open('Logging in..', 'Close', {
      duration: 2000,
    });

    console.log(this.loginForm);

    if (this.loginForm.valid) {
      this.quizActions.setLoggedIn(true);
      this.authService.login().subscribe(result => {
        this.router.navigate(['portal/display-quizzes']);
      });
    }
    else {
      // Show error message or something else.
    }
  }
}
