import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Faq from "./Faq";
import Missions from "./Missions";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Missions></Missions>
            <ChooseUs></ChooseUs>
            <Faq></Faq>
        </div>
    );
};

export default Home;