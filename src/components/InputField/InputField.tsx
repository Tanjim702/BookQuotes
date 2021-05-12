import React, { FC } from "react"
import "./InputField.css"
interface propType { 
    labelName: string, 
    value: string, 
    inputName: string, 
    handleChange: (name:string,value:string) => void 
}
const InputField: FC<propType> = ({labelName,value,inputName,handleChange}) => {
    return (
        <div className="inputField">
            <label>{labelName}</label>
            <input type="text" 
            placeholder={labelName}
            name={inputName} 
            value={value} 
            onChange={(e)=>handleChange(e.target.name,e.target.value) } />
        </div>
    )
}

export default InputField