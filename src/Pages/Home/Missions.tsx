import img1 from "../../assets/missionIcon.svg";
import img2 from "../../assets/visionIcon.svg";
import { motion } from "framer-motion";
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
      <div>
        {/* Faster Staggered Animation */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }, // Faster stagger delay
            },
          }}>
          {missionsData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#EDE2C1] rounded-3xl p-4 md:p-8 max-w-[500px]"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }} // Faster and staggered
              whileHover={{ scale: 1.05 }} // Subtle hover effect
            >
              {/* Image Animation (Faster) */}
              <motion.div
                className="flex justify-center py-5"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }} // Faster transition
              >
                <img src={item.image} alt={item.title} />
              </motion.div>

              {/* Title and Text Animation (Faster) */}
              <motion.div
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }} // Text appears last for a smooth effect
              >
                <h2 className="text-3xl font-semibold text-[#2A2A2A] pb-4">
                  {item.title}
                </h2>
                <p className="text-black text-base">{item.subtitle}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Missions;
