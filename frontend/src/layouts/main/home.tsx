import ScrollView from "../../components/animations/scrollView"
import { TicketsFilter } from "../../components/tickets/TicketsFilter"
import { TicketsManager } from "../../components/pages/TicketsManager"
import { TicketQuantity } from "../../components/targets/TicketQuantity"


function Home() {
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