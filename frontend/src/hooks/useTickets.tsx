import { useContext, useEffect, useMemo, useState } from "react";
import type { Ticket } from "../components/tickets/TicketInterfaces";
import { getTickets } from "../utils/backendTicketConnections";
import { UserContext } from "./UserContext";
import { refreshTokenAuth } from "../utils/auth.token.connection";

export const useTickets = () => {
  const { setToken } = useContext(UserContext);

  const [data, setData] = useState<Ticket[]>([]);
  
  const pendingTickets = useMemo(() => data.filter(ticket => ticket.status === "Pendiente"), [data]);
  const inProgressTickets = useMemo(() => data.filter(ticket => ticket.status === "En Curso"), [data]);
  const closedTickets = useMemo(() => data.filter(ticket => ticket.status === "Finalizado"), [data]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        setError(null);

        // Request principal
        const res = await getTickets();

        // Normalización defensiva de datos
        const normalized: Ticket[] = res.data.map(ticket => ({
          formId: ticket.formId ?? 0,

          name: ticket.name,
          email: ticket.email,
          phone: ticket.phone,
          description: ticket.description,

          sendAt: ticket.sendAt ?? "",
          closedAt: ticket.closedAt ?? null,
          closedBy: ticket.closedBy ?? undefined,
          limitDate: ticket.limitDate ?? undefined,

          status: ticket.status ?? "Pendiente",
          priority: ticket.priority ?? "Media",
          
          assignedTo: ticket.assignedTo ?? "",
          comments: ticket.comments ?? [],
        }));
        setData(normalized);
        // Solo seteamos token si el backend envía uno nuevo
        const authHeader = res.headers?.authorization;
        if (authHeader?.startsWith("Bearer ")) {
          setToken(authHeader.split(" ")[1]);
        }

      } catch (err: unknown) {

        // Si el access token expiró, intentamos refresh
        if (
          typeof err === "object" &&
          err !== null &&
          "response" in err &&
          typeof (err as { response?: { status?: number } }).response === "object" &&
          (err as { response?: { status?: number } }).response?.status === 401
        ) {
          try {            
            const { accessToken } = await refreshTokenAuth();
            setToken(accessToken);

            // Reintentamos la request original
            const retryRes = await getTickets();

            const normalized: Ticket[] = retryRes.data.map(ticket => ({
              formId: ticket.formId ?? 0,

              name: ticket.name,
              email: ticket.email,
              phone: ticket.phone,
              description: ticket.description,

              sendAt: ticket.sendAt ?? "",
              closedAt: ticket.closedAt ?? null,
              closedBy: ticket.closedBy ?? undefined,
              limitDate: ticket.limitDate ?? undefined,
              
              status: ticket.status ?? "Pendiente",
              priority: ticket.priority ?? "Normal",
              
              assignedTo: ticket.assignedTo ?? "",
              comments: ticket.comments ?? [],
            }));

            setData(normalized);
            return;

          } catch {
            // Refresh falló: sesión inválida
            setError("La sesión expiró. Inicie sesión nuevamente.");
            return;
          }
        }

        // Error no relacionado a auth
        console.error(err);
        setError("Error al obtener los tickets");

      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []); // No depende del token

  return {
    data,
    pendingTickets,
    inProgressTickets,
    closedTickets,
    loading,
    error
  };
};
