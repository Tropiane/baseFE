import Button from "../inputs/button";
import TargetPlan from "./targetPlan";

interface Props {
    title: string;
    description: string;
    id: number;
    position?: string;
    targetClass: string;
    price?: string;
    features?: string[];
    isPlan?: boolean;
    isProduct?: boolean;
}

function Target({title, description, id, position, targetClass, price, isPlan, isProduct, features}: Props) {
    if(isPlan){
        return (
        <TargetPlan title={title} description={description} id={id} position={position} targetClass={targetClass} price={price} features={features}></TargetPlan>
    );
    } else if(isProduct){
        return (
        <div className={`${targetClass} target-${position}`} id={`product-target-${id}`}>
            <img src="/src/assets/images/planImage.png" alt="" />
            <h3 className="thirdTitleFont">{title}</h3>
            <p className="textFont">{description}</p>
            <p>Precio: <span>${price}</span></p>
            <Button text="Ver más" link="" className="button buttonFont" />
        </div>
    );
    } else {
        return (
        <div className={`${targetClass} target-${position}`} id={`target-${id}`}>
            <img src="/src/assets/images/planImage.png" alt="" />
            <h3 className="thirdTitleFont">{title}</h3>
            <p className="textFont">{description}</p>
            <TargetPlan title={title} description={description} id={id} position={position} targetClass={targetClass}></TargetPlan>
        </div>
    );
    }
}

export default Target;