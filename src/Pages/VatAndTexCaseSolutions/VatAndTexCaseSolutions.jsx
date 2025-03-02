import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/vatTaxCaseSolutions.png";
const VatAndTexCaseSolutions = () => {
    const lists = [
        {
            title: "VAT & Tax Dispute Resolution",
            items: [
                "Representation in tax audits, investigations, and dispute settlements.",
                "Assistance in responding to tax authority queries and notices.",
                "Legal support for tax appeals and litigation."
            ]
        },
        {
            title: "VAT & Tax Compliance Advisory",
            items: [
                "Ensuring businesses comply with VAT and tax regulations.",
                "Expert guidance on tax liabilities, exemptions, and deductions.",
                "Review of tax filings to prevent compliance issues."
            ]
        },
        {
            title: "Refund & Carry Forward Assistance",
            items: [
                "Assistance with VAT and tax refund claims.",
                "Support for carrying forward excess tax credits.",
                "Proper documentation and submission for quick processing."
            ]
        },
        {
            title: "Tax Planning & Risk Management",
            items: [
                "Strategic tax planning to minimize liabilities.",
                "Risk assessment and mitigation strategies.",
                "Proactive solutions to avoid future tax disputes."
            ]
        }
    ];
  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Expert VAT & Tax Case Solutions for Your Business"}
        subtitle={
          "At Trust Consultancy, we specialize in handling VAT and tax-related disputes, audits, and compliance issues to help businesses navigate complex taxation laws in Bangladesh. Our experienced professionals offer strategic guidance, legal representation, and expert advisory to ensure favorable outcomes in tax matters."
        }></HeroBanner>
      <ServiceListView
        title={"Our VAT & Tax Case Solutions"}
        itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default VatAndTexCaseSolutions;
