import { Quote } from "./Quote.interface";

export interface User{
    userID:string,
    username:string,
    firstName:string,
    lastName:string,
    quotes:Quote[],
    favouriteQuotes:Quote[],
}