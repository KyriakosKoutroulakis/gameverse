import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  public user: User = { fullName: '', email: '', password: '' };
  public response: any;
  public message: string = '';

  constructor(private router: Router) { }

  onRegister() {
    this.router.navigate(['/payment'], {
      state: { user: this.user }
    });
  }
}