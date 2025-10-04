import Button from "../../components/inputs/button";
import { config } from "../../config";
function InfoButton(){
    const data = config.links;
    return (
        <div className="infoButton">
            {data.map((service, index) => (
                <Button 
                    key={index} 
                    text={service.text} 
                    link={service.url} 
                    className={`${service.className} buttonFont`}
                />
            ))}
        </div>
    )
}

export default InfoButton;