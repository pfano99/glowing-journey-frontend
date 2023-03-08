import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl: string = "http://127.0.0.1:8080/account"

  constructor(private http: HttpClient) { }

  addAccount(account: Account, userId: number): Observable<Account> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.post<Account>(url, account);
  }

  getAllUserAccounts(id: number): Observable<Account[]> {
    const url = `${this.apiUrl}/all/${id}`
    return this.http.get<Account[]>(url);
  }

  deleteAccount(id: number) {
    const url = `${this.apiUrl}/${id}`
    this.http.delete(url).subscribe(
      resp => {
        console.log(resp);
      }
    );
  }
}
