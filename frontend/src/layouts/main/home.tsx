import ScrollView from "../../components/animations/scrollView.js";
import TargetContainer from "../../components/targets/targetContainer.js";
import Presentation from "./presentation.jsx";

function Home() {
    return (
        <div className="home">
        <ScrollView>
            <Presentation></Presentation>
            <TargetContainer></TargetContainer>
        </ScrollView>
        </div>
    )
};

export default Home