import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    let user: any = localStorage.getItem('currentUser');
    if (user != null) {
      this.userService.user = JSON.parse(user);
      this.router.navigateByUrl('/home');
    }
    else {
      this.router.navigateByUrl('/login');

    }

  }


  logout() {
    this.userService.user = undefined;
    this.router.navigateByUrl('/login');
    localStorage.removeItem('currentUser')
  }


}
