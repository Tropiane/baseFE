import { config } from "../../config"
function Presentation() {
    return <div className="presentation">
            <h2 className="secondTitleFont">{config.presentationData.title}</h2>
            <p className="textFont">{config.presentationData.description}</p>
            <a href="#planes" className="button buttonFont">Ver planes</a>
        

    </div>
}

export default Presentation