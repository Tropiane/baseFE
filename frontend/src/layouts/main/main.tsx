import { Route, Routes } from "react-router-dom";
import Home from "./home";
import { TicketsManager } from "../../components/pages/TicketsManager";
import { Login } from "../../components/pages/Login";
import { CreateTicket } from "../../components/pages/CreateTicket";
import { ViewTicket } from "../../components/tickets/ViewTicket";
function Main() {

    return (
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/tickets-manager" element={<TicketsManager/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create-ticket" element={<CreateTicket/>}/>
            <Route path="/view-ticket/:id" element={<ViewTicket/>}/>
        </Routes>
    </main>
    )
}

export default Main