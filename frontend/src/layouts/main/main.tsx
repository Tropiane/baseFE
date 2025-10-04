import { Route, Routes } from "react-router-dom";
import Home from "./home";
import AboutUs from "../../components/pages/aboutUs";
import { TicketsManager } from "../../components/pages/TicketsManager";
import { Login } from "../../components/pages/Login";
function Main() {

    return (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quien-soy" element={<AboutUs />} />
            <Route path="/tickets-manager" element={<TicketsManager/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </main>
    )
}

export default Main