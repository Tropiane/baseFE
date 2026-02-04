import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";
import { IoHome, IoTicket, IoAddCircle, IoLogIn } from "react-icons/io5";

const enlaces = [
  {
    id: 1,
    text: "Inicio",
    link: "/",
    icon: <IoHome />,
  },
  {
    id: 2,
    text: "Tickets",
    link: "/tickets-manager",
    icon: <IoTicket />,
  },
  {
    id: 3,
    text: "Crear ticket",
    link: "/create-ticket",
    icon: <IoAddCircle />,
  },
];

function NavBar({ isFooter }: { isFooter: boolean }) {
  const { user } = useContext(UserContext);

  /* FOOTER */
  if (isFooter) {
    return (
      <nav className="flex flex-col items-center gap-4 py-6 text-gray-400">
        {enlaces.map(e => (
          <NavLink
            key={e.id}
            to={e.link}
            className="hover:text-blue-500 transition"
          >
            {e.text}
          </NavLink>
        ))}
      </nav>
    );
  }

  /* SOLO ADMIN / LOGUEADO */
  if (!user) {
    return (
      <nav className="flex flex-col items-center gap-4 py-6 text-gray-400">
        <a href="/login" className=" text-2xl text-amber-50 hover:text-blue-500 transition">Iniciar sesion <IoLogIn /></a>
      </nav>
    );
  }

  return (
    <aside className="hidden md:flex flex-col w-20 bg-white border-r rounded-2xl border-gray-200 shadow-sm items-center py-6 gap-8">
      
      {enlaces.map(e => (
        <NavLink
          key={e.id}
          to={e.link}
          title={e.text}
          className={({ isActive }) =>
            `
            flex items-center justify-center w-12 h-12 rounded-xl
            text-2xl transition
            ${
              isActive
                ? "bg-blue-100 text-blue-600"
                : "text-gray-400 hover:text-blue-500 hover:bg-gray-100"
            }
            `
          }
        >
          {e.icon}
        </NavLink>
      ))}

    </aside>
  );
}

export default NavBar;
