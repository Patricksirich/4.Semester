import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]], // Multiple validators
        password: ['', Validators.required], // Single validator
        salary: ['',[Validators.min(100), Validators.max(1000)]]
    }
    )
  }

  onSubmit() : void {
    console.log(this.registerForm);

    if(this.registerForm.valid){
      //Send the data to the server to verify the user register
    }
    else{
      //Show error msg or something else...
    }
  }
}
