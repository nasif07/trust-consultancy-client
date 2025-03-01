import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/tradeLicenseBanner.png.png";

const TradeLicense = () => {
  const lists = [
    {
      title: "New Trade License Registration",
      items: [
        "Guidance on eligibility and required documentation.",
        "Application preparation and submission to the relevant authorities.",
        "Liaison with municipal corporations and trade bodies.",
      ],
    },
    {
      title: "Trade License Renewal",
      items: [
        "Timely renewal processing to avoid penalties and business disruptions.",
        "Document verification and submission.",
        "Assistance with any additional regulatory requirements.",
      ],
    },
    {
      title: "Modification & Updates",
      items: [
        "Updating business details such as name, address, or business category.",
        "Handling modifications and reissuance of trade licenses.",
        "Ensuring compliance with local government regulations.",
      ],
    },
    {
      title: "Duplicate Trade License Issuance",
      items: [
        "Assistance in obtaining a duplicate license in case of loss or damage.",
        "Proper documentation and verification support.",
        "Liaison with authorities for quick processing.",
      ],
    },
    {
      title: "Compliance & Advisory",
      items: [
        "Ensuring your business adheres to municipal and regulatory guidelines.",
        "Expert consultation on trade license-related legal matters.",
        "Support in resolving trade license disputes.",
      ],
    },
  ];

  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Hassle-Free Trade License Assistance for Your Business"}
        subtitle={
          "At Trust Consultancy, we provide end-to-end assistance for obtaining and renewing trade licenses in Bangladesh. A valid trade license is essential for legally operating a business, and our experts ensure a smooth, efficient, and hassle-free process for you."
        }></HeroBanner>
      <ServiceListView
        title={"Our Trade License Services"}
        itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default TradeLicense;
