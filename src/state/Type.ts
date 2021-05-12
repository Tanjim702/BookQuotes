import { Quote } from "../interfaces/Quote.interface";
import { User } from "../interfaces/User.interface";
export   type ACTIONTYPE = 
| {type:"SIGNUP",payload:{user:User}}
| {type:"ADDQUOTE",payload:{quote:Quote}}
