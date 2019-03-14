import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

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
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      salary: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  onSubmit() : void{
    console.log(this.registerForm);

    if(this.registerForm.valid){
    //Do this
    }
    else{
    //Do that
    }

  }

}
