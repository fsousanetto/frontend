import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({ providedIn: 'root' })
export class WalletService {

  constructor(
    private http: HttpClient
  ) {}

  getBalance(): Observable<{ balance: number }> {
    return this.http.get<{ balance: number }>(`${environment.apiUrl}/wallet/balance`);
  }

  getHistory(): Observable<{ history: { categoryId: string; category: string; total: number }[] }> {
    return this.http.get<{ history: { categoryId: string; category: string; total: number }[] }>(`${environment.apiUrl}/transactions/history`);
  }

  getRecent(): Observable<{ recent: Transaction[] }> {
    return this.http.get<{ recent: Transaction[] }>(`${environment.apiUrl}/transactions/recent`);
  }

  createTransaction(data: Transaction) {
    return this.http.post(`${environment.apiUrl}/transactions`, data);
  }

  deleteTransaction(id: string) {
    return this.http.delete(`${environment.apiUrl}/transactions/${id}`);
  }
}