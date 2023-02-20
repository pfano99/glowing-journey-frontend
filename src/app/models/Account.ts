import { Person } from "./Person,";

export interface Account{
    id?:number,
    name:string,
    balance:number,
    accountType:string,
    user?:Person
}