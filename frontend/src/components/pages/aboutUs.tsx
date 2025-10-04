import { config } from "../../config"
function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="aboutUsContent">
                <h3 className="thirdTitleFont">{config.aboutMeData.title}</h3>
                <p className="textFont">{config.aboutMeData.description}</p>

                <p className="textFont">{config.aboutMeData.description2}</p>
            </div>
            <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    )
}

export default AboutUs