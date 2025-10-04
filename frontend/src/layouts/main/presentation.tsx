import { config } from "../../config"
import Button from "../../components/inputs/button"
function Presentation() {
    return <div className="presentation">
        <div className="presentation-header">
            <h2 className="secondTitleFont">{config.presentationData.title}</h2>
            <p className="textFont">{config.presentationData.description}</p>
            <Button link={config.presentationData.link} text={config.presentationData.linkText} className="button buttonFont" />
        </div>
        <img src={config.presentationData.image} alt={config.presentationData.imageAlt} />
        {/* <img src="https://drive.google.com/thumbnail?id={Enter Your ID}&sz=w1000" alt=""/> */}

    </div>
}

export default Presentation