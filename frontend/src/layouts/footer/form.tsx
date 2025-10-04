import React, { useState } from "react";
import { createTicket } from "../../utils/backendTicketConnections";

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
        e.preventDefault()
        console.log({formData});
        await createTicket(formData)
        
    }
    return (
    <div className="footerForm">
        <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" onChange={handleChange}/>
            <label htmlFor="email">Correo</label>
            <input type="text" name="email" onChange={handleChange}/>
            <label htmlFor="phone">Celular</label>
            <input type="text" name="phone" className="Celular" onChange={handleChange}/>
            <label htmlFor="description">Consulta</label>
            <input type="text" name="description" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Enviar</button>
        </form>
    </div>
    )
}

export default Form