import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/interfaces/user';
import { PaymentCard } from 'src/app/interfaces/payment-card';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  card: PaymentCard = {
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPay() {
    this.router.navigate(['/games']);
  }
}

