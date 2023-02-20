import { Account } from "./Account";

export interface Person{
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    account:Account[]
}