import { useState } from "react";
import { showTicketAlert } from "../../utils/alerts";
import { createTicket } from "../../utils/backendTicketConnections";
import type { Ticket } from "../tickets/TicketInterfaces";

export const CreateTicket = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    assignedTo: "",
    status: "Pendiente" as Ticket["status"],
    priority: "Media" as Ticket["priority"],
    });

    const inputClass = " w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";


    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value,
    }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, description } = formData;

    if (!name || !email || !phone || !description) {
        return showTicketAlert("Todos los campos son obligatorios", "error");
    }

    try {
        await createTicket({
        formId: 0,
        name,
        email,
        phone,
        description,
        status: formData.status,
        priority: formData.priority,
        sendAt: Date.now(),
        comments: [],
        assignedTo: formData.assignedTo,
        closedAt: Date.now(),
        });

        showTicketAlert("Caso creado correctamente", "success");

        setFormData({
            name: "",
            email: "",
            phone: "",
            description: "",
            assignedTo: "",
            status: "Pendiente",
            priority: "Media",
        });

    } catch (error) {
        showTicketAlert("Error al crear el caso", "error");
        console.error(error);
    }
    };

    return (
    <div className="h-screen bg-gray-400 bg-opacity-50 flex justify-center items-start p-6">
      <div className="h-full w-full bg-gray-800 p-6 rounded-lg shadow text-center">
        <h1 className="text-xl font-semibold text-white mb-6">
          Crear nuevo caso
        </h1>

        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre del cliente"
            className= {inputClass}
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className= {inputClass}
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Teléfono"
            className= {inputClass}
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Descripción del caso"
            className= {inputClass + " resize-none"}
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="text"
            name="assignedTo"
            placeholder="Asignado a"
            className= {inputClass}
            value={formData.assignedTo}
            onChange={handleChange}
          />

          <div className="flex gap-4">
            <select
              name="status"
              className=" w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none "
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Pendiente">Pendiente</option>
              <option value="En Curso">En curso</option>
              <option value="Finalizado">Finalizado</option>
            </select>

            <select
              name="priority"
              className=" w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition appearance-none "
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Crear caso
          </button>
        </form>
      </div>
    </div>
  );
};