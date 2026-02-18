import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import { showTicketAlert } from "../../utils/alerts";
import { UserContext } from "../../hooks/UserContext";
import { TicketsContext } from "../../hooks/TicketsContext";
import type { CommentsInterface } from "./TicketInterfaces";

export const ViewTicket = () => {
  const {user} = useContext(UserContext);
  const { id } = useParams();

  const {getTicketById, selectedTicket, addTicketComment, changeTicketStatus, deleteTicket} = useContext(TicketsContext);
  const navigate = useNavigate();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<CommentsInterface[]>([]);
  const [status, setStatus] = useState(""); 
  
  useEffect(() => {
    try {
      if (id) {
        getTicketById(Number(id));
        setComments(selectedTicket?.comments || []);
        
      }
    } catch (error) {
      console.log(error);
      
    }
  }, [selectedTicket, id, getTicketById]);
  
  /* ======================
     ACTIONS
  ====================== */

  const submitComment = async () => {
    const newComment = comment.trim().toLowerCase();
    if (!newComment || !selectedTicket) return;
    
    await addTicketComment(selectedTicket.formId, newComment, user?.name);
    // setComments(prev => [...prev, {comment: newComment, createdAt: Date.now(), user: user?.name || ""}]);
    setComment("");

    showTicketAlert("Comentario agregado", "success");
  };

  const changeStatus = async(e: React.ChangeEvent<HTMLSelectElement>)=>{
        const status = e.target.value;
        
        if(status.length == 0 || status != "Pendiente" && status != "En Curso" && status != "Finalizado") return;
        if (!selectedTicket) return;
        
        try {
            setStatus(status);
            
            showTicketAlert(`Se ha cambiado el estado del ticket a ${status}`, "success");
            return await changeTicketStatus(selectedTicket.formId, status, user?.name);
        } catch (error) {
            console.log('Error cambiando el estado', error);
        }
        
    }

  const handleDelete = async () => {
    if (!selectedTicket) return;

    await deleteTicket(selectedTicket.formId);
    showTicketAlert("Ticket eliminado", "success");

    navigate("/tickets"); // ajustá a tu ruta real
  };

  /* ======================
     UI
  ====================== */

  if (!selectedTicket) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Cargando ticket...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-semibold">
            Ticket #{selectedTicket.formId}
          </h1>

          <div className="flex gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ticketStatus ${status.toLowerCase()}`}>
              {status}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
              Prioridad: {selectedTicket.priority || "Sin prioridad"}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-500">
              Estado: {selectedTicket.status}
            </span>
          </div>
        </div>

        {/* Cliente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-gray-500">Nombre</p>
            <p className="font-medium">{selectedTicket.name}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-medium">{selectedTicket.email}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Teléfono</p>
            <a
              href={`https://wa.me/+598${selectedTicket.phone}`}
              target="_blank"
              className="flex items-center gap-1 text-blue-600"
            >
              {selectedTicket.phone} <FaWhatsapp className="text-green-500" />
            </a>
          </div>
        </div>

        {/* Estado */}
        <div className="flex flex-col md:w-1/3">
          <label className="text-xs text-gray-500 mb-1">
            Cambiar estado
          </label>
          <select
            value={status}
            onChange={changeStatus}
            className="border rounded-lg p-2"
          >
            <option value="">{selectedTicket.status}</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En Curso">En Curso</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        </div>

        {/* Fechas */}
          <div className="mt-4 ">
            <div className="border-b-2 w-fit p-1">Creado el: <span className="font-bold">{new Date(selectedTicket.sendAt).toLocaleString()} </span></div>
            <div className="border-b-2 w-fit p-1">Fecha limite: <span className="font-bold">{selectedTicket.limitDate ? new Date(selectedTicket.limitDate).toLocaleString() : "N/A"} </span></div>
            <div className="border-b-2 w-fit p-1">Cerrado el: <span className="font-bold">{selectedTicket.closedAt ? new Date(selectedTicket.closedAt).toLocaleString() : "N/A"} </span></div>
            <div>Cerrado por: <span className="font-bold">{selectedTicket.closedBy || "N/A"} </span></div>
          </div>

        {/* Descripción */}
        <div>
          <p className="text-xs text-gray-500 mb-1">
            Descripción
          </p>
          <div className="bg-gray-50 border rounded-xl p-4 text-sm">
            {selectedTicket.description}
          </div>
        </div>

        {/* Comentarios */}
        <div className="space-y-3">
          <p className="text-xs text-gray-500">Comentarios</p>


          {comments.length > 0 ? comments.map((c, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-xl p-3 text-sm"
            >
              <p>{c?.comment}</p>
              <ul className="flex justify-between text-xs text-gray-500">
                <li>{c.user}</li>
                <li>{new Date(c.createdAt).toLocaleString()}</li>
              </ul>
            </div>
          )) 
           :
          <div className="bg-gray-50 border rounded-xl p-3 text-sm">
            <p>No hay comentarios</p>
          </div>
          }

          

          <textarea
            placeholder="Agregar comentario"
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="w-full border rounded-xl p-3 min-h-[100px]"
          />

          <div className="flex gap-4">
            <button
              onClick={submitComment}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-1/2"
            >
              Agregar comentario
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded-lg w-1/2"
            >
              Eliminar ticket
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
