import { useContext, useEffect, useState } from "react";
import type { Ticket } from "../components/tickets/TicketInterfaces";
import { getTickets } from "../utils/backendTicketConnections";
import { UserContext } from "./UserContext";

// Backend response type

export const useTickets = () => {
  const {token, setToken} = useContext(UserContext);
  const [data, setData] = useState<Ticket[]>([]);
  const [pendingTickets, setPendingTickets] = useState<Ticket[]>([]);
  const [inProgressTickets, setInProgressTickets] = useState<Ticket[]>([]);
  const [closedTickets, setClosedTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);

        const res = await getTickets();
        
        const normalized: Ticket[] = res.data.map(ticket => ({
          formId: ticket.formId ?? 0,
          name: ticket.name,
          email: ticket.email,
          phone: ticket.phone,
          description: ticket.description,
          status: ticket.status ?? "Pendiente",
          comments: ticket.comments ?? []
        }));

        setData(normalized);
        setToken(res.headers.authorization.split(" ")[1]);
      } catch (err) {
        setError("Error al obtener los tickets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [token, setToken]);

  useEffect(() => {
    setPendingTickets(
      data.filter(ticket => ticket.status === "Pendiente")
    );
    setInProgressTickets(
      data.filter(ticket => ticket.status === "En Curso")
    );
    setClosedTickets(
      data.filter(ticket => ticket.status === "Finalizado")
    );
  }, [data]);

  return {
    data,
    pendingTickets,
    inProgressTickets,
    closedTickets,
    loading,
    error
  };
};
