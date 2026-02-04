import { FaWhatsapp } from "react-icons/fa"


function Footer() {
    return <footer id="footer" className="flex flex-row+ items-center justify-center mt-24 gap-8 py-16 px-4 bg-primary bg-blue-900 text-white rounded-t-3xl">
        <a href="https://wa.me/59895964325" target="blank" className="flex flex-row items-center gap-2 text-2xl transform transition-transform bg-red-300 hover:bg-red-400 py-3 px-6 rounded-full"><FaWhatsapp /> Contactar a <span className="font-bold">soporte</span></a>
    </footer>
}

export default Footer