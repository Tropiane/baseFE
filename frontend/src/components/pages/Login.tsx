import { useState, useContext } from "react"

import { UserContext } from "../../hooks/UserContext";
import { login } from "../../utils/backendUserConnection";
import { showLoginAlert } from "../../utils/alerts";


export const Login = ()=>{
    const [formData, setFormData] = useState({
        email:"",
        password: ""
    });
    const {setUser} = useContext(UserContext);
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

        const res = await login(formData);
        console.log(res);
        
        if(res === 500) return showLoginAlert("error al iniciar sesion", "error");
        
        if(res.message === "Login exitoso") {
              showLoginAlert("Inicio de sesion exitoso", "success");
              setUser(res);
              setTimeout(()=>{
                window.location.href = "/tickets-manager";
              }, 2000)
        }
    }
    return(
<div className=" flex flex-col items-center justify-center p-4 mb-20">
  <h1 className="text-3xl font-semibold text-blue-700">Iniciar sesión</h1>

  <form className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-sm border border-blue-200">
    
    <label htmlFor="email" className="text-lg font-medium text-black text-center">
      Email
    </label>
    <input
      type="text"
      name="email"
      onChange={handleChange}
      className="border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <label htmlFor="password" className="text-lg font-medium text-black">
      Contraseña
    </label>
    <input
      type="password"
      name="password"
      onChange={handleChange}
      className="border border-blue-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      onClick={handleSubmit}
      className="mt-2 bg-blue-600 text-white py-2 rounded-lg cursor-pointer hover:shadow-lg hover:bg-blue-700 transition font-medium active:scale-95"
    >
      Iniciar sesión
    </button>
  </form>
</div>

    )
}