import { useTickets } from "../../hooks/useTickets";
import { TicketTarget } from "../tickets/TicketTarget";

export const TicketsManager = () => {
  const {data, closedTickets, inProgressTickets, pendingTickets} = useTickets()

  if(data.length === 0) return <h1>Cargando</h1>;
  return (
    <>
      {/* //Pendientes */}
      <div className="ticketsContainer">

        <details>
          <summary className="flex-row text-center bg-red-300 rounded-2xl text-xl p-5">Pendientes {pendingTickets.length}</summary>
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
        </details>

        {/* //En Curso */}
        <details>
          <summary className="flex-row text-center bg-green-400 rounded-2xl text-xl p-5">En curso {inProgressTickets.length}</summary>
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
        </details>

        <details>
          <summary className="flex-row text-center bg-blue-400 rounded-2xl text-xl p-5">Finalizados {closedTickets.length}</summary>
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
      </details>
      </div>
    </>
  );
};