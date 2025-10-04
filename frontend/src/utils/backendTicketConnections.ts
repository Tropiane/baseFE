interface Ticket{
    formId?: number,
    name: string,
    email: string,
    phone: string,
    description: string
}

const API_URL = import.meta.env.VITE_TICKET_API;

async function getTickets(): Promise<Ticket[]>{
    const res = await fetch(API_URL, {
        credentials: "include"
    });

    if(!res.ok){
        throw new Error("Error al recuperar los tickets")
    };

    return res.json();
}

async function createTicket(ticket: Ticket): Promise<Ticket[]>{
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(ticket)
    })

    if(res.ok){
        throw new Error("Error generando el nuevo ticket")
    }

    return res.json()
}

async function addTicketComment(id:number, comment: string) {
    const res = await fetch(API_URL, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id, comment})
    })

    if(!res.ok){
        throw new Error("Error generando ticket")
    };

    return res.json();
}

async function deleteTicket(id:number){
    const res = await fetch(API_URL, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id})
    });

    if(!res.ok){
        throw new Error("Error al eliminar el ticket")
    };

    return res.json();
}

export {getTickets, createTicket, addTicketComment, deleteTicket}