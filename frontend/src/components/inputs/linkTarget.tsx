import { NavLink } from "react-router-dom";
function LinkTarget({link, text}: {link: string, text: string}) {
    return <NavLink to={link} className="text-lg hover:text-blue-400 transition">{text}</NavLink>
}

export default LinkTarget