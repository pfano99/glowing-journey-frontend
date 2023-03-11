import { BudgetItems } from "./budgetItems";
import { Person } from "./Person,";

export interface Budget {
    id?: number,
    name: string,
    description: string,
    cost: number,
    budgetItems?: BudgetItems[],
    person?: Person
}