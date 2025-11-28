import React, { useState } from "react";
import { createTicket } from "../../utils/backendTicketConnections";
import { showTicketAlert } from "../../utils/alerts";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        description: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault();
        if(formData.name.length === 0 || formData.email.length === 0 || formData.phone.length === 0 || formData.description.length === 0) return showTicketAlert("Todos los campos son obligatorios", "error");
        return (showTicketAlert("Su consulta ha sido enviada", "success"), 
        setTimeout(() => window.location.reload(), 2000), await createTicket(formData), setFormData({name: '', email: '', phone: '', description: ''})); 
    }
    return (
        <form className="flex flex-col gap-4 w-full max-w-md">
            <label htmlFor="name">Nombre</label>
            <input className="border border-gray-400 p-2 rounded" type="text" name="name" onChange={handleChange}/>
            <label htmlFor="email">Correo</label>
            <input className="border border-gray-400 p-2 rounded" type="text" name="email" onChange={handleChange}/>
            <label htmlFor="phone">Celular</label>
            <input className="border border-gray-400 p-2 rounded" type="text" name="phone" onChange={handleChange}/>
            <label htmlFor="description">Consulta</label>
            <input className="border border-gray-400 p-2 rounded" type="text" name="description" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit} className="bg-blue-600 p-5 text-xl rounded active:bg-blue-500 cursor-pointer">Enviar</button>
        </form>
    )
}

export default Form