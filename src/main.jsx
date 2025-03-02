import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import VatAndTax from "./Pages/VatAndTax/VatAndTax.jsx";
import CompanyLaw from "./Pages/CompanyLaw/CompanyLaw.jsx";
import TradeLicense from "./Pages/TradeLicense/TradeLicense.jsx";
import CompanyAccounts from "./Pages/CompanyAccounts/CompanyAccounts.jsx";
import BidaService from "./Pages/BidaServices/BidaServices.jsx";
import FireAndEnvironmentalServices from "./Pages/Fire&EnvironmentalServices/Fire&EnvironmentalServices.jsx";
import IrcAndErcServices from "./Pages/Irc&ErcServices/Irc&ErcServices.jsx";
import RefundAndCarryForward from "./Pages/RefundAndCarryForward/RefundAndCarryForward.jsx";
import MembershipCertificate from "./Pages/MembershipCertificate/MembershipCertificate.jsx";
import VatAndTexCaseSolutions from "./Pages/VatAndTexCaseSolutions/VatAndTexCaseSolutions.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/vat-&-tax" element={<VatAndTax />} />
          <Route path="/company-law" element={<CompanyLaw />} />
          <Route path="/trade-license" element={<TradeLicense />} />
          <Route path="/BIDA" element={<BidaService/>} />
          <Route path="/company-accounts" element={<CompanyAccounts />} />
          <Route path="/fire-&-environmental-certification" element={<FireAndEnvironmentalServices />} />
          <Route path="/IRC-&-ERC" element={<IrcAndErcServices />} />
          <Route path="/vat-&-tax-case-solutions" element={<VatAndTexCaseSolutions />} />
          <Route path="/refund-&-carry-forward" element={<RefundAndCarryForward />} />
          <Route path="/membership-certificate" element={<MembershipCertificate />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
