import { NavLink } from "react-router-dom";
function LinkTarget({link, text}: {link: string, text: string}) {
    return <NavLink to={link} className="link fontNav">{text}</NavLink>
}

export default LinkTarget