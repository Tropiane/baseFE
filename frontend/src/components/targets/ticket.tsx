interface formData{
    name: string,
    email: string,
    phone: string,
    description: string,
    status: string,
    notes: [string]
}
function Ticket({data, statusId}:{data:formData, statusId:string}) {
    return (
    <div className="ticketContainer" id={statusId}>
        <form action="route" method="patch">
            <p>{data.name}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
            <p>{data.description}</p>
            <p><span>{data.status}</span></p>
            <input type="" />
        </form>
    </div>
    )
}

export default Ticket