import { FC, useContext, useState } from "react";
import QuoteDisplay from "../../components/Quote/Quote";
import { AppCtx } from "../../state/state";
import "./Quotes.css"
const Quotes: FC = () => {
    const [selectedQuoteType, setSelectedQuoteType] = useState<"recent" | "own">("recent")
    const data = useContext(AppCtx)
    const recentarr = [1, 2, 3, 4, 5]
    const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    const setSelelected = (value: "recent" | "own") => {
        setSelectedQuoteType(value)
    }
    return (
        <div className="quotesContainer">
            <div className="quotesType">
                <button
                    onClick={() => setSelelected("recent")}
                    className={`quotesType__btn${selectedQuoteType === "recent" ? "--current" : ""}`} >
                    Recent quotes
                </button>
                <button
                    onClick={() => setSelelected("own")}
                    className={`quotesType__btn${selectedQuoteType === "own" ? "--current" : ""}`}>
                    My quotes
                </button>
            </div>
            <div className="quotes">
                {/* {selectedQuoteType === "recent" && recentarr.map(i => (
                    <Quote />
                ))} */}
                {selectedQuoteType === "own" && data?.user.quotes.map(quote => (
                    <QuoteDisplay quote={quote}/>
                ))}

            </div>
        </div>
    )
}
export default Quotes