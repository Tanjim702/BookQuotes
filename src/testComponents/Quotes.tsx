import { FC, useContext } from "react"
import { Quote } from "../interfaces/Quote.interface"
import { AppCtx } from "../state/state"

const Quotes:FC<{quotes:Quote[]}> = ({quotes})=>{
    const data = useContext(AppCtx)
    return (
        <ul>
           {data?.user.quotes.map(q=>(
               <li>
                   <div>
                       <h1>{q.bookName} | {q.authorName}</h1>
                       <div dangerouslySetInnerHTML={{__html:q.quote}}>
                           
                       </div>
                   </div>
               </li>
           ))}
        </ul>
    )
}
export default Quotes