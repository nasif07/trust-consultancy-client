import img1 from "../../assets/vatIcon.svg";
import img2 from "../../assets/bagIcon.svg";
import img3 from "../../assets/paperIcon.svg";
import img4 from "../../assets/leafIcon.svg";
import img5 from "../../assets/rangeIcon.svg";
import img6 from "../../assets/refundIcon.svg";
import { motion } from "framer-motion";

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
    <section className="bg-[#01321F] px-3">
      <div className="max-w-[1300px] mx-auto py-10 md:py-20 lg:py-32">
        {/* Heading Animation (Faster) */}
        <motion.h2
          className="text-white font-bold text-4xl lg:text-5xl text-center pb-2.5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}>
          <span className="text-[#E7B51E]">Services</span> we can help you with
        </motion.h2>

        {/* Subtitle Animation (Faster) */}
        <motion.p
          className="text-white text-center text-xl font-light leading-6 max-w-[500px] mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          We offer a comprehensive range of services to support your business
        </motion.p>

        {/* Services Grid - Faster Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 md:pt-20 lg:pt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }, // Faster stagger delay
            },
          }}>
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              className="border-2 border-[#03472D] rounded-2xl p-6 md:p-12"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }} // Faster
              whileHover={{ scale: 1.05 }} // Subtle hover effect
            >
              {/* Image Animation (Faster) */}
              <motion.div
                className="flex justify-center py-12"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.05 }} // Faster transition
              >
                <img src={item.image} alt={item.title} />
              </motion.div>

              {/* Title and Text Animation (Faster) */}
              <motion.div
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }} // Text appears quickly
              >
                <h2 className="text-2xl font-semibold text-[#E7B51E] pb-4">
                  {item.title}
                </h2>
                <p className="text-white text-base">{item.subtitle}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
