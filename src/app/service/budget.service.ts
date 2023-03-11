import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Budget } from '../models/Budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private apiUrl: string = "http://127.0.0.1:8080/budget";

  constructor(private http: HttpClient) { }

  addBudget(budget: Budget, UserId: number): Observable<Budget> {
    const url = `${this.apiUrl}/${UserId}`;
    return this.http.post<Budget>(url, budget);
  }

  getAllBudgets(userId: number): Observable<Budget[]> {
    const url = `${this.apiUrl}/all/${userId}`
    return this.http.get<Budget[]>(url);
  }

  deleteBudget(id: number) {
    const url = `${this.apiUrl}/${id}`
    this.http.delete(url).subscribe(
      resp => {
        console.log(resp);
      }
    );
  }
}
