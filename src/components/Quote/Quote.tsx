import {FC} from "react";
import { Quote } from "../../interfaces/Quote.interface";
import "./Quote.css"
const QuoteDisplay:FC<{quote:Quote}> = ({quote}) => {

  console.log(quote);
  
  return (
    <div className="quoteContainer">
        <div className="quoteTitle">
          {quote.bookName} by <small>{quote.authorName}</small>
        </div>
        <div className="quoteSummary">
          <div className="quoteSummary--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate modi tempore dolor reprehenderit quis cumque velit magnam vitae enim?
          </div>
          <div className="quoteSummary--btns">
            <button className="quoteSummary--btns-btn">
              See more
            </button>
            <button className="quoteSummary--btns-btn">
              Edit
            </button>
          </div>
        </div>
    </div>
  )
}
export default QuoteDisplay