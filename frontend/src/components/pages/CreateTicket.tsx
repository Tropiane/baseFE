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
    linkName: "",
    linkUrl: "",
    limitDate: "",

    status: "Pendiente" as Ticket["status"],
    priority: "Media" as Ticket["priority"],
  });

  const inputClass =
    "w-full px-4 py-3 text-sm text-gray-800 bg-white border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  const labelClass = "text-sm font-medium text-gray-600";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, description } = formData;

    if (!name || !email || !phone || !description) {
      return showTicketAlert("Todos los campos son obligatorios", "error");
    }

    try {
      showTicketAlert("Caso creado correctamente", "success");
      await createTicket({
        formId: 0,
        ...formData,
        limitDate: formData.limitDate
          ? new Date(formData.limitDate).getTime()
          : undefined,
        sendAt: Date.now(),
        closedAt: null,
        comments: [],
      });

      
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
        assignedTo: "",
        linkName: "",
        linkUrl: "",
        limitDate: "",
        status: "Pendiente",
        priority: "Alta",
      });
    } catch (error) {
      showTicketAlert("Error al crear el caso", "error");
      console.error(error);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-100 px-6 py-10 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Crear nuevo ticket
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Completa los datos del cliente y el caso a gestionar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Datos del cliente */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Nombre</label>
              <input
                type="text"
                name="name"
                className={inputClass}
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass}>Correo electrónico</label>
              <input
                type="email"
                name="email"
                className={inputClass}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass}>Teléfono</label>
              <input
                type="text"
                name="phone"
                className={inputClass}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={labelClass}>Asignado a</label>
              <input
                type="text"
                name="assignedTo"
                className={inputClass}
                value={formData.assignedTo}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Descripción */}
          <div>
            <label className={labelClass}>Descripción del caso</label>
            <textarea
              name="description"
              rows={4}
              className={`${inputClass} resize-none`}
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* enlaces adicionales */}
          <div>
            <label className={labelClass}>Enlaces adicionales</label>
            <div className="flex flex-row">
                <input type="text" 
              className={inputClass}
              value={formData.linkName}
              name="linkName"
              placeholder="Nombre del enlace"
              onChange={handleChange}/>

              <input type="text"
              className={inputClass} 
              value={formData.linkUrl}
              name="linkUrl"
              placeholder="url"
              onChange={handleChange}/>
            </div>

            
          </div>

          {/* Fecha limite */}
          
          <div>
            <label className={labelClass}>Fecha limite</label>
            <input
              type="date"
              name="limitDate"
              value={formData.limitDate}
              className={inputClass}
              onChange={handleChange}
            />
          </div>

          {/* Estado y prioridad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Estado</label>
              <select
                name="status"
                className={inputClass}
                value={formData.status}
                onChange={handleChange}
              >
                <option>Pendiente</option>
                <option>En Curso</option>
                <option>Finalizado</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Prioridad</label>
              <select
                name="priority"
                className={inputClass}
                value={formData.priority}
                onChange={handleChange}
              >
                <option>Baja</option>
                <option>Media</option>
                <option>Alta</option>
              </select>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-nexo-deep hover:bg-green-600 text-white text-sm font-medium transition"
            >
              Crear ticket
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};
