import { useState, useContext } from "react"

import { UserContext } from "../../hooks/UserContext";
import { login } from "../../utils/backendUserConnection";
import { showLoginAlert } from "../../utils/alerts";


export const Login = ()=>{
    const [formData, setFormData] = useState({
        email:"",
        password: ""
    });
    const {setUser, setToken} = useContext(UserContext);

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
        
        if(res === 500) return showLoginAlert("error al iniciar sesion", "error");
        
        showLoginAlert("Inicio de sesion exitoso", "success");
        localStorage.setItem("refreshToken", res.refreshToken);
        setToken(res.accessToken);
        setUser(res.user);
    }

    return(
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">

  {/* Branding */}
  <div className="mb-8 text-center">
    <h1 className="text-4xl font-bold text-blue-700 tracking-tight">
      Nexo
    </h1>
    <p className="text-gray-600 mt-2 text-sm">
      Gestión inteligente de consultas y clientes
    </p>
  </div>

  {/* Card */}
  <form className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-blue-100">

    <h2 className="text-xl font-semibold text-gray-800 text-center">
      Iniciar sesión
    </h2>
    
    <div className="flex flex-col gap-1">
      <label htmlFor="email" className="text-sm font-medium text-gray-600">
        Email
      </label>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        placeholder="ejemplo@email.com"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label htmlFor="password" className="text-sm font-medium text-gray-600">
        Contraseña
      </label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        placeholder="••••••••"
      />
    </div>

    <button
      onClick={handleSubmit}
      className="mt-2 bg-blue-600 text-white py-2.5 rounded-lg cursor-pointer hover:bg-blue-700 transition font-semibold active:scale-95 shadow-md"
    >
      Ingresar a Nexo
    </button>
  </form>

  <p className="text-xs text-gray-500 mt-6">
    © {new Date().getFullYear()} Nexo. Todos los derechos reservados.
  </p>
</div>
    )
}