import React, { useState } from "react";
import type { Ticket } from "../pages/TicketsManager";
import { addTicketComment, deleteTicket } from "../../utils/backendTicketConnections";

export function TicketTarget(data: Ticket){
    const [comment, setComment] = useState('');

    const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        
        setComment(e.target.value);
    };

    const submitComment = async (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const addComment = comment.trim().toLowerCase();

        if(addComment.length == 0) return;
        await addTicketComment(data.formId, addComment);
        location.reload()
    };

    const handleDelete = async(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        await deleteTicket(data.formId);
    };
    return(
        <div key={data.formId} className="ticketTarget">
            <ul className="listFont">
                <li>{data.name}</li>
                <li>{data.phone}</li>
                <li>{data.email}</li>
                <li>Estado: <input list="statusList" placeholder={data.status}/></li>
            </ul>
            <datalist id="statusList">
                <option value="Pendiente"></option>
                <option value="En curso"></option>
                <option value="Finalizado"></option>
            </datalist>
            <p className="textFont">{data.description}</p>

            <ul className="comments">
                Comentarios
                {data.comments?.map((comment)=>(
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