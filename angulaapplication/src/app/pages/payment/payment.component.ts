import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // for *ngIf, *ngFor
import { FormsModule } from '@angular/forms';     // for [(ngModel)]
import { PaymentService } from '../../services/payment.service';
import { CreateOrderDto } from '../../models/payment.model';

@Component({
  selector: 'app-payment',
  standalone: true,      // <-- standalone component
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  amount = 100;
  selectedPaymentType: string | null = null;
  loading = false;
  paymentStatus: string | null = null;

  paymentTypes = [
    { label: 'PhonePe', value: 'phonepe' },
    { label: 'Google Pay', value: 'gpay' },
    { label: 'Paytm', value: 'paytm' },
    { label: 'Card', value: 'card' },
    { label: 'UPI', value: 'upi' }
  ];

  constructor(private paymentService: PaymentService) {}

  payByType() {
    if (!this.selectedPaymentType) {
      this.paymentStatus = 'Select a payment method.';
      return;
    }

    this.loading = true;
    this.paymentStatus = null;

    const orderDto: CreateOrderDto = {
      amount: this.amount,
      paymentMethod: this.selectedPaymentType
    };

    this.paymentService.createOrder(orderDto).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data?.redirectUrl) {
          window.location.href = res.data.redirectUrl;
        } else {
          this.paymentStatus = res.message || 'Payment failed.';
        }
      },
      error: (err) => {
        this.loading = false;
        this.paymentStatus = 'Error creating payment.';
        console.error(err);
      }
    });
  }
}
