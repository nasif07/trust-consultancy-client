import Footer from "../../Shared/Footer";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Faq from "./Faq";
import Missions from "./Missions";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  return (
    <div className="font-inter">
      <Banner></Banner>
      <Services></Services>
      <Missions></Missions>
      <ChooseUs></ChooseUs>
      <Reviews></Reviews>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Home;