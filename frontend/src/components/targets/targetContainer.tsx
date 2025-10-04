import Target from "./target";

import { config } from "../../config";
import TargetCarousel from "../targets/targetCarousel";

const TargetContainer = () => {
  return (
    <section className="targetContainer" id="planes">
      <h2 className="secondTitleFont">Nuestros Planes</h2>
        <TargetCarousel>
        {config.planData.map((plan) => (
            <Target targetClass="targetInCarousel" isPlan={true} {...plan} key={plan.id}/>
        ))}
        </TargetCarousel>
    </section>
  );
};

export default TargetContainer;
