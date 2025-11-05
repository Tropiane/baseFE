import { useEffect, useState } from "react";
import type { Ticket } from "./TicketsManager";

import { TicketTarget } from "../targets/TicketTarget";

export const ViewAllTickets = (data: Ticket[]) => {
    const [tickets, setTickets] = useState<Ticket[]>([]);
  const [pendingTickets, setPendingTickets] = useState<Ticket[]>([]);
  const [inProgressTickets, setInProgressTickets] = useState<Ticket[]>([]);
  const [closedTickets, setClosedTickets] = useState<Ticket[]>([]);
  

  useEffect(() => {
    setTickets(data);
    setPendingTickets(tickets.filter((ticket) => ticket.status === "Pendiente"));
    setInProgressTickets(tickets.filter((ticket) => ticket.status === "En Curso"));
    setClosedTickets(tickets.filter((ticket) => ticket.status === "Finalizado"));
    console.log(data);
    
  }, [tickets, data]);

  

  return (
    <>
     
      <div className="ticketsContainer">

        {/* //Pendientes */}
        <div className="pendingTickets">
          {pendingTickets.map((ticket) => (
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

        {/* //En Curso */}
        <div className="inProgressTickets">
          {inProgressTickets.map((ticket) => (
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

        {/* // Finalizados */}
        <div className="closedTickets">
          {closedTickets.map((ticket) => (
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
      </div>
    </>
  );
};