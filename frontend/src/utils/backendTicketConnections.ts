import { ticketConnect } from "./axios.connection";

import type { Ticket } from "../components/tickets/TicketInterfaces";
import { getAuthToken } from "./auth.token";

async function getTickets() {
  const res = await ticketConnect.get<Ticket[]>("/api/form");
  
  const {data, headers} = res;
  
  return {data, headers};
}

async function getTicketById(id: number) {
  const token = getAuthToken();
  const res = await ticketConnect.get<Ticket>(`/api/form/${id}`,{
    headers: {
      Authorization: `Bearer ${token}`,
  }});
  return res.data;
}

async function createTicket(ticket: Ticket): Promise<Ticket> {
  const res = await ticketConnect.post<Ticket>("/api/form", ticket);
  
  return res.data;
}


async function addTicketComment(id: number, comment: string, userName?: string) {
  const res = await ticketConnect.patch("/api/form", { id, comment, userName });
  return res.data;
}

async function deleteTicket(id: number) {
  const res = await ticketConnect.delete(`/api/form`, {
    data: { id },
  });
  return res.data;
}

async function changeTicketStatus(formId: number, status: string, userName?: string) {
  const res = await ticketConnect.patch("/api/form/change-status", {
    formId,
    status,
    userName
  });
  
  return res.data;
}

export {
  getTickets,
  getTicketById,
  createTicket,
  addTicketComment,
  deleteTicket,
  changeTicketStatus,
};

export type { Ticket };