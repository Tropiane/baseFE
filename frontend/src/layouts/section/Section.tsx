import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";

export const Section = () => {
  const {user, setLogout} = useContext(UserContext);

  if (!user) {
    return (
    <section className="w-full h-16 bg-white border-b border-gray-200 shadow-sm px-6 flex items-center justify-center">
      
      {/* Saludo */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          Panel de administración
        </span>
        <h1 className="text-lg font-semibold text-gray-800">
          Hola, <span className="text-blue-600">No estas logueado</span>
        </h1>
      </div>

    </section>
  );
  }
  return (
    <section className="w-full h-16 bg-white border-b border-gray-200 shadow-sm px-6 flex items-center justify-between">
      
      {/* Saludo */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          Panel de administración
        </span>
        <h1 className="text-lg font-semibold text-gray-800">
          Hola, <span className="text-nexo-deep">{user?.name || "No logueado"}</span>
        </h1>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-4">
        
        {/* Avatar (placeholder) */}
        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-nexo-accent font-semibold">
          {user?.name?.charAt(0)}
        </div>

        {/* Logout */}
        <button
          className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors cursor-pointer"
          onClick={setLogout}
        >
          Cerrar sesión
        </button>
      </div>

    </section>
  );
};
