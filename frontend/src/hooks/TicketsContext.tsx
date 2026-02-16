import React from "react";

import type { Ticket } from "../components/tickets/TicketInterfaces";

type TicketsContextType = {
    tickets: Ticket[];
    selectedTicket: Ticket | null;

    loading: boolean;

    getTickets: () => Promise<void>;
    getTicketById: (id: number) => Promise<void>;
    createTicket: (ticket: Ticket) => Promise<void>;
    updateTicket: (ticket: Ticket) => Promise<void>;
    deleteTicket: (ticketId: number) => Promise<void>;
    addTicketComment: (ticketId: number, comment: string, userName?: string) => Promise<void>;
    changeTicketStatus: (ticketId: number, status: string, userName?: string) => Promise<void>;

    clearSelectedTicket: () => void;
};


export const TicketsContext = React.createContext<TicketsContextType>({
    tickets: [],
    getTickets: () => Promise.resolve(),
    getTicketById: () => Promise.resolve(),
    createTicket: () => Promise.resolve(),
    addTicketComment: () => Promise.resolve(),
    deleteTicket: () => Promise.resolve(),
    changeTicketStatus: () => Promise.resolve(),
    selectedTicket: null,
    loading: false,
    updateTicket: function (): Promise<void> {
        throw new Error("Function not implemented.");
    },
    clearSelectedTicket: function (): void {
        throw new Error("Function not implemented.");
    }
});