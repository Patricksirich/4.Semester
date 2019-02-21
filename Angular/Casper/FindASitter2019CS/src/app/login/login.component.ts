import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

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
      this.router.navigate(['display-quiz']);
    }
    else{
      // Show error msg or something else...
    }
  }

}
