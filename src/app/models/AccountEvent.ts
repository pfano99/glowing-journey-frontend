import { Person } from "./Person,";

export interface AccountEvent {
    id?: number,
    name: string,
    amount: number,
    eventType: string,
    eventDate: number,
    user?: Person

}