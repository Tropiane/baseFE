import ScrollView from "../../components/animations/scrollView"
import { TicketsFilter } from "../../components/tickets/TicketsFilter"
import { TicketsManager } from "../../components/pages/TicketsManager"
import { TicketQuantity } from "../../components/targets/TicketQuantity"
import { useContext } from "react"
import { UserContext } from "../../hooks/UserContext"


function Home() {
    const {user} = useContext(UserContext);

    if(!user) return(
        <div className="flex flex-col gap-10 my-10 h-[63vh]">

        <ScrollView>
            <h1 className="text-4xl text-center font-semibold text-gray-800">No estas logueado</h1>
        </ScrollView>
        <ScrollView>
            <h2 className="text-2xl text-center font-semibold text-gray-800 border-b border-gray-400 pb-2">Inicia sesion para ver tus tickets</h2>
        </ScrollView>
        </div>
    );
    return (
        <div className="flex flex-col gap-10 my-10">
        <ScrollView>
            <TicketQuantity></TicketQuantity>
        </ScrollView>
        
        <ScrollView>
            <TicketsManager></TicketsManager>
        </ScrollView>

        <ScrollView>
            <TicketsFilter></TicketsFilter>
        </ScrollView>
        </div>
    )
};

export default Home