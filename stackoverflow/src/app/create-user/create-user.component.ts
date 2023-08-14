import { Component } from '@angular/core';

import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor(private fb: FormBuilder, public userService: UserService) {

  }

  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  createAccount() {
    this.userService.createAccount(this.signupForm.value).subscribe((res) => {
      console.log(res);
    })
  }

}
