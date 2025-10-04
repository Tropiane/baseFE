import { useEffect, useState } from "react";
import { getTickets } from "../../utils/backendTicketConnections";
import { TicketTarget } from "../targets/TicketTarget";

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

export interface Ticket{
    formId: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    status?: string,
    comments?: string[]
}

export const TicketsManager = () => {
  const [data, setData] = useState<Ticket[]>([]);
  useEffect(() => {
    getTickets()
      .then((res: BackendTicket[]) => {
        const updatedData = res.map((ticket: BackendTicket) => ({
          formId: ticket.formId ?? 0, // Ensure formId is always a number
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

  return (
    <>
      <h1 className="titleFont" style={{ textAlign: "center" }}>
        Gestion de tickets
      </h1>
      <div className="ticketsContainer">
        {data.map((ticket) => (
          <TicketTarget
            key={ticket.formId}
            formId={ticket.formId}
            description={ticket.description}
            name={ticket.name}
            phone={ticket.phone}
            email={ticket.email}
            status={ticket.status}
            comments={ticket.comments}
          />
        ))}
      </div>
    </>
  );
};