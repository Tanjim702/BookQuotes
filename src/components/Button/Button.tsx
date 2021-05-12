import React, { FC } from "react";
import './Button.css'
const Button:FC<{color?:string,onClick?:(arg:React.FormEvent)=>void}> = ({children,color,onClick}) => {
    return (
        <button 
        className="btn" 
        color={color ? color : ''} 
        onClick={onClick? (e)=>onClick(e) : ()=>{}}>
            {children}
        </button>
    )
}

export default Button