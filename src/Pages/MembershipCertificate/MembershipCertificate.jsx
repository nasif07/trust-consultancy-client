import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/applicationAssistant.png";

const MembershipCertificate = () => {
  const lists = [
    {
      title: "Membership Application Assistance",
      items: [
        "Guidance on eligibility and application process for industry-specific memberships.",
        "Preparation and submission of required documentation.",
        "Liaising with relevant authorities to ensure a smooth approval process.",
      ],
    },
    {
      title: "Renewal & Compliance Support",
      items: [
        "Assistance with timely renewal of membership certificates.",
        "Compliance checks to meet industry and regulatory requirements.",
        "Updating membership details as per business needs.",
      ],
    },
    {
      title: "Advisory on Industry-Specific Memberships",
      items: [
        "Identifying the right membership certifications for your business.",
        "Advisory on benefits and obligations associated with memberships.",
        "Support in obtaining certifications from chambers of commerce, trade bodies, and government institutions.",
      ],
    },
    {
      title: "Documentation & Legal Support",
      items: [
        "Ensuring all required documents are properly prepared and submitted.",
        "Assistance in addressing queries from issuing authorities.",
        "Legal support for businesses facing membership-related disputes or challenges.",
      ],
    },
  ];

  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Secure Essential Business Certifications with Ease"}
        subtitle={
          "At Trust Consultancy, we assist businesses in obtaining membership certificates from various industry associations, chambers of commerce, and regulatory bodies in Bangladesh. These certificates validate your business credentials, enhance credibility, and facilitate smoother trade and compliance."
        }></HeroBanner>
      <ServiceListView
        title={"Our Membership Certificate Services"}
        itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default MembershipCertificate;
