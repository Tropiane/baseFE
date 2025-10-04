import { useState } from "react"
import { login } from "../../utils/backendUserConnection";


export const Login = ()=>{
    const [formData, setFormData] = useState({
        email:"",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        console.log({formData});
        
        await login(formData)
    }
    return(
        <div className="login">
            <form action="">
                <label htmlFor="email" className="fourthTitleFont">Email</label>
                <input type="text" name="email" onChange={handleChange}/>
                <label htmlFor="password" className="fourthTitleFont">Constrasena</label>
                <input type="text" name="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>iniciar sesion</button>
            </form>
        </div>
    )
}