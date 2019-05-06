import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],

})
export class ProfileEditorComponent implements OnInit {

  ngOnInit() {

  }
  //For creating a formgroup without formbuilder
  testForm = new FormGroup({
    firstNameTest: new FormControl(''),
    lastNameTest: new FormControl(''),
    info: new FormGroup({
      phone: new FormControl(''),
      city: new FormControl(''),
      email: new FormControl(''),
    })
  })


  // For creating a form group with form builder
  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    info: this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('[0-9]+')]],
      city: [''],
      email: ['', [Validators.email, Validators.required]]
    })
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Jens',
      info: {
        city: 'Nowhere'
      }
    });
  }
}
