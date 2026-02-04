import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Ticket } from "./TicketInterfaces";
import { getTicketById } from "../../utils/backendTicketConnections";

export const ViewTicket = () => {
  const [data, setData] = useState<Ticket | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchTicket = async () => {
      if (!id) return;
      const ticketId = Number(id);
      const res = await getTicketById(ticketId);
      setData(res);
    };

    fetchTicket();
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Cargando ticket...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Ticket #{data.formId}
          </h1>

          <div className="flex gap-3">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
              {data.status}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
              Prioridad: {data.priority}
            </span>
          </div>
        </div>

        {/* Cliente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-gray-500">Nombre</p>
            <p className="text-sm font-medium">{data.name}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm font-medium">{data.email}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Teléfono</p>
            <p className="text-sm font-medium">{data.phone}</p>
          </div>
        </div>

        {/* Asignación y fechas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-gray-500">Asignado a</p>
            <p className="text-sm font-medium">
              {data.assignedTo || "Sin asignar"}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Fecha de creación</p>
            <p className="text-sm font-medium">
              {new Date(data.sendAt).toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Fecha de cierre</p>
            <p className="text-sm font-medium">
              {data.closedAt
                ? new Date(data.closedAt).toLocaleString()
                : "No cerrado"}
            </p>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <p className="text-xs text-gray-500 mb-1">Descripción del caso</p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 whitespace-pre-wrap">
            {data.description}
          </div>
        </div>

        {/* Comentarios (opcional) */}
        {data.comments && data.comments.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2">Comentarios</p>
            <div className="flex flex-col gap-3">
              {data.comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-sm"
                >
                  {comment}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
