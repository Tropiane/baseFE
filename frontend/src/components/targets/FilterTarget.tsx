import React, { useState } from "react";
import type { Ticket } from "../tickets/TicketInterfaces";

export const FilterTarget = (filter: {name: string, quantity: number, color?: string, tickets: Ticket[]})=>{
    const [activeFilter, setActiveFilter] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
        setActiveFilter(!activeFilter);
        console.log(filter.tickets);
        
    }

    if(activeFilter === true){
        return(
            <div className={`flex flex-col justify-between items-center ${filter.color ? filter.color : 'bg-white'} rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer`}>
                <p className="text-sm font-medium cursor-pointer" onClick={handleClick}>{filter.name}</p>
                {filter.tickets.map((ticket: Ticket, index: number)=>{
                    return(
                        <div key={index}>
                            <p>{ticket.name}</p>
                            <p>{ticket.phone}</p>
                            <p>{ticket.email}</p>
                            <p>{ticket.description}</p>
                            <p>{ticket.status}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    return(
        <div className={`flex justify-between items-center ${filter.color ? filter.color : 'bg-white'} rounded-2xl shadow-sm border border-gray-200 p-5 cursor-pointer`} onClick={handleClick}>
            <p className="text-sm font-medium">{filter.name}</p>
            <p className="text-sm font-medium p-2 bg-amber-100 rounded-full">{filter.quantity}</p>
        </div>
    )
}