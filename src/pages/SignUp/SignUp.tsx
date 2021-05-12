import { FC, useContext, useEffect, useState } from "react"
import Button from "../../components/Button/Button"
import InputField from "../../components/InputField/InputField"
import { User } from "../../interfaces/User.interface"
import { ChecKUserSignUpForm } from "../../Utils/CheckUserSignUpForm"
import { generateRandomId } from "../../Utils/generateRandomId";
import { AppCtx } from "../../state/state";
import "./SignUp.css"
const SignUp: FC = () => {
    const data = useContext(AppCtx)
    useEffect(()=>{
        fetch("/users")
            .then(res=>res.json())
            .then(data=>console.log(data))
    })
    const [user, setUser] = useState<User>(
        {
            username: "",
            userID: "",
            quotes: [],
            favouriteQuotes: [],
            lastName: "",
            firstName: ""
        })
    const handleInputChange = (name: string, value: string) => {
        setUser(user => ({
            ...user,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
        
        setUser(prev => ({ ...prev, userID: generateRandomId(12) }))
        data?.signupUser(user)
    }
    return (
        <div className="form">
            <form onSubmit={e => handleSubmit(e)} className="form__form">
                <InputField labelName="User name"
                    inputName="username" value={user.username}
                    handleChange={handleInputChange} />
                <InputField labelName="First name"
                    inputName="firstName" value={user.firstName}
                    handleChange={handleInputChange} />
                <InputField labelName="Last name"
                    inputName="lastName" value={user.lastName}
                    handleChange={handleInputChange} />
                <InputField labelName="Password" value="hdd" handleChange={handleInputChange} inputName="Password" />
                <Button>Join the group</Button>
            </form>


        </div>
    )
}
export default SignUp