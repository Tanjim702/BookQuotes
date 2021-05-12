import { FC, useState } from "react"
import Button from "../../components/Button/Button"
import InputField from "../../components/InputField/InputField"
import { User } from "../../interfaces/User.interface"
import { ChecKUserSignUpForm } from "../../Utils/CheckUserSignUpForm"
import { generateRandomId } from "../../Utils/generateRandomId"

import "./Login.css"
const Login: FC = () => {

    const [user, setUser] = useState<User>({} as User)

    const handleInputChange = (name: string, value: string) => {
        setUser(user => ({
            ...user,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUser(prev => ({ ...prev, userID: generateRandomId(12) }))
        if (ChecKUserSignUpForm(user)) {
            alert("User registered successfully")
            // setUsers(users => [...users, user])

        }
        return
    }
    return (
        <div className="form">
            <form onSubmit={e=>handleSubmit(e)} className="form__form">
                <InputField labelName="User name"
                    inputName="username" value={user.username}
                    handleChange={handleInputChange} />
                <InputField labelName="First name"
                    inputName="firstName" value={user.firstName}
                    handleChange={handleInputChange} />
                <InputField labelName="Last name"
                    inputName="lastName" value={user.lastName}
                    handleChange={handleInputChange} />
                <Button>Login in </Button>
            </form>
           

        </div>
    )
}
export default Login