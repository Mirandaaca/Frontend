import { useState } from "react"
import { createUserList, updateUser } from "../../../services/userService"


const INIT_FORM = {
    id: null,
    name: "",
    email: "",
    password: "",
    avatar: ""
}
export default function CreateUser({setIsActive, userSelected, handleUserSelected}){
    const [form, setForm] = useState(INIT_FORM)
    const {name, email, password, avatar, id} = form


    const handleOnChange = ({target}) => {
        const {value, name} = target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleOnClick = async () => {
        try {
            const response =  !userSelected ? await createUserList(form) : await updateUser(form)
            console.log(JSON.stringify(response))
            setForm(INIT_FORM)
            setIsActive(false)
        } catch (error) {
            console.log("Error create user")
        }
    }

    return (
        <>
            <div>Create User</div>

            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' value={name} onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' value={email} onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' value={password} onChange={handleOnChange}/>
                </div>
                <div>
                    <label htmlFor="">Avatar</label>
                    <input type="text" name='avatar' value={avatar} onChange={handleOnChange}/>
                </div>

                <div>
                    <button type="button" onClick={handleOnClick}>Save</button>
                </div>
            </form>
        </>
    )
}