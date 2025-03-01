import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/vidaBanner.png.png";

const BidaServices = () => {
  const lists = [
    {
      title: "Investment Registration and Facilitation",
      items: [
        "Project Registration: Assistance with registering industrial projects, including preparation and submission of necessary documentation.",
        "Branch/Liaison Office Setup: Guidance on establishing branch, liaison, or representative offices, ensuring compliance with BIDA regulations.",
      ],
    },
    {
      title: "Regulatory Approvals and Compliance",
      items: [
        "Work Permits for Foreign Nationals: Facilitating the approval process for employing foreign nationals, including obtaining necessary work permits.",
        "Remittance Approvals: Assistance in securing approvals for remitting royalties, technical assistance fees, and other charges abroad.",
      ],
    },
    {
      title: "One Stop Service (OSS) Support",
      items: [
        "Utilization of BIDA's OSS Portal: Guiding clients through BIDA's One Stop Service portal, which offers centralized access to various regulatory services.",
        "Service Coordination: Coordinating with multiple agencies through the OSS to expedite services such as environmental clearances, utility connections, and more.",
      ],
    },
    {
      title: "Investment Counseling and Aftercare",
      items: [
        "Pre-Investment Consultation: Providing insights into the investment climate, sector-specific opportunities, and regulatory requirements in Bangladesh.",
        "Post-Investment Support: Ongoing assistance to address operational challenges, compliance updates, and expansion strategies.",
      ],
    },
  ];

  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Comprehensive BIDA Services for Investors"}
        subtitle={
          "At Trust Consultancy, we specialize in assisting businesses and investors in navigating the processes and services offered by the Bangladesh Investment Development Authority (BIDA). Our expertise ensures a seamless experience in establishing and expanding your business operations in Bangladesh."
        }></HeroBanner>
      <ServiceListView
        title={"Our BIDA Services"}
        itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default BidaServices;
