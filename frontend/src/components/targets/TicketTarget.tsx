import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

import type { Ticket } from "../pages/TicketsManager";
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
        <div key={data.formId} className="ticketTarget">
            <ul className="listFont">
                <li>{data.name}</li>
                <li><a href={`https://wa.me/+598${data.phone}`} target="_blank">{data.phone} <FaWhatsapp /></a></li>
                <li>{data.email}</li>
                <li className={`ticketStatus ${status?.trim().toLowerCase()}`}>Estado: {status}</li>
            </ul>
            
            <div className="changeStatus">
                <label htmlFor="status">Cambiar Estado </label>
                <select name="status" id="status" onChange={changeStatus}>
                    <option value="Pendiente">Pendiente</option>
                    <option value="En Curso">En Curso</option>
                    <option value="Finalizado">Finalizado</option>
                </select>
            </div>
            <p className="textFont ticketDescription">{data.description}</p>

            <ul className="comments">
                <h4 className="fourthTitleFont">Comentarios</h4>
                {comments?.map((comment)=>(
                    <li key={comment}>{comment}</li>
                ))}
            </ul>
            <textarea name="description" id="" placeholder="Comentario" onChange={handleComment}></textarea>
            <div className="ticketButtons">
                <button type="submit" className="commentTicket" onClick={submitComment}>Agregar Comentario</button>
                <button className="deleteTicket" onClick={handleDelete}>Eliminar ticket</button>
            </div>
        </div>
    )
}