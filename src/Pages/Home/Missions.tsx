import img1 from "../../assets/missionIcon.svg";
import img2 from "../../assets/visionIcon.svg";

const missionsData = [
  {
    title: "Our Mission",
    subtitle:
      "At Trust Consultancy, our mission is to provide businesses with expert financial and compliance solutions that ensure regulatory adherence while fostering sustainable growth. ",
    image: img1,
  },
  {
    title: "Our Vision",
    subtitle:
      "Our vision is to be the leading consultancy firm in Bangladesh, recognized for excellence in VAT, tax, and business compliance solutions.",
    image: img2,
  },
  
];

const Missions = () => {
  return (
    <section className="max-w-[1300px] mx-auto py-10 lg:py-32 px-3">
      <div className="">

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {missionsData.map((item, index) => (
            <div key={index} className="bg-[#EDE2C1] rounded-3xl p-4 md:p-8 max-w-[500px]">
              <div className="flex justify-center py-5">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-[#2A2A2A] pb-4">
                  {item.title}
                </h2>
                <p className="text-black text-base">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;
