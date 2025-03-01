import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/companyLawBanner.png.png";

const FireAndEnvironmentalServices = () => {
  const lists = [
    {
      title: "Fire Safety Certification",
      items: [
        "Assistance in obtaining Fire License from the Fire Service and Civil Defense Department.",
        "Fire safety assessment and compliance verification.",
        "Fire protection system recommendations and documentation.",
      ],
    },
    {
      title: "Environmental Clearance Certificate (ECC)",
      items: [
        "Guidance in obtaining Environmental Clearance from the Department of Environment (DoE).",
        "Compliance assessment with environmental laws and regulations.",
        "Preparation of required environmental impact assessments (EIA) and reports.",
      ],
    },
    {
      title: "Regulatory Compliance & Advisory",
      items: [
        "Ensuring adherence to Bangladesh's fire and environmental laws.",
        "Periodic audits and inspections for certification renewal.",
        "Advisory on best practices for fire safety and eco-friendly business operations.",
      ],
    },
    {
      title: "Certification Renewal & Modifications",
      items: [
        "Renewal of expired Fire Safety and Environmental Certificates.",
        "Updating certificates for business expansion or operational changes.",
        "Liaison with government authorities for smooth processing.",
      ],
    },
  ];
  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Ensure Compliance with Fire & Environmental Regulations"}
        subtitle={
          "At Trust Consultancy, we assist businesses in obtaining Fire Safety and Environmental Certifications to ensure legal compliance and workplace safety. Our team provides expert guidance, document preparation, and regulatory support to help you meet national standards efficiently."
        }></HeroBanner>
      <ServiceListView
        title={"Our Fire & Environmental Certification Services"}
        itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default FireAndEnvironmentalServices;
