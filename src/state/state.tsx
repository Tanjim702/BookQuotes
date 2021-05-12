import { createContext, FC, useReducer } from "react";
import { Quote } from "../interfaces/Quote.interface";
import { User } from "../interfaces/User.interface";
import { AppContextInterface } from "./AppContext.interface";
import { ACTIONTYPE } from "./Type";

export const AppCtx = createContext<AppContextInterface | null>(null)



export const ContextProvider: FC = ({ children }) => {
    const signupUser = (userData: User) => {
        dispatch({
            type: "SIGNUP",
            payload: { user: userData }
        })
    }
    const addQuote = (quote: Quote) => {
        dispatch({
            type: "ADDQUOTE",
            payload: {
                quote: quote
            }
        })
    }
    const loadQuotes = () => {
        return
    }
    const dumbData: AppContextInterface = {
        user: { userID: '', username: "", firstName: "", lastName: "", quotes: [], favouriteQuotes: [] },
        quotes: [],
        isAuthenticated: false,
        signupUser: signupUser,
        addQuote: addQuote
    }
    function reducer(state: AppContextInterface, action: ACTIONTYPE): AppContextInterface {
        switch (action.type) {
            case "SIGNUP":
                return { ...state, isAuthenticated: true, user: action.payload.user }
            case "ADDQUOTE":
                return {...state,user:{...state.user,quotes:[...state.user.quotes,action.payload.quote]}}    
            default:
                console.log(`Default`);
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, dumbData)

    return (
        <AppCtx.Provider value={state}>
            {children}
        </AppCtx.Provider>
    )
}