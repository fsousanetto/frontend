export interface WalletBalance {
  userId: string;
  balance: number;
  currency: string;
}

export interface SendMoneyRequest {
  toUserId: string;
  amount: number;
  currency: string; //Ex: USD, BRL ...
}
