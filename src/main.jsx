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
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
