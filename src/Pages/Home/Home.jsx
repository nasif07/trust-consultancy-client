import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Faq from "../../Components/Faq";
import Missions from "./Missions";
import Reviews from "./Reviews";
import Services from "./Services";

const Home = () => {
  const faqData = [
    {
      title: "1. How can Trust Consultancy help with VAT and tax compliance?",
      description:
        "We assist businesses in tax planning, filing, dispute resolution, and compliance with Bangladesh’s tax regulations to ensure smooth operations and avoid penalties",
    },
    {
      title: "2. How do I get started with Trust Consultancy?",
      description:
        "You can contact us via phone, email, or visit our office. Our team will assess your needs and provide tailored solutions.",
    },
    {
      title: "3. Is an initial consultation available?",
      description:
        "Yes, we offer an initial consultation to understand your requirements and provide guidance on how we can assist your business.",
    },
  ];
  return (
    <div className="font-inter">
      <Banner></Banner>
      <Services></Services>
      <Missions></Missions>
      <ChooseUs></ChooseUs>
      <Reviews></Reviews>
      <Faq faqData={faqData}></Faq>
    </div>
  );
};

export default Home;
