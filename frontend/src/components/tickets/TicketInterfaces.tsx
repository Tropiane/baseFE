export interface Ticket {
  formId: number;
  name: string;
  email: string;
  phone: string;
  description: string;

  sendAt: number;
  closedAt?: number | null;

  status: "Pendiente" | "En Curso" | "Finalizado";
  priority: "Baja" | "Media" | "Alta";

  assignedTo?: string;
  comments?: string[];
}
