import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/companyLawBanner.png.png";

const RefundAndCarryForward = () => {
  const lists = [
    {
      title: "VAT & Tax Refund Assistance",
      items: [
        "Assistance in claiming refunds for overpaid VAT and tax.",
        "Preparation and submission of refund applications to tax authorities.",
        "Ensuring proper documentation to expedite refund processing.",
      ],
    },
    {
      title: "Carry Forward of Excess Tax Credits",
      items: [
        "Guidance on carrying forward excess VAT or tax credits to future periods.",
        "Strategic tax planning to utilize credits efficiently.",
        "Compliance review to ensure smooth transition and application of carried forward amounts.",
      ],
    },
    {
      title: "Documentation & Compliance Support",
      items: [
        "Review of refund claims for accuracy and completeness.",
        "Assistance in responding to tax authority queries regarding refunds and credit carry forward.",
        "Ensuring compliance with Bangladesh tax regulations.",
      ],
    },
    {
      title: "Audit & Advisory Services",
      items: [
        "VAT & tax audit support to substantiate refund claims.",
        "Advisory on the best tax-saving strategies for refund and carry forward management.",
        "Assistance in avoiding future tax-related complications.",
      ],
    },
  ];

  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={
          "Maximize Your Tax Benefits with Expert Refund & Carry Forward Assistance"
        }
        subtitle={
          "At Trust Consultancy, we help businesses recover excess tax payments and optimize their financial planning through VAT & tax refund claims and carry forward solutions. Our team ensures compliance with tax regulations while minimizing delays in processing your refunds or credit balances."
        }></HeroBanner>
      <ServiceListView
        title={"Our Refund & Carry Forward Services"}
        itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default RefundAndCarryForward;
