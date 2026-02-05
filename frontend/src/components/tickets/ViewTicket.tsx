import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import type { Ticket } from "./TicketInterfaces";
import {
  getTicketById,
  addTicketComment,
  changeTicketStatus,
  deleteTicket
} from "../../utils/backendTicketConnections";
import { showTicketAlert } from "../../utils/alerts";

export const ViewTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<Ticket | null>(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchTicket = async () => {
      if (!id) return;
      const res = await getTicketById(Number(id));
      setData(res);
      setComments(res.comments || []);
      setStatus(res.status);
    };

    fetchTicket();
  }, [id]);

  /* ======================
     ACTIONS
  ====================== */

  const submitComment = async () => {
    const newComment = comment.trim().toLowerCase();
    if (!newComment || !data) return;

    await addTicketComment(data.formId, newComment);
    setComments(prev => [...prev, newComment]);
    setComment("");

    showTicketAlert("Comentario agregado", "success");
  };

  const handleStatusChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!data) return;
    const newStatus = e.target.value;

    if (!["Pendiente", "En Curso", "Finalizado"].includes(newStatus)) return;

    showTicketAlert(
      `Estado cambiado a ${newStatus}`,
      "success"
    );
    setStatus(newStatus);
    await changeTicketStatus(data.formId, newStatus);

  };

  const handleDelete = async () => {
    if (!data) return;

    await deleteTicket(data.formId);
    showTicketAlert("Ticket eliminado", "success");

    navigate("/tickets"); // ajustá a tu ruta real
  };

  /* ======================
     UI
  ====================== */

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
          <h1 className="text-2xl font-semibold">
            Ticket #{data.formId}
          </h1>

          <div className="flex gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ticketStatus ${status.toLowerCase()}`}>
              {status}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
              Prioridad: {data.priority || "Sin prioridad"}
            </span>
          </div>
        </div>

        {/* Cliente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs text-gray-500">Nombre</p>
            <p className="font-medium">{data.name}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-medium">{data.email}</p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Teléfono</p>
            <a
              href={`https://wa.me/+598${data.phone}`}
              target="_blank"
              className="flex items-center gap-1 text-blue-600"
            >
              {data.phone} <FaWhatsapp className="text-green-500" />
            </a>
          </div>
        </div>

        {/* Estado */}
        <div className="flex flex-col md:w-1/3">
          <label className="text-xs text-gray-500 mb-1">
            Cambiar estado
          </label>
          <select
            value={status}
            onChange={handleStatusChange}
            className="border rounded-lg p-2"
          >
            <option value="Pendiente">Pendiente</option>
            <option value="En Curso">En Curso</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        </div>

        {/* Descripción */}
        <div>
          <p className="text-xs text-gray-500 mb-1">
            Descripción
          </p>
          <div className="bg-gray-50 border rounded-xl p-4 text-sm">
            {data.description}
          </div>
        </div>

        {/* Comentarios */}
        <div className="space-y-3">
          <p className="text-xs text-gray-500">Comentarios</p>

          {comments.map((c, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-xl p-3 text-sm"
            >
              {c}
            </div>
          ))}

          <textarea
            placeholder="Agregar comentario"
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="w-full border rounded-xl p-3 min-h-[100px]"
          />

          <div className="flex gap-4">
            <button
              onClick={submitComment}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-1/2"
            >
              Agregar comentario
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded-lg w-1/2"
            >
              Eliminar ticket
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
