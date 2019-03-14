import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-login', // name of component
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authservice: AuthService, private adminservice: AdminService) {
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
    if(this.loginForm.valid && this.loginForm.value.username == 'admin'){
      // login as admin
      console.log("trying to log in as admin");
      this.authservice.login().subscribe(result => {
        console.log(result);
      })
      this.adminservice.login().subscribe(result => {
        console.log(result);
        this.router.navigate(['portal']);
      });
      
      
    }

    else if (this.loginForm.valid && this.loginForm.value.username != 'admin') {
      // Send the data to the server to verify the user login
      console.log("trying to log in");
      this.adminservice.logout()
        console.log("Admin logout");
      
      this.authservice.login().subscribe(result => {
        console.log(result);
        this.router.navigate(['portal/display-quizzes']);
      });

      
      console.log("Navigating to your destination");
    }
    else {
      // Show error message or something else.
    }
  }
}
