import NavBar from "./navBar.tsx";
import { config } from "../../config.ts"

function Header() {
    return <header>
        <div className="headerPresentation">
        <NavBar isFooter={false}></NavBar>
        <img src="https://images.unsplash.com/vector-1759619006680-a0b80943b127?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
            <h2 className="titleFont">{config.pagePresentation}</h2>
    </header>
}

export default Header