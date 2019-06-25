import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { User } from '../entities/user';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { UserApiService } from '../user-api.service';
import { UserActions } from '../user.actions';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss']
})
export class DisplayUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<AppState>,
    private fb: FormBuilder, private userApi: UserApiService, private router: Router,
    ) { }

  public user: User;
  public userForm: FormGroup;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ngRedux.select(state => state.users).subscribe(result => {
      this.user = result.users.find(user => user._id === id);
      console.log(this.user)
      console.log(result)

      this.userForm = this.fb.group({
        username: [this.user.username],
        email: [this.user.email],
        birthDate: [this.user.birthDate],
        phoneNumbers: this.fb.array([]),
        country: [this.user.country]
      })
      console.log(this.userForm)

    })
    console.log(this.user.phoneNumbers)
      this.user.phoneNumbers.forEach(element => {
        const phoneNumbers = this.userForm.controls.phoneNumbers as FormArray;
        phoneNumbers.push(this.fb.group({
          number: [element.number]
        }));
  })
}
  back(){
    this.router.navigate(['portal/display-users']);
  }
}
