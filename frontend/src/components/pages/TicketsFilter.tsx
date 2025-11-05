import  { useEffect, useState } from "react"
import type { Ticket } from "./TicketsManager";
import { TicketTarget } from "../targets/TicketTarget";
export const FilterTickets = (data: Ticket[] )=>{
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [filterData, setFilterData] = useState<Ticket[]>([])

    const handleFilter = async (filter: string)=>{
        
        setFilterData(tickets.filter(f => f.status === filter))
    }

    useEffect(() => {
        setTickets(data);
    }, [data]);
    
    return(
        <>
        <h1 className="thirdTitleFont" style={{ textAlign: "center" }}>
            Gestion de tickets
        </h1>
         <div className="ticketsFilter">
        <h2 className="fourthTitleFont">Filtrar</h2>
            <button className="filterButton" onClick={() => handleFilter("Pendiente")}>Pendientes</button>
            <button className="filterButton" onClick={() => handleFilter("En Curso")}>En Curso</button>
            <button className="filterButton" onClick={() => handleFilter("Finalizado")}>Finalizados</button>
        </div>

        <div className="ticketsContainer">
            {filterData.map((ticket: Ticket, index) => (
                <TicketTarget key={index} {...ticket} />
            ))}
        </div>
        </>
    )
}