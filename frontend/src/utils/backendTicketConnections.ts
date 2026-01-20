import { ticketConnect } from "./axios.connection";

interface Ticket {
  comments: never[];
  status: string;
  formId?: number;
  name: string;
  email: string;
  phone: string;
  description: string;
}

async function getTickets() {
  const res = await ticketConnect.get<Ticket[]>("/api/form");
  
  const {data, headers} = res;
  return {data, headers};
}

async function createTicket(ticket: Ticket): Promise<Ticket[]> {
  const res = await ticketConnect.post("/api/form", ticket);
  return res.data;
}

async function addTicketComment(id: number, comment: string) {
  const res = await ticketConnect.patch("/api/form", { id, comment });
  return res.data;
}

async function deleteTicket(id: number) {
  const res = await ticketConnect.delete(`/api/form`, {
    data: { id },
  });
  return res.data;
}

async function changeTicketStatus(formId: number, status: string) {
  const res = await ticketConnect.patch("/api/form/change-status", {
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