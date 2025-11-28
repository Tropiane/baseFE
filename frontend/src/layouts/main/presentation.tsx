import { config } from "../../config"
function Presentation() {
    return <div className="flex flex-col gap-6 items-left text-left px-4 md:px-20 lg:px-40">
            <h2 className="secondTitleFont">{config.presentationData.title}</h2>
            <p className="w-1/2 textFont">{config.presentationData.description}</p>
            <a href="#planes" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-1/4 text-xl">Ver planes</a>
    </div>
}

export default Presentation