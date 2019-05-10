import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { QuizActions } from '../quiz.actions';

@Component({
  selector: 'app-login', // name of component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,
    private router: Router, private authService: AuthService,
    private quizActions: QuizActions) {
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
    this.snackBar.open('Logging in..', 'Close', {
      duration: 2000,
    });


    console.log(this.loginForm);

    if (this.loginForm.valid) {
      this.quizActions.setLoggedIn(true);
    
      if (this.loginForm.value.username === 'admin') {
        //log in as admin

      }

      this.authService.login().subscribe(result => {
        this.router.navigate(['portal/display-quizzes']);
      });
    }
    else {
      // Show error message or something else.

    }

  }


}