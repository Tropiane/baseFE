import { config } from "../../config.ts";
import Form from "./Form.tsx";
import SocialMedia from "./SocialMedia.tsx";

function Footer() {
    return <footer id="footer">
        <h4 className="thirdTitleFont">¿Tenes dudas? <span>Contactanos</span></h4>
        <SocialMedia data={config.socialMedia}></SocialMedia>
        <Form></Form>
    </footer>
}

export default Footer