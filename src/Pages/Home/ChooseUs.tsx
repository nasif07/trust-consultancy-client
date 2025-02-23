import banner from "../../assets/chooseUsBanner.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const missionsData = [
  {
    title: "Expertise & Experience",
    subtitle:
      "A team of seasoned professionals with in-depth knowledge of Bangladesh’s tax laws.",
  },
  {
    title: "Client-Centric Approach",
    subtitle: " Personalized solutions tailored to your business needs.",
  },
  {
    title: "Compliance & Accuracy ",
    subtitle:
      "Strict adherence to regulations to minimize risks and optimize benefits.",
  },
  {
    title: "Timely & Reliable Service",
    subtitle:
      " Prompt handling of tax and compliance matters to ensure business continuity.",
  },
];

const ChooseUs = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-10 lg:py-32 px-3 font-inter">
      <div className="">
        <h2 className="text-[#2A2A2A] font-bold text-4xl lg:text-5xl pb-5">
          Why Choose
          <span className="text-[#E7B51E]"> Us</span>?
        </h2>
        <p className="text-[#2A2A2A] text-xl font-light leading-6 max-w-[650px]">
          At Trust Consultancy, we are dedicated to providing reliable,
          transparent, and result-oriented financial solutions tailored to meet
          your unique needs.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12 pt-12">
          <img src={banner} alt="" />
          <div className="flex flex-col gap-5">
            {missionsData.map((item, index) => (
              <div className="flex gap-2 md:gap-4" key={index}>
                <div className="pt-2">
                  <IoIosArrowDroprightCircle />
                </div>
                <div>
                  <h2 className="text-[#2A2A2A] text-xl">
                    <span className="font-bold">{item.title} - </span>
                    {item.subtitle}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="md:flex justify-center gap-8">
          {missionsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#EDE2C1] rounded-3xl p-8 max-w-[500px]">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-[#2A2A2A] pb-4">
                  {item.title}
                </h2>
                <p className="text-black text-base">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ChooseUs;
