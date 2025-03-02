import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/importExport.png";

const IrcAndErcServices = () => {
  const lists = [
    {
      title: "New IRC & ERC Registration",
      items: [
        "Complete guidance on application procedures and eligibility criteria.",
        "Preparation and submission of required documents to the Office of the Chief Controller of Imports & Exports (CCI&E).",
        "Fast-track processing to minimize delays in business operations.",
      ],
    },
    {
      title: "Renewal of IRC & ERC",
      items: [
        "Assistance with timely renewal to avoid business disruptions.",
        "Review and verification of necessary documents for compliance.",
        "Submission and follow-up with relevant authorities.",
      ],
    },
    {
      title: "Modifications & Updates",
      items: [
        "Updating IRC or ERC details for business expansion or structural changes.",
        "Assistance with modifications in registered products or categories.",
        "Handling reissuance in case of lost or damaged certificates.",
      ],
    },
    {
      title: "Regulatory Compliance & Advisory",
      items: [
        "Ensuring adherence to Bangladesh’s import-export regulations.",
        "Assistance in understanding duty structures, tax implications, and trade policies.",
        "Expert advisory on international trade compliance.",
      ],
    },
  ];

  const faqData = [
    {
      title: "1. What are IRC & ERC, and who needs them?",
      description:
        "Import Registration Certificates (IRC) and Export Registration Certificates (ERC) are required for businesses engaged in import-export activities",
    },
    {
      title: "2. How long does the process take?",
      description:
        "Processing time depends on the regulatory approvals and documentation provided.",
    },
  ];
  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Simplified Import & Export Registration for Your Business"}
        subtitle={
          "At Trust Consultancy, we provide expert assistance in obtaining Import Registration Certificate (IRC) and Export Registration Certificate (ERC) in Bangladesh. These registrations are essential for businesses engaged in international trade, ensuring compliance with government regulations and smooth import-export operations."
        }></HeroBanner>
      <ServiceListView
        title={"Our IRC & ERC Services"}
        itemData={lists}></ServiceListView>
      <Faq faqData={faqData}></Faq>
    </>
  );
};

export default IrcAndErcServices;
