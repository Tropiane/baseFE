import { useEffect, useState } from "react";

import type { Ticket } from "../components/tickets/TicketInterfaces";
import { getTickets } from "../utils/backendTicketConnections";

// Backend response type (may have undefined formId)
interface BackendTicket {
    formId?: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    status?: string,
    comments?: string[]
}

export const useTickets = ()=>{
    const [data, setData] = useState<Ticket[]>([]);
    const [pendingTickets, setPendingTickets] = useState<Ticket[]>([]);
    const [inProgressTickets, setInProgressTickets] = useState<Ticket[]>([]);
    const [closedTickets, setClosedTickets] = useState<Ticket[]>([]);
      useEffect(() => {
        getTickets()
          .then((res: BackendTicket[]) => {
            const updatedData = res.map((ticket: BackendTicket) => ({
              formId: ticket.formId ?? 0,
              name: ticket.name,
              email: ticket.email,
              phone: ticket.phone,
              description: ticket.description,
              status: ticket.status,
              comments: ticket.comments
            }));
            setData(updatedData);
          })
          .catch((err) => console.log(err));
      }, []);
    
      useEffect(() => {
        
        setPendingTickets(data.filter((ticket) => ticket.status === "Pendiente"));
        setInProgressTickets(data.filter((ticket) => ticket.status === "En Curso"));
        setClosedTickets(data.filter((ticket) => ticket.status === "Finalizado"));
      }, [data]);

      return{
        data,
        pendingTickets,
        inProgressTickets,
        closedTickets
      }
}