import { config } from "../../config"

function Contact(){
    const data = config.contact
    return (
        <div className="footerContact">
            <h4 className="fourthTitleFont">{data.city}-{data.country}</h4>
            <p className="textFont">{data.email}</p>
            <p className="textFont">{data.phone}</p>
        </div>
    )
}

export default Contact