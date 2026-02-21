import { useTickets } from "../../hooks/useTickets";
import { TicketsManager } from "../tickets/TicketsFilterManager";

export const TicketQuantity = () => {
  const {
    data,
    closedTickets,
    inProgressTickets,
    pendingTickets
  } = useTickets()

  const {overdueTickets} = TicketsManager();

  return (
    <section className="w-full flex flex-wrap justify-between gap-4">
      
      {/* Total */}
      <div className="flex-1 min-w-[220px] bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
        <p className="text-sm font-medium text-gray-500">
          Tickets Totales
        </p>
        <p className="text-3xl font-bold text-gray-800 mt-2">
          {data.length}
        </p>
      </div>

      {/* Atrasados */
      overdueTickets.length > 0 && (
        <div className="flex-1 min-w-[220px] bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
          <p className="text-sm font-medium text-gray-500">
            Atrasados
          </p>
          <p className="text-3xl font-bold text-red-600 mt-2">
            {overdueTickets.length}
          </p>
        </div>
      )}
      {/* Pendientes */}
      <div className="flex-1 min-w-[220px] bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
        <p className="text-sm font-medium text-gray-500">
          Pendientes
        </p>
        <p className="text-3xl font-bold text-blue-600 mt-2">
          {pendingTickets.length}
        </p>
      </div>

      {/* En curso */}
      <div className="flex-1 min-w-[220px] bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
        <p className="text-sm font-medium text-gray-500">
          En curso
        </p>
        <p className="text-3xl font-bold text-green-600 mt-2">
          {inProgressTickets.length}
        </p>
      </div>

      {/* Cerrados */}
      <div className="flex-1 min-w-[220px] bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
        <p className="text-sm font-medium text-gray-500">
          Cerrados
        </p>
        <p className="text-3xl font-bold text-red-600 mt-2">
          {closedTickets.length}
        </p>
      </div>

    </section>
  )
}
