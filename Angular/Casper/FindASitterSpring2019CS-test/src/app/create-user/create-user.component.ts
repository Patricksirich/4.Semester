import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, Gender } from '../entities/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {
  createUser: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  /*
  quiz.user = { _id: '1',
    username: 'Strunge',
    email: 'Chr@Chr.org',
    gender: Gender.MALE,
    birthDate: undefined
    */

  ngOnInit() {
    this.createUser = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      // TODO: dropdown på gender
      gender: [Gender.MALE, Validators.required],
      birthDate: ['', [Validators.required, Validators.pattern('^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$') ]],
      phoneNumbers: this.fb.array([Validators.pattern('[0-9]+')]),
      country: ['']
    })
  }

  saveUser(){
    let user = this.createUser.value as User;
    this.router.navigate(['home/login']);
  }

  addPhoneNumber(){
    const phoneNumber = this.fb.group({
      number: ['']
    });
    const phoneNumbers = this.createUser.controls.phoneNumbers as FormArray;
    phoneNumbers.push(phoneNumber);
  }

}
