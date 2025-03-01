import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/companyService.png.png";

const CompanyAccounts = () => {
  const lists = [
    {
      title: "Bookkeeping & Financial Record Maintenance",
      items: [
        "Systematic recording of financial transactions.",
        "Preparation of general ledgers, balance sheets, and financial statements.",
        "Maintenance of accurate and up-to-date financial records.",
      ],
    },
    {
      title: "Payroll Management",
      items: [
        "Payroll processing and salary disbursement.",
        "Tax deductions and benefits management.",
        "Compliance with labor laws and tax regulations.",
      ],
    },
    {
      title: "Tax & VAT Accounting",
      items: [
        "Preparation and submission of corporate tax returns.",
        "VAT record-keeping and compliance.",
        "Tax audit assistance and advisory.",
      ],
    },
    {
      title: "Financial Reporting & Analysis",
      items: [
        "Monthly, quarterly, and annual financial reporting.",
        "Budgeting and forecasting support.",
        "Performance analysis and strategic financial planning.",
      ],
    },
    {
      title: "Audit Preparation & Compliance",
      items: [
        "Preparation of financial documents for audits.",
        "Ensuring compliance with financial regulations.",
        "Addressing audit queries and resolving discrepancies.",
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
        title={"Our Company Accounts Services"}
        itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default CompanyAccounts;
