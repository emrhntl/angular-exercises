import { Component } from '@angular/core';

import { AbstractControl, Form, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, public userService: UserService, private snack: MatSnackBar, private router: Router) {

  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    this.userService.getUser((this.loginForm.value.email)).subscribe((res) => {
      if (res.length == 0) {
        this.openSnack("This email isn't found", "ok", 950)
      }
      else {
        if (res[0].password === this.loginForm.value.password) {
          this.router.navigateByUrl('/home');
        }
        else {
          this.openSnack("Password is incorrect", "ok", 950)
        }
      }
    })
  }

  openSnack(message: string, submit: string, duration: number) {
    this.snack.open(message, submit, {
      duration: duration
    })
  }

}
