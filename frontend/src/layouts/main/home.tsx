import ScrollView from "../../components/animations/scrollView"
import TargetContainer from "../../components/targets/TargetContainer"
import Presentation from "./presentation"


function Home() {
    return (
        <div className="home">
        <ScrollView>
            <Presentation></Presentation>
        </ScrollView>
        
        <ScrollView>
            <TargetContainer></TargetContainer>
        </ScrollView>
        </div>
    )
};

export default Home