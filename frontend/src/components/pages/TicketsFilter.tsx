export const TicketsFilter = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-6xl bg-white border border-gray-200 rounded-2xl shadow-sm px-4 py-3">

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
        <ul className="flex flex-wrap gap-2">

          {/* Activo (ejemplo) */}
          <li className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-600 text-white shadow-sm">
            Todos <span className="ml-1 text-xs opacity-80">(124)</span>
          </li>

          <li className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Prioridad alta <span className="ml-1 text-xs text-gray-500">(12)</span>
          </li>

          <li className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Prioridad media <span className="ml-1 text-xs text-gray-500">(47)</span>
          </li>

          <li className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Prioridad baja <span className="ml-1 text-xs text-gray-500">(65)</span>
          </li>

          <li className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Creados hoy <span className="ml-1 text-xs text-gray-500">(8)</span>
          </li>

          <li className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
            Vencidos <span className="ml-1 text-xs text-gray-500">(3)</span>
          </li>

        </ul>
      </div>
    </section>
  );
};
