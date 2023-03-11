import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BudgetItems } from '../models/budgetItems';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemService {

  private apiUrl: string = "http://127.0.0.1:8080/budget_item"

  constructor(private http: HttpClient) { }

  addBudgetItem(item: BudgetItems, budgetId: number): Observable<BudgetItems> {
    const url = `${this.apiUrl}/${budgetId}`;

    return this.http.post<BudgetItems>(url, item);
  }

  getAllBudgetItems(budgetId: number): Observable<BudgetItems[]> {
    const url = `${this.apiUrl}/all/${budgetId}`
    return this.http.get<BudgetItems[]>(url);
  }

  deleteBudgetItem(id: number) {
    const url = `${this.apiUrl}/${id}`
    this.http.delete(url).subscribe(
      resp => {
        console.log(resp);
      }
    );
  }
}
