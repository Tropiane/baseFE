import { config } from "../../config"
import Button from "../../components/inputs/button"
function Presentation() {
    return <div className="presentation">
            <h2 className="secondTitleFont">{config.presentationData.title}</h2>
            <p className="textFont">{config.presentationData.description}</p>
            <Button link={config.presentationData.link} text={config.presentationData.linkText} className="button buttonFont" />
        

    </div>
}

export default Presentation