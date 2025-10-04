import Contact from "./contact.tsx"
import SocialMedia from "./socialMedia.tsx"

import { config } from "../../config.ts"
import Form from "./form.tsx"

function Footer() {
    return <footer id="footer">
        <SocialMedia data={config.socialMedia}></SocialMedia>
        <Contact></Contact>
        <Form></Form>
    </footer>
}

export default Footer