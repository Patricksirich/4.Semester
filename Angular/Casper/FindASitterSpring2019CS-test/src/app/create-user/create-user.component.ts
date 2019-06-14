import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../entities/user';

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
      username: [''],
      password: [''],
      email: [''],
      gender: [''],
      birthDate: [''],
      phoneNumbers: this.fb.array([]),
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
