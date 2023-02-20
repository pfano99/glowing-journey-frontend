import { Account } from "./Account";

export interface Transaction{
    id?:number,
    description:string,
    amount:number,
    transactionType:string,
    transactionDate:string,
    account?:Account
}