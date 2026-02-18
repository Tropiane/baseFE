import { FilterTarget } from "../targets/FilterTarget";
import { TicketsManager } from "./TicketsFilterManager";

export const TicketsFilter = () => {
  const { overdueTickets, priorityAlta, priorityBaja, priorityMedia, statusEnCurso, statusFinalizado, statusPendiente, todayTickets } = TicketsManager();
  

  return (
    <section className="w-full flex justify-center">
      <div className="w-[90%] bg-white border border-gray-200 rounded-2xl shadow-sm px-4 py-3">

        {/* Título / ayuda */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">
            Filtrar tickets
          </span>
          <span className="text-xs text-gray-400">
            Selecciona un criterio para visualizar los casos
          </span>
        </div>

        {/* Filtros */}
        <div className="flex flex-row flex-wrap justify-between w-full">
        <FilterTarget name="Pendientes" quantity={statusPendiente.length} color="bg-blue-600" tickets={statusPendiente}/>
        <FilterTarget name="En curso" quantity={statusEnCurso.length} color="bg-blue-500" tickets={statusEnCurso}/>
        <FilterTarget name="Finalizados" quantity={statusFinalizado.length} color="bg-gray-500" tickets={statusFinalizado}/>
        <FilterTarget name="Hoy" quantity={todayTickets.length} color="bg-orange-600" tickets={todayTickets}/>
        <FilterTarget name="Atrasados" quantity={overdueTickets.length} color="bg-red-600" tickets={overdueTickets}/>
        <FilterTarget name="Alta" quantity={priorityAlta.length} color="bg-red-500" tickets={priorityAlta}/>
        <FilterTarget name="Media" quantity={priorityMedia.length} color="bg-yellow-500" tickets={priorityMedia}/>
        <FilterTarget name="Baja" quantity={priorityBaja.length} color="bg-green" tickets={priorityBaja}/>
        
        </div>
      </div>
    </section>
  );
};
