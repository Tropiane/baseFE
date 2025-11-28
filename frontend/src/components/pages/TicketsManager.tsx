import { useTickets } from "../../hooks/useTickets";
import { TicketTarget } from "../tickets/TicketTarget";

export const TicketsManager = () => {
  const {data, closedTickets, inProgressTickets, pendingTickets} = useTickets()

  if(data.length === 0) return <h1 className="text-center text-2xl font-bold text-gray-600">Cargando</h1>;
  return (
    <>
      <h1 className="text-center text-4xl my-8">Gestor de Tickets</h1>
      {/* //Pendientes */}
      <div className="ticketsContainer px-4 py-8 min-h-screen bg-gray-100 flex flex-col gap-8 ">

        <details>
          <summary className="flex-row text-center bg-blue-500 rounded-2xl text-xl p-5">Pendientes {pendingTickets.length}</summary>
          <div className="flex flex-row flex-wrap gap-4 justify-center mt-4 mb-8">
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
          <div className="flex flex-row flex-wrap gap-4 justify-center mt-4 mb-8">
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
          <summary className="flex-row text-center bg-gray-500 rounded-2xl text-xl p-5">Finalizados {closedTickets.length}</summary>
        {/* // Finalizados */}
        <div className="flex flex-row flex-wrap gap-4 justify-center mt-4 mb-8">
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