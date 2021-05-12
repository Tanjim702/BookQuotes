import { User } from "../interfaces/User.interface";

export const ChecKUserSignUpForm = (user:User) => {
    for(let value of Object.values(user)){
        if(value === ""){
            return false
        }
    }
    return true
}