import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import type { Ticket } from "./TicketInterfaces";
import { addTicketComment, changeTicketStatus, deleteTicket } from "../../utils/backendTicketConnections";
import { showTicketAlert } from "../../utils/alerts";

export function TicketTarget(data: Ticket){
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(data.comments || []);
    const [status, setStatus] = useState(data.status || '');

    useEffect(() => {
        setComments(data.comments || []);
    }, [data.comments]);
    

    //Ticket Actions
    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        
        setComment(e.target.value);
    };

    const submitComment = async (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const addComment = comment.trim().toLowerCase();

        if(addComment.length == 0) return;
        
        showTicketAlert("Comentario Agregado", "success");
        await addTicketComment(data.formId, addComment);
        setComment('');
        setComments([...comments, addComment]);
    };

    const handleDelete = async(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();

        showTicketAlert("Ticket Eliminado", "success");
        await deleteTicket(data.formId);
    };

    const changeStatus = async(e: React.ChangeEvent<HTMLSelectElement>)=>{
        const status = e.target.value;
        if(status.length == 0 || status != "Pendiente" && status != "En Curso" && status != "Finalizado") return;
        
        try {
            setStatus(status);

            showTicketAlert(`Se ha cambiado el estado del ticket a ${status}`, "success");
            await changeTicketStatus(data.formId, status);
        } catch (error) {
            console.log('Error cambiando el estado', error);
        }
        
    }

    //ticket
    return(
<div
  key={data.formId}
  className="
    shadow-md 
    p-6 
    rounded-2xl 
    mb-6 
    w-full 
    max-w-md 
    mx-auto 
    bg-white 
    border border-gray-200 
    flex flex-col gap-6
  "
>

  {/* Información principal */}
  <ul className="space-y-1 text-center">
    <li className="text-xl font-semibold text-gray-900">{data.name}</li>

    <li>
      <a
        href={`https://wa.me/+598${data.phone}`}
        target="_blank"
        className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1"
      >
        {data.phone} <FaWhatsapp className="text-green-500" />
      </a>
    </li>

    <li className="text-gray-700">{data.email}</li>

    <li
      className={`
        ticketStatus 
        ${status?.trim().toLowerCase()} 
        font-medium 
        mt-2 
        text-sm 
        px-2 py-1 
        rounded-full 
        bg-gray-100 
        inline-block
      `}
    >
      Estado: {status}
    </li>
  </ul>

  {/* Cambiar estado */}
  <div className="flex flex-col items-center gap-2">
    <label htmlFor="status" className="font-medium text-gray-800">
      Cambiar Estado
    </label>

    <select
      name="status"
      id="status"
      onChange={changeStatus}
      className="
        border border-gray-300 
        rounded-lg 
        p-2 
        bg-white 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500
      "
    >
      <option value="Pendiente">Pendiente</option>
      <option value="En Curso">En Curso</option>
      <option value="Finalizado">Finalizado</option>
    </select>
  </div>

  {/* Descripción */}
  <p className="text-gray-700 text-sm leading-relaxed bg-blue-50 p-3 rounded-lg">
    {data.description}
  </p>

  {/* Comentarios */}
  <ul className="flex flex-col gap-2 bg-gray-50 p-3 rounded-xl">
    <h4 className="text-lg font-semibold text-gray-800 text-center">
      Comentarios
    </h4>

    {comments?.map((comment) => (
      <li key={comment} className="text-sm text-gray-700 border-b pb-1">
        {comment}
      </li>
    ))}
  </ul>

  <textarea
    name="description"
    placeholder="Comentario"
    onChange={handleComment}
    className="
      border border-gray-300 
      rounded-xl 
      p-3 
      w-full 
      min-h-[90px]
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-500
    "
  ></textarea>

  {/* Botones */}
  <div className="flex justify-between gap-3 mt-2">

    <button
      type="submit"
      onClick={submitComment}
      className="
        bg-blue-600 
        text-white 
        px-4 
        py-2 
        rounded-lg 
        hover:bg-blue-700 
        transition
        w-1/2
      "
    >
      Agregar Comentario
    </button>

    <button
      onClick={handleDelete}
      className="
        bg-red-600 
        text-white 
        px-4 
        py-2 
        rounded-lg 
        hover:bg-red-700 
        transition
        w-1/2
      "
    >
      Eliminar ticket
    </button>

  </div>
</div>

    )
}