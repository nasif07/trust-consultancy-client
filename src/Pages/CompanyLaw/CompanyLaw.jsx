import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/companyLawBanner.png.png";

const CompanyLaw = () => {
  const lists = [
    {
      title: "Business Registration & Incorporation",
      items: [
        "Assistance with company formation and registration.",
        "Guidance on choosing the right business structure (Sole Proprietorship, Partnership, Private Limited, etc.).",
        "Obtaining necessary licenses and regulatory approvals.",
      ],
    },
    {
      title: "Corporate Compliance & Governance",
      items: [
        "Ensuring compliance with the Companies Act and other corporate laws.",
        "Drafting and reviewing corporate policies and governance frameworks.",
        "Assistance with shareholder agreements and board resolutions.",
      ],
    },
    {
      title: "Legal Documentation & Contract Drafting",
      items: [
        "Drafting and reviewing business contracts and agreements.",
        "Preparing Memorandum & Articles of Association.",
        "Assistance with mergers, acquisitions, and joint ventures.",
      ],
    },
    {
      title: "Regulatory Filings & Reporting",
      items: [
        "Annual return filing with the Registrar of Joint Stock Companies (RJSC).",
        "Preparation and submission of statutory reports.",
        "Advising on compliance with tax and labor regulations.",
      ],
    },
    {
      title: "Business Restructuring & Dissolution",
      items: [
        "Advisory on company mergers, acquisitions, and demergers.",
        "Assistance with voluntary liquidation and company closure.",
        "Resolving corporate disputes and legal challenges.",
      ],
    },
  ];

  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Reliable Company Law Consulting for Your Business"}
        subtitle={
          "At Trust Consultancy, we provide expert company law consulting services to help businesses navigate legal complexities and ensure compliance with Bangladesh’s corporate regulations. Whether you are starting a new company, restructuring, or managing ongoing legal obligations, our team is here to support you every step of the way."
        }></HeroBanner>
      <ServiceListView
        title={"Our Company Law Services"}
        itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default CompanyLaw;
