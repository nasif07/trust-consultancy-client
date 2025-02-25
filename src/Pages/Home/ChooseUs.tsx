import banner from "../../assets/chooseUsBanner.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { motion } from "framer-motion";
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
      <div>
        {/* Title Animation (Faster) */}
        <motion.h2
          className="text-[#2A2A2A] font-bold text-4xl lg:text-5xl pb-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}>
          Why Choose <span className="text-[#E7B51E]"> Us</span>?
        </motion.h2>

        {/* Description Animation (Faster) */}
        <motion.p
          className="text-[#2A2A2A] text-xl font-light leading-6 max-w-[650px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          At Trust Consultancy, we are dedicated to providing reliable,
          transparent, and result-oriented financial solutions tailored to meet
          your unique needs.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-12 pt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }, // Faster stagger effect
            },
          }}>
          {/* Banner Image Animation (Faster) */}
          <motion.img
            src={banner}
            alt="Trust Consultancy"
            className="max-w-full md:max-w-[500px]"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Mission Points Animation (Faster Staggered) */}
          <motion.div className="flex flex-col gap-5">
            {missionsData.map((item, index) => (
              <motion.div
                className="flex gap-2 md:gap-4"
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }} // Faster stagger
              >
                {/* Icon Animation (Faster Rotation) */}
                <motion.div
                  className="pt-2 text-[#E7B51E]"
                  initial={{ rotate: -90, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}>
                  <IoIosArrowDroprightCircle size={24} />
                </motion.div>

                {/* Text Animation (Faster) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}>
                  <h2 className="text-[#2A2A2A] text-xl">
                    <span className="font-bold">{item.title} - </span>
                    {item.subtitle}
                  </h2>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;
