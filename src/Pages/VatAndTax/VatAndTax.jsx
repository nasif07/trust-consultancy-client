import Faq from "../../Components/Faq";
import HeroBanner from "../../Components/HeroBanner";
import ServiceListView from "../../Components/ServiceListView";
import imageUrl from "../../assets/vatTaxBanner.png";

const VatAndTax = () => {
    const lists = [
        {
            "title": "Business Services",
            "items": [
                "VAT Registration - Assistance with VAT registration for businesses of all sizes",
                "Tax Consultation - Expert advice on corporate and personal taxation",
                "Payroll Management - Handling employee salaries, taxes, and compliance",
                "Business Formation - Guidance on setting up sole proprietorships, LLCs, and corporations"
            ]
        },
        {
            "title": "Marketing Solutions",
            "items": [
                "SEO Optimization - Improve search engine rankings and visibility",
                "Social Media Management - Manage and grow your online presence",
                "Content Marketing - Create and distribute valuable content",
                "Email Campaigns - Effective email strategies for customer engagement"
            ]
        },
        {
            "title": "IT Support",
            "items": [
                "Network Security - Protect systems from cyber threats",
                "Cloud Solutions - Scalable cloud storage and computing",
                "Software Development - Custom applications for business needs",
                "IT Consulting - Expert advice on technology strategies"
            ]
        },
        {
            "title": "Financial Services",
            "items": [
                "Investment Planning - Secure your financial future",
                "Retirement Savings - Guidance on pension and savings plans",
                "Wealth Management - Optimize assets and financial health",
                "Tax Filing - Assistance with personal and business tax returns"
            ]
        },
        {
            "title": "Education & Training",
            "items": [
                "Online Courses - Learn new skills from top educators",
                "Corporate Training - Upskill your employees for better performance",
                "Language Classes - Improve communication in different languages",
                "Career Coaching - Professional guidance for job growth"
            ]
        }
    ]
    
    
    
  return (
    <>
      <HeroBanner
        imageUrl={imageUrl}
        title={"Expert VAT & Tax Solutions for Your Business"}
        subtitle={
          "At Trust Consultancy, we specialize in providing comprehensive VAT and tax consulting services tailored to businesses operating in Bangladesh. Navigating the complexities of tax regulations can be challenging, but with our expertise, you can ensure compliance, minimize liabilities, and optimize financial efficiency."
        }></HeroBanner>
        <ServiceListView itemData={lists}></ServiceListView>
      <Faq></Faq>
    </>
  );
};

export default VatAndTax;
