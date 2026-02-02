export interface Ticket {
  formId: number;

  name: string;
  email: string;
  phone: string;
  description: string;

  sendAt: number;
  closedAt?: number | null;
  updatedAt?: number;

  status: "Pendiente" | "En Curso" | "Finalizado";
  priority: "Baja" | "Media" | "Alta";

  assignedTo?: string;
  comments?: string[];
}

export interface TicketFilters {
  status?: "Pendiente" | "En Curso" | "Finalizado";
  priority?: "Alta" | "Media" | "Baja";

  onlyToday?: boolean;
  onlyOverdue?: boolean;
}
