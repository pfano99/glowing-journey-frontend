import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountEvent } from '../models/AccountEvent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountEventService {

  private apiUrl: string = "http://127.0.0.1:8080/account_event"

  constructor(private http: HttpClient) { }

  addEvent(event: AccountEvent, accountId: number): Observable<AccountEvent> {
    const url = `${this.apiUrl}/${accountId}`;
    console.log("account id " + accountId)
    console.log(event)
    console.log(url)
    return this.http.post<AccountEvent>(url, event);
  }

  getAllAccountEvents(accountId: number): Observable<AccountEvent[]> {
    const url = `${this.apiUrl}/account/${accountId}`
    return this.http.get<AccountEvent[]>(url);
  }
}
