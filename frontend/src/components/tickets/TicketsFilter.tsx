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
        <FilterTarget name="Pendientes" quantity={statusPendiente.length} color="bg-nexo-primary" tickets={statusPendiente}/>
        <FilterTarget name="En curso" quantity={statusEnCurso.length} color="bg-nexo-accent" tickets={statusEnCurso}/>
        <FilterTarget name="Finalizados" quantity={statusFinalizado.length} color="bg-gray-500" tickets={statusFinalizado}/>
        <FilterTarget name="Hoy" quantity={todayTickets.length} color="bg-nexo-deep" tickets={todayTickets}/>
        <FilterTarget name="Atrasados" quantity={overdueTickets.length} color="bg-red-400" tickets={overdueTickets}/>
        <FilterTarget name="Alta" quantity={priorityAlta.length} color="bg-nexo-accent" tickets={priorityAlta}/>
        <FilterTarget name="Media" quantity={priorityMedia.length} color="bg-nexo-primary" tickets={priorityMedia}/>
        <FilterTarget name="Baja" quantity={priorityBaja.length} color="bg-nexo-deep" tickets={priorityBaja}/>
        
        </div>
      </div>
    </section>
  );
};
