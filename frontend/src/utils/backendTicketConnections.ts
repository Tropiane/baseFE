import { ticketConnect } from "./axios.connection";

interface Ticket {
  formId?: number;
  name: string;
  email: string;
  phone: string;
  description: string;
}

async function getTickets(token: string): Promise<Ticket[]> {
  const res = await ticketConnect.get<Ticket[]>("/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res);
  
  return res.data;
}

async function createTicket(ticket: Ticket): Promise<Ticket[]> {
  const res = await ticketConnect.post("/", ticket);
  return res.data;
}

async function addTicketComment(id: number, comment: string) {
  const res = await ticketConnect.patch("/", { id, comment });
  return res.data;
}

async function deleteTicket(id: number) {
  const res = await ticketConnect.delete(`/`, {
    data: { id },
  });
  return res.data;
}

async function changeTicketStatus(formId: number, status: string) {
  const res = await ticketConnect.patch("/change-status", {
    formId,
    status,
  });
  return res.data;
}

export {
  getTickets,
  createTicket,
  addTicketComment,
  deleteTicket,
  changeTicketStatus,
};

export type { Ticket };