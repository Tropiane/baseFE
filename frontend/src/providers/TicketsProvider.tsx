import { useState } from "react";
import { TicketsContext } from "../hooks/TicketsContext";
import { addTicketComment, changeTicketStatus, createTicket, deleteTicket, getTicketById, getTickets, type Ticket } from "../utils/backendTicketConnections";


export const TicketsProvider = ({ children } : { children: React.ReactNode }) => {
    {/** Estados **/}
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

    const [loading, setLoading] = useState(false);

    {/**Funciones **/}

    const pGetTickets = async () =>{
        const res = await getTickets();

        if(!res.data) setLoading(true);
        setTickets(res.data);
    }

    const pGetTicketById = async (id: number) => {
        const res = await getTicketById(id);
        if(!res) setLoading(true);
        setSelectedTicket(res);
    }

    const pCreateTicket = async (ticket: Ticket) => {
        await createTicket(ticket);
    }

    const pAddTicketComment = async (id: number, comment: string, user?: string) => {
        const res = await addTicketComment(id, comment, user);
        return res;
    }

    const pDeleteTicket = async (id: number) => {
        await deleteTicket(id);
    }

    const pChangeTicketStatus = async (id: number, status: string, user?: string) => {
        const res = await changeTicketStatus(id, status, user);
        return res;
    }

    {/**Utilidades **/}

    const clearSelectedTicket = () => setSelectedTicket(null);


    {/** Provider **/}
    return (
        <TicketsContext.Provider value={
            {
                tickets,
                selectedTicket,
                loading,
                getTickets: pGetTickets,
                getTicketById: pGetTicketById,
                createTicket: pCreateTicket,
                updateTicket: pCreateTicket,
                deleteTicket: pDeleteTicket,
                addTicketComment: pAddTicketComment,
                changeTicketStatus: pChangeTicketStatus,
                clearSelectedTicket,
                
            }
        }>
            {children}
        </TicketsContext.Provider>
    );
};