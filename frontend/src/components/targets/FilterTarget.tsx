import React, { useState } from "react";
import type { Ticket } from "../tickets/TicketInterfaces";
import { Link } from "react-router-dom";

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
        transition-all duration-600 cursor-pointer
        ${color}
        ${isActive ? "w-full" : "w-full md:w-[30%]"}
        rounded-2xl shadow-sm border border-gray-200 p-5
        flex flex-col gap-4
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold tracking-wide">{name}</p>

        {!isActive && (
          <span className="text-sm font-medium px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
            {quantity}
          </span>
        )}
      </div>

      {/* Tickets */}
      {isActive && (
        <div className="flex flex-col gap-4">
          {tickets.length === 0 && (
            <p className="text-lg text-gray-500">
              No hay tickets en este estado
            </p>
          )}

          {tickets.map(ticket => (
            <div
              key={ticket.formId}
              className="
                bg-white rounded-xl border border-gray-200 shadow-sm
                p-4 flex flex-col gap-3
                hover:shadow-md transition
              "
            >
              {/* Top */}
              <div className="flex justify-between items-start gap-2">
                <p className="text-xl font-semibold text-gray-800 bg-gray-200 px-2 py-0.5 rounded-full">
                  {ticket.name}
                </p>

                <div className="flex gap-2">
                  <span className="text-sm px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    {ticket.status}
                  </span>
                  <span className="text-sm px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                    {ticket.priority}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed line-clamp-2 bg-gray-300 px-2 py-0.5 rounded-full">
                {ticket.description}
              </p>

              {/* Date */}
              <p className="text-sm text-gray-400">
                Creado el: <span className="font-medium border border-gray-200 bg-amber-200 px-2 py-0.5 rounded-full">{new Date(ticket.sendAt).toLocaleDateString()}</span>
              </p>

              {/* Footer */}
              <div className="flex justify-end">
                <Link
                  to={`/view-ticket/${ticket.formId}`}
                  className="text-blue-600 text-2xl font-bold text-center border border-gray-300 p-2 rounded-full hover:bg-gray-100"
                >
                  ver
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
