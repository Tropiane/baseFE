import { config } from "../../config";
import TargetPlan from "./targetPlan";

const TargetContainer = () => {
  const planData= config.planData;
  return (
    <section className="targetContainer mt-[20vh]" id="planes">
      <h2 className="secondTitleFont text-center border-b-4 border-blue-500">Nuestros Planes</h2>
      <div className="flex flex-col justify-center items-center gap-8 mt-6">

        {planData.map((plan) => (
          <TargetPlan key={plan.id} title={plan.title} description={plan.description} id={plan.id} position={plan.position} price={plan.price} features={plan.features}/>
        ))}
      </div>
    </section>
  );
};

export default TargetContainer;
