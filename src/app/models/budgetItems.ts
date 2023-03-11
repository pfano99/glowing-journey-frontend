import { Budget } from "./Budget";

export interface BudgetItems {
    id?: number,
    name: string,
    price: number,
    itemsCount: number,
    budgetItems?: Budget
}