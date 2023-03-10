import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl: string = "http://127.0.0.1:8080/transaction"

  constructor(private http: HttpClient) { }

  addNewTransaction(transaction: Transaction, accountId: number): Observable<Transaction> {
    const url = `${this.apiUrl}/${accountId}`;
    return this.http.post<Transaction>(url, transaction);
  }

  getAllAccountTransactions(id: number): Observable<Transaction[]> {
    const url = `${this.apiUrl}/account/${id}`
    return this.http.get<Transaction[]>(url);
  }

  deleteTransaction(id: number) {
    const url = `${this.apiUrl}/${id}`
    this.http.delete(url).subscribe(
      resp => {
        console.log(resp);
      }
    );
  }

}
