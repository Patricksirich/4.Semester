import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  //DI - Dependency Injection
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { 

  }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]], // Multiple validators
        password: ['', Validators.required] // Single validator
    }
    )
  }

  onSubmit() : void {
    console.log(this.loginForm);

    if(this.loginForm.valid){
      //Send the data to the server to verify the user login
      //navigate after succesful login
      this.authService.login().subscribe( result => {
        console.log(result);
        this.router.navigate(['portal/display-quiz']);
      });
      console.log("navigating to quiz");
      
    }
    else{
      //Show error msg or something else...
    }
  }

}
