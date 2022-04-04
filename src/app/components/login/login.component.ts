import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formModal: any;
  user: User = {
    email: '',
    password: ''
  };
  response: any;
  message: string = '';

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById('signinModal')
    // ).show();
  }

  onSignIn() {
    this.service.userLogin(this.user).subscribe({
      next: data => this.response = data.json(),
      error: err => this.message = err, //console.log(err)
      // complete: () => this.message = "Request completed!"
    });
    alert("You have successfully signed in")
    // const backdrops = document.querySelectorAll(".modal-backdrop")
    // backdrops.forEach(backdrop => {
    //   backdrop.remove();
    // })
    this.router.navigate(['/games']);
  }

}