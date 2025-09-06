import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']   // 👈 typo fixed (was styleUrl)
})
export class PaymentsuccessComponent implements OnInit {
  txnId: string | null = null;
  status: string = 'Checking...';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // PhonePe may send transactionId in query params
    this.txnId = this.route.snapshot.queryParamMap.get('transactionId');

    if (this.txnId) {
      // Call backend to verify payment
      this.http.get<any>(`https://localhost:5001/api/payment/status/${this.txnId}`)
        .subscribe({
          next: (res) => {
            this.status = res?.status || 'Unknown';
          },
          error: () => {
            this.status = 'Verification failed!';
          }
        });
    } else {
      this.status = 'No transaction ID found!';
    }
  }
}
