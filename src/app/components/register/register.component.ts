
import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PaymentCard } from 'src/app/interfaces/payment-card';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

declare var window: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  response: any;
  message: string = '';
  user: User = {
    fullName: '',
    email: '',
    password: ''
  };

  // card: PaymentCard = {
  //   name: '',
  //   cardNumber: '',
  //   expiryDate: '',
  //   cvv: ''
  // };

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.service.userLogin(this.user).subscribe({
      next: data => this.response = data.json(),
      error: err => this.message = err, //console.log(err)
      // complete: () => this.message = "Request completed!"
    });
    this.router.navigate(['/payment']);
    // alert("data: " + this.response)
  }
}