import { useContext, useEffect, useState } from "react";
import type { Ticket } from "../components/tickets/TicketInterfaces";
import { getTickets } from "../utils/backendTicketConnections";
import { UserContext } from "./UserContext";

// Backend response type
interface BackendTicket {
  formId?: number;
  name: string;
  email: string;
  phone: string;
  description: string;
  status?: string;
  comments?: string[];
}

export const useTickets = () => {
  const {token} = useContext(UserContext);
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

        const res: BackendTicket[] = await getTickets(token ?? "");
        
        const normalized: Ticket[] = res.map(ticket => ({
          formId: ticket.formId ?? 0,
          name: ticket.name,
          email: ticket.email,
          phone: ticket.phone,
          description: ticket.description,
          status: ticket.status ?? "Pendiente",
          comments: ticket.comments ?? []
        }));

        setData(normalized);
      } catch (err) {
        setError("Error al obtener los tickets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [token]);

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
