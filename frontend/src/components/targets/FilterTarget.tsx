import React, { useState } from "react";
import type { Ticket } from "../tickets/TicketInterfaces";

interface FilterTargetProps {
  name: string;
  quantity: number;
  color?: string;
  tickets: Ticket[];
}

export const FilterTarget: React.FC<FilterTargetProps> = ({
  name,
  quantity,
  color = "bg-white",
  tickets,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      className={`
        transition-all duration-300 cursor-pointer
        ${color}
        ${isActive ? "w-full" : "w-full md:w-[30%]"}
        rounded-2xl shadow-sm border border-gray-200 p-5
        flex flex-col gap-4
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">{name}</p>
        {!isActive && (
          <span className="text-sm font-medium px-3 py-1 bg-amber-100 rounded-full">
            {quantity}
          </span>
        )}
      </div>

      {/* Tickets */}
      {isActive && (
        <div className="flex flex-col gap-3">
          {tickets.length === 0 && (
            <p className="text-sm text-gray-500">
              No hay tickets en este estado
            </p>
          )}

          {tickets.map((ticket) => (
            <div
              key={ticket.formId}
              className="flex flex-col gap-1 p-3 bg-white rounded-xl border border-gray-100 shadow-sm"
              onClick={() => window.location.href = `/view-ticket/${ticket.formId}`}
            >
              <p className="text-sm font-semibold">{ticket.name}</p>
              <p className="text-xs text-gray-600 line-clamp-2">
                {ticket.description}
              </p>
              <span className="text-xs font-medium text-gray-500">
                Estado: {ticket.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
