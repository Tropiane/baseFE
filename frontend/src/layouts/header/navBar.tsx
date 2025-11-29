import LinkTarget from "../../components/inputs/linkTarget.tsx";
import { IoMenuSharp } from "react-icons/io5";
import { config } from "../../config.ts";

const enlaces = config.navBarLinks;

function NavBar({ isFooter }: { isFooter: boolean }) {
  const phoneWidth = window.matchMedia("(max-width: 480px)").matches;
  const tabletWidth = window.matchMedia("(max-width: 768px)").matches;

  // Footer version
  if (isFooter === true) {
    return (
      <div className="flex flex-col items-center gap-4 py-6 text-white">
        {enlaces.map((enlace) => (
          <LinkTarget key={enlace.id} link={enlace.link} text={enlace.text} />
        ))}
      </div>
    );
  }

  // Mobile / Tablet version
  if (phoneWidth === true || tabletWidth === true) {
    return (
      <nav className="w-full text-black p-4">
        <details className="w-full">
          <summary className="flex items-center cursor-pointer select-none text-xl">
            <IoMenuSharp className="text-2xl" />
          </summary>

          <div className="mt-4 flex flex-col gap-3 pl-2 border-l border-gray-700">
            <a href="#footer" className="text-lg hover:text-blue-400 transition">Contacto</a>
            <a href="#planes" className="text-lg hover:text-blue-400 transition">Planes</a>
            {enlaces.map((enlace) => (
              <LinkTarget key={enlace.id} link={enlace.link} text={enlace.text} />
            ))}
          </div>
        </details>
      </nav>
    );
  }

  // Desktop version
  return (
    <nav className="flex flex-row gap-8 items-center text-black py-4 px-6 shadow-md">
      <a href="#footer" className="text-lg hover:text-blue-400 transition">Contacto</a>
      <a href="#planes" className="text-lg hover:text-blue-400 transition">Planes</a>
      {enlaces.map((enlace) => (
        <LinkTarget key={enlace.id} link={enlace.link} text={enlace.text} />
      ))}
    </nav>
  );
}

export default NavBar;
