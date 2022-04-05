import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { User } from 'src/app/interfaces/user';
import { PaymentCard } from 'src/app/interfaces/payment-card';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})

export class PaymentPageComponent {
  public user: User = { email:'', password: ''};
  public card: PaymentCard = { name: '', cardNumber: '', expiryDate: '', cvv: '' };
  public msg: string = '';
  public routeState: any;

  constructor(private router: Router, private userService: UserService) { 
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router.getCurrentNavigation()?.extras.state;

      if (this.routeState) {
        this.userService.userLogin(this.routeState.user).subscribe({
          next: (res) => this.user =res,
          error: (err) => this.msg = err
        });
      }
    }
  }

  onPay(): void {
    if (this.user) {
      console.log(this.user);
      this.router.navigate(['/games']);
    };  
  }
}

