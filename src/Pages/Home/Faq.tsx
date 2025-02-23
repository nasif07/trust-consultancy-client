import { useState } from "react";

const data = [
  {
    title: "1. Who can benefit from your services?",
    description:
      "Our services are designed for businesses of all sizes, including startups, SMEs, and large corporations seeking expert financial and compliance solutions in Bangladesh.",
  },
  {
    title: "2. How can Trust Consultancy help with VAT and tax compliance?",
    description:
      "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
  },
  {
    title: "3. How do I get started with Trust Consultancy?",
    description:
      "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
  },
  {
    title: "4. Is an initial consultation available?",
    description:
      "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
  },
];

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  return (
    <>
      <section className="max-w-[1300px] mx-auto py-10 lg:py-32 font-inter">
        <div className="">
          <h2 className="text-[#2A2A2A] font-bold text-[33px] md:text-5xl pb-5 max-w-[628px] mx-auto text-center px-3">
            Some
            <span className="text-[#E7B51E]"> answers </span>to our customers
            queries.
          </h2>
        </div>

        <div className="space-y-4 p-2 md:p-6">
          {data?.map((data, idx) => (
            <div className="bg-[#F4F4F4] rounded-3xl" key={idx}>
              {/* header / Title */}
              <div
                onClick={() => handleToggle(idx)}
                className={`px-4 md:px-8 py-6 cursor-pointer`}>
                <div className="flex items-center justify-between">
                  <h4 className={`text-[#2A2A2A] text-xl font-semibold`}>
                    {data.title}
                  </h4>
                  <span>
                    <svg
                      className={`mr-4 shrink-0`}
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                    </svg>
                  </span>
                </div>
              </div>
              {/* body / content  */}
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
                  isOpen === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <div className="overflow-hidden">
                  <div
                    className={`pb-6 pr-4 pl-14 md:pl-16 text-base text-[#64687B] max-w-[700px]`}>
                    {data?.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#01321F] flex justify-between py-10 md:py-16 px-3 font-inter">
        <div className="max-w-[1300px] mx-auto md:flex w-full justify-between">
          <div>
            <h2 className="text-white font-bold text-4xl md:text-5xl pb-5">
              Still have any
              <span className="text-[#E7B51E]"> questions</span>?
            </h2>
            <p className="text-white text-2xl font-light leading-6 max-w-[650px] pb-6 md:pb-0">
              Contact our customer support team now.
            </p>
          </div>
          <div className="flex justify-between md:justify-center items-center gap-5">
            <button className="py-2 md:py-4 px-4 md:px-8 bg-[#E7B51E] rounded-[216px] text-white text-base font-medium">Call now</button>
            <div className="text-white font-medium text-base md:text-xl">
                <p>+88 01336-092485</p>
                <p>+88 01887-944830</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
