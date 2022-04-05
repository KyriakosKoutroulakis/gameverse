import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: ''};
  response: any;
  message: string = '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void { }

  onSignIn() {
    this.service.userLogin(this.user).subscribe({
      next: (data: any) => {
        this.router.navigate(['/games'], { state: { user: data } })
      },
      error: err => this.message = err,
    });
  }
}