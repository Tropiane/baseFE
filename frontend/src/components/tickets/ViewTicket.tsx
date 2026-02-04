import { useParams } from "react-router-dom"


export const ViewTicket = () => {
    
    const {id} = useParams();

    return (
        <div>
            <h1>View Ticket {id}</h1>
        </div>
    )
}