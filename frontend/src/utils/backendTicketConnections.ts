import { ticketConnect } from "./axios.connection";

interface Ticket{
    formId?: number,
    name: string,
    email: string,
    phone: string,
    description: string
}

async function getTickets(): Promise<Ticket[]>{
    try {
        const res = await ticketConnect.get<Ticket[]>('/', {
        withCredentials: true,
        })

        return res.data
    } catch (error) {
        throw new Error(`Error al obtener los datos ${error}`)
    }
}

async function createTicket(ticket: Ticket): Promise<Ticket[]>{
    try {
        const res = await ticketConnect.post('/', {
        formId: ticket.formId,
        name: ticket.name,
        email: ticket.email,
        phone: ticket.phone,
        description: ticket.description
    })
    
    return res.data

    } catch (error) {
        throw new Error(`Error al crear el ticket ${error}`)
    }
}

async function addTicketComment(id:number, comment: string) {
    try {
        const res = await ticketConnect.patch('/',{
            comment: comment,
            id: id
        })

        return res.data
    } catch (error) {
        throw new Error(`Error al agregar el comentario ${error}`)
    }
}

async function deleteTicket(id:number){
    try {
        const res = await ticketConnect.delete(`/${id}`,{
            data: {
                id: id
            }
        })

        return res.data
    } catch (error) {
        throw new Error(`Error al eliminar el ticket ${error}`)
    }
}

async function changeTicketStatus(formId:number, status:string){
    try {
        const res = await ticketConnect.patch('/change-status',{
            formId: formId,
            status: status
        });

        return res.data
    } catch (error) {
        throw new Error(`Error al cambiar el estado del ticket ${error}`)
    }
}

export {getTickets, createTicket, addTicketComment, deleteTicket, changeTicketStatus}