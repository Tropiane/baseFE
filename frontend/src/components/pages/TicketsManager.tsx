import { useTickets } from "../../hooks/useTickets";
import { TicketTarget } from "../tickets/TicketTarget";

export const TicketsManager = () => {
  const {
    data,
    closedTickets,
    inProgressTickets,
    pendingTickets
  } = useTickets();

  if (data.length === 0) {
    return (
      <div className="flex justify-center mt-20">
        <h1 className="text-xl font-semibold text-gray-500">
          No hay tickets para mostrar
        </h1>
      </div>
    );
  }

  return (
    <section className="w-full min-h-auto bg-gray-100 px-6 py-8 space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">Tickets por estado</h2>
      {/* PENDIENTES */}
      <details className="group bg-gray-400 rounded-2xl shadow-sm border border-gray-200">
        <summary className="cursor-pointer select-none flex justify-between items-center px-6 py-4 text-xl font-semibold text-blue-700">
          <span>Pendientes</span>
          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            {pendingTickets.length}
          </span>
        </summary>

        <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pendingTickets.map(ticket => (
            <TicketTarget key={ticket.formId} {...ticket} />
          ))}
        </div>
      </details>

      {/* EN CURSO */}
      <details className="group bg-gray-400 rounded-2xl shadow-sm border border-gray-200">
        <summary className="cursor-pointer select-none flex justify-between items-center px-6 py-4 text-xl font-semibold text-green-600">
          <span>En curso</span>
          <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
            {inProgressTickets.length}
          </span>
        </summary>

        <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {inProgressTickets.map(ticket => (
            <TicketTarget key={ticket.formId} {...ticket} />
          ))}
        </div>
      </details>

      {/* FINALIZADOS */}
      <details className="group bg-gray-400 rounded-2xl shadow-sm border border-gray-200">
        <summary className="cursor-pointer select-none flex justify-between items-center px-6 py-4 text-xl font-semibold text-gray-700">
          <span>Finalizados</span>
          <span className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
            {closedTickets.length}
          </span>
        </summary>

        <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {closedTickets.map(ticket => (
            <TicketTarget key={ticket.formId} {...ticket} />
          ))}
        </div>
      </details>

    </section>
  );
};
