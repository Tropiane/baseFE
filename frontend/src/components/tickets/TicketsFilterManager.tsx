import { useMemo } from "react";
import { useTickets } from "../../hooks/useTickets";

const getTodayRange = ()=>{
    const start = new Date();
    start.setHours(0,0,0,0);

    const end = new Date();
    end.setHours(23,59,59,999);

    return {
        start: start.getTime(),
        end: end.getTime()
    }
}

export const TicketsManager = ()=>{
    const {data} = useTickets();

    const priorityAlta = useMemo(()=> data.filter(ticket => ticket.priority === "Alta" ), [data]);
    const priorityMedia = useMemo(()=> data.filter( ticket => ticket.priority === "Media"), [data]);
    const priorityBaja = useMemo(()=> data.filter( ticket => ticket.priority === "Baja"), [data]);
    const statusPendiente = useMemo(()=> data.filter(ticket => ticket.status === "Pendiente"), [data]);
    const statusEnCurso = useMemo(()=> data.filter(ticket => ticket.status === "En Curso"), [data]);
    const statusFinalizado = useMemo(()=> data.filter(ticket => ticket.status === "Finalizado"), [data]);
    const todayTickets = useMemo(()=> data.filter(ticket => new Date(ticket.sendAt).getTime() >= getTodayRange().start && new Date(ticket.sendAt).getTime() <= getTodayRange().end), [data]);
    const overdueTickets = useMemo(() => 
        data.filter(ticket => {
            const dateValue = ticket.limitDate !== undefined ? ticket.limitDate : ticket.sendAt;

            if(ticket.status !== "Finalizado"){

                return new Date(dateValue).getTime() < getTodayRange().start;
            }
        }), 
    [data]);
    const allTickets = { priorityAlta, priorityBaja, priorityMedia, statusPendiente, statusEnCurso, statusFinalizado, todayTickets, overdueTickets};
    return allTickets
}