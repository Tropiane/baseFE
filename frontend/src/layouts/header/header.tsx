import NavBar from "./navBar.tsx";
import { config } from "../../config.ts"

function Header() {
    return <header>
        <NavBar isFooter={false}></NavBar>
        <div className="title">
            <img src="https://images.unsplash.com/vector-1755913148195-8c2a29b779b4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="headerPresentation">
            <h2 className="titleFont">{config.pagePresentation}</h2>
        </div>
    </header>
}

export default Header