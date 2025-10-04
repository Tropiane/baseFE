
interface Props {
    title: string;
    description: string;
    id: number;
    position?: string;
    targetClass: string;
    price?: string;
    features?: string[];
}
function TargetPlan({title, description, id, position, targetClass, features, price}: Props) {
    return (
        <div className={`${targetClass} target-${position}`} id={`plan-target-${id}`}>
            <h3 className="thirdTitleFont">{title}</h3>
            <p className="textFont">{description}</p>
            <h4 className="thirdTitleFont">Características</h4>
                <ul>
                    {features?.map((feature) => <li className="listFont">+{feature}</li>)}
                    <li className="spanFont">Precio: $USD {price}</li>
                </ul>
        </div>
    )
}

export default TargetPlan