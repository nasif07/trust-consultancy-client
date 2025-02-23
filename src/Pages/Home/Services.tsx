import img1 from "../../assets/vatIcon.svg";
import img2 from "../../assets/bagIcon.svg";
import img3 from "../../assets/paperIcon.svg";
import img4 from "../../assets/leafIcon.svg";
import img5 from "../../assets/rangeIcon.svg";
import img6 from "../../assets/refundIcon.svg";

const servicesData = [
  {
    title: "VAT & Tax Consulting",
    subtitle:
      "Expert guidance on VAT and tax compliance, filing, Documentation, and strategic planning.",
    image: img1,
  },
  {
    title: "Company Law Services",
    subtitle:
      "Legal support for company registration, regulatory compliance, and corporate governance.",
    image: img2,
  },
  {
    title: "Trade License Assistance",
    subtitle: "Seamless assistance in obtaining and renewing trade licenses.",
    image: img3,
  },
  {
    title: "Fire & Environmental Doc",
    subtitle:
      "Ensuring businesses meet fire safety and environmental compliance standards.",
    image: img4,
  },
  {
    title: "VAT & Tax Case Solutions",
    subtitle:
      "Expert representation and resolution of VAT and tax-related disputes.",
    image: img5,
  },
  {
    title: "Refund & Carry Forward",
    subtitle:
      "Efficient management of VAT refunds and tax credit carry forward processes.",
    image: img6,
  },
];

const Services = () => {
  return (
    <section className="bg-[#01321F]">
      <div className="max-w-[1300px] mx-auto py-32">
        <h2 className="text-white font-bold text-5xl text-center pb-2.5">
          <span className="text-[#E7B51E]">Services</span> we can help you with
        </h2>
        <p className="text-white text-center text-xl font-light leading-6 max-w-[500px] mx-auto">
          We offer a comprehensive range of services to support your business
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-24">
          {servicesData.map((item, index) => (
            <div key={index} className="border-2 border-[#03472D] rounded-2xl p-12">
              <div className="flex justify-center py-12">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#E7B51E] pb-4">
                  {item.title}
                </h2>
                <p className="text-white text-base">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
