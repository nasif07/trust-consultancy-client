import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/vatTaxBanner.png";

const VatAndTax = () => {
    const lists = [
        {
            title: "VAT Registration & Compliance",
            items: [
                "Assistance with VAT registration for businesses of all sizes.",
                "Ensuring compliance with Bangladesh VAT laws and regulations.",
                "Preparation and submission of VAT returns.",
                "Advisory on VAT record-keeping and documentation."
            ]
        },
        {
            title: "Tax Planning & Advisory",
            items: [
                "Strategic tax planning to reduce liabilities and enhance profitability.",
                "Customized tax advisory services for individuals and businesses.",
                "Assistance with tax exemptions, deductions, and incentives."
            ]
        },
        {
            title: "VAT & Tax Filing Services",
            items: [
                "Timely and accurate filing of VAT and tax returns.",
                "Managing electronic VAT invoicing and digital record-keeping.",
                "Handling VAT rebate and refund applications."
            ]
        },
        {
            title: "Tax Dispute Resolution & Compliance Support",
            items: [
                "Expert representation in VAT and tax-related disputes.",
                "Assistance in audits, investigations, and compliance checks.",
                "Resolving tax penalties and legal complexities."
            ]
        },
        {
            title: "Corporate Tax Services",
            items: [
                "Corporate tax return preparation and submission.",
                "Advisory on corporate tax planning and compliance.",
                "Handling tax audits and compliance reports."
            ]
        }
    ];
    
    
    
  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Expert VAT & Tax Solutions for Your Business"}
        subtitle={
          "At Trust Consultancy, we specialize in providing comprehensive VAT and tax consulting services tailored to businesses operating in Bangladesh. Navigating the complexities of tax regulations can be challenging, but with our expertise, you can ensure compliance, minimize liabilities, and optimize financial efficiency."
        }></HeroBanner>
        <ServiceListView title={"Our VAT & Tax Services"} itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default VatAndTax;
