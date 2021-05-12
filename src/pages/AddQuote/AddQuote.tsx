
import React, { FC, useContext, useState } from "react"
import { Quote } from "../../interfaces/Quote.interface"
import { User } from "../../interfaces/User.interface"
import { generateRandomId } from "../../Utils/generateRandomId"

import Reactquill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import QuoteInput from "../../components/QuoteInput/QuoteInput";

import './AddQuote.css'
import Button from "../../components/Button/Button";
import { AppCtx } from "../../state/state";
const AddQuote: FC = () => {

    const [quote, setQuote] = useState<Quote>({bookName:"",authorName:"",quote:"",quoteID:""})
    const [value, setvalue] = useState("")
    const data = useContext(AppCtx)

    const handleInputChange = (name: string, value: string) => {
        setQuote(quote => ({
            ...quote,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuote(prev => ({
            ...prev,
            quote:value,
            quoteID: generateRandomId(8)
        }))
        data?.addQuote(quote)

        console.log(quote);
        
        // setActiveUser(prev=>({...prev,quotes:[...prev.quotes,quote]}))

    }
    return (
        <div className="quoteWrapper">
            <form className="quote">
                <div className="quote__credits">
                    <QuoteInput name="bookName" value={quote.bookName} handleChange={handleInputChange} />
                    <QuoteInput name="authorName" value={quote.authorName} handleChange={handleInputChange} />
                </div>
                <div className="quote__main">

                    <Reactquill className="quote__main--textbox" theme="snow" value={value} onChange={setvalue} />
                </div>
                <Button onClick={handleSubmit}>Add</Button>
                {/* hjhjfhskjhsksd */}
              
            </form>

        </div>
    )
}
export default AddQuote