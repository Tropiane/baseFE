
interface Props {
    title: string;
    description: string;
    id: number;
    position?: string;
    price?: string;
    features?: string[];
}
function TargetPlan({title, description, id, features, price}: Props) {
    return (
        <div className="flex flex-col gap-4 my-4 p-4 text-left text-center md:text-left md:w-1/3 bg-white-200 border-blue-400 border border-t-6 rounded-2xl hover:shadow-2xl transition" id={`plan-target-${id}`}>
            <h3 className="thirdTitleFont text-center">{title}</h3>
            <p className="textFont">{description}</p>
            <h4 className="fourthTitleFont text-center">Características</h4>
                <ul>
                    {features?.map((feature) => <li className="text-left textFont border-b-2 border-gray-400 w-3/4">+{feature}</li>)}
                    <li className="spanFont text-center font-bold text-blue-500">Precio: $USD {price}</li>
                </ul>
        </div>
    )
}

export default TargetPlan