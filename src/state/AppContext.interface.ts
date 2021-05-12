import { Quote } from "../interfaces/Quote.interface";
import { User } from "../interfaces/User.interface";
export interface AppContextInterface {
    user:User,
    quotes:Quote[],
    isAuthenticated:boolean,
    signupUser:(user:User)=>void,
    addQuote:(quote:Quote)=>void,
}
