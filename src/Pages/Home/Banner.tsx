import bannerBg from "../../assets/bannerBg.svg"

const Banner = () => {
    return (
        <section className="max-w-[1300px] mx-auto py-10 lg:py-28 px-3 md:px-10 lg:px-0 flex flex-col md:flex-row gap-10 justify-between items-center font-inter">
            <div className="max-w-[650px]">
                <h1 className="text-[#2A2A2A] font-bold text-3xl md:text-4xl lg:text-7xl pb-7">Your Partner in Business <span className="text-[#E7B51E]">Growth</span> & Compliance</h1>
                <p className="text-base font-light pb-10">Welcome to Trust Consultancy, your reliable partner in VAT, Tax, and financial compliance solutions. With years of expertise in Bangladesh's regulatory landscape, we assist businesses in navigating complex tax requirements with efficiency and accuracy.</p>
                <button className="py-2.5 md:py-4 px-4 md:px-8 bg-[#E7B51E] rounded-[216px] text-white text-sm md:text-base font-medium">Let’s Discuss Your Case</button>
            </div>
            <div>
                <img src={bannerBg} alt="" />
            </div>
        </section>
    );
};

export default Banner;