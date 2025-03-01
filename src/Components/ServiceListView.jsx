import { motion } from "framer-motion";

const ServiceListView = ({ itemData, title }) => {
  return (
    <div className="max-w-[1300px] mx-auto pt-4 pb-10 lg:py-28 px-3 md:px-10 font-inter lg:px-0">
      <h2 className="text-[#E7B51E] text-2xl font-semibold pb-10">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {itemData.map((list, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2 * index,
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
            viewport={{ once: true }} // Animates once when entering the viewport
            className="mb-8"
          >
            <h3 className="font-bold text-black mb-4 text-lg sm:text-xl md:text-2xl">
              {index + 1}. {list.title}
            </h3>
            <ul className="list-disc pl-10 space-y-3 text-sm sm:text-base text-gray-700">
              {list.items.map((item, idx) => (
                <li key={idx} className="text-black">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceListView;
