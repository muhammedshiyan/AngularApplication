export interface CreateOrderDto {
  amount: number;
  paymentMethod: string; // e.g., 'phonepe', 'gpay', 'card'
  currency?: string;     // optional, default 'INR'
}

export interface OrderResponseDto {
  success: boolean;
  code?: string;
  message?: string;
  data?: {
    redirectUrl?: string;
    status?: string;       // 'SUCCESS', 'FAILED', etc.
    [key: string]: any;    // any extra info
  };
}
