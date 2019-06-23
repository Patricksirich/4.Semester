import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { User } from '../entities/user';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { UserApiService } from '../user-api.service';
import { UserActions } from '../user.actions';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.sass']
})
export class UpdateUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<AppState>,
    private fb: FormBuilder, private userApi: UserApiService, private router: Router,
    private userActions: UserActions) { }

  public user: User;
  public userForm: FormGroup;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ngRedux.select(state => state.users).subscribe(result => {
      this.user = result.users.find(user => user._id === id);
      console.log(this.user)
      console.log(result)

      this.userForm = this.fb.group({
        username: [this.user.username, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        birthDate: [this.user.birthDate, [Validators.required, Validators.pattern('^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$') ]],
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

  updateUser() {
    // save a user who created this user.
    // hardcode a user until we have a proper login.
    let user = this.userForm.value as User;

   console.log("1");
   this.userApi.updateUser(user).subscribe(userFromWs => {
     console.log(userFromWs);
     console.log('3');
    this.userActions.updateUser(user);
    this.router.navigate(['/portal/display-users']);
   }, error => {
     // Write some code for handling errors
     console.log("Something bad happened", error)
     // this.userActions.addNewuserFailed(error);
   });
   console.log("2");
  }

  addPhoneNumber(){
    const phoneNumber = this.fb.group({
      number: ['',[Validators.required]]
    });
    const phoneNumbers = this.userForm.controls.phoneNumbers as FormArray;
    phoneNumbers.push(phoneNumber);
  }

}
