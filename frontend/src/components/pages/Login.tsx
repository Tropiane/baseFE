import { useState } from "react"
import { login } from "../../utils/backendUserConnection";
import { showLoginAlert } from "../../utils/alerts";


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
        
        if(formData.email.length === 0){
            showLoginAlert("El email no puede estar vacio");
            return
        };
        if(formData.password.length === 0){
            showLoginAlert("La contrasena no puede estar vacia");
            return
        };
        await login(formData); 
        window.location.href = "/tickets-manager";
    }
    return(
        <div className="login">
            <h1 className="titleFont">Iniciar sesion</h1>
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