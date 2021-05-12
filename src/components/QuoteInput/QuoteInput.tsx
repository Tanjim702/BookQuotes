import { FC } from "react"
import './QuoteInput.css'

interface QuoteInputProps {
    name: string,
    value: string,
    handleChange: (name:string,value:string) => void;
}
const QuoteInput: FC<QuoteInputProps> = ({ name, value, handleChange }) => {
    return (
        <input type="text" 
        className="quoteInput" 
        name={name}
        placeholder={name.toUpperCase()} 
        value={value} 
        onChange={(e)=>handleChange(e.target.name,e.target.value)} />
    )
}

export default QuoteInput