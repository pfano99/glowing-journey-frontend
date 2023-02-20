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

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.apiUrl, account);
  }

  getAllUserAccounts(id: number): Observable<Account[]> {
    const url = `${this.apiUrl}/all/${id}`
    console.log(url)
    return this.http.get<Account[]>(url);
  }

}
