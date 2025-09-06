import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateOrderDto, OrderResponseDto } from '../models/payment.model';
import { environment } from '../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseApiUrl = environment.baseApiUrl ; ///api/payment'; // Your .NET API base URL
  private apiUrl=`${this.baseApiUrl}/payment`;
  constructor(private http: HttpClient) {}

  /**
   * Create a payment order
   * @param orderDto - { amount, paymentMethod, currency? }
   * @returns Observable<OrderResponseDto>
   */
  createOrder(orderDto: CreateOrderDto): Observable<OrderResponseDto> {
    return this.http.post<OrderResponseDto>(
      `${this.apiUrl}/create-order`,
      orderDto
    );
  }

  /**
   * Check the status of a payment
   * @param transactionId - Merchant or gateway transaction ID
   * @returns Observable<OrderResponseDto>
   */
  checkStatus(transactionId: string): Observable<OrderResponseDto> {
    return this.http.get<OrderResponseDto>(
      `${this.apiUrl}/status/${transactionId}`
    );
  }

  /**
   * Send webhook payload manually (optional, usually backend handles this)
   * @param payload - Webhook payload from payment provider
   * @param signatureHeader - Signature for verification
   */
  handleWebhook(payload: any, signatureHeader: string): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/callback`,
      payload,
      { headers: { 'X-VERIFY': signatureHeader } }
    );
  }
}
