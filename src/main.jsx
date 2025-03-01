import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home/Home.jsx";
import VatAndTax from "./Pages/VatAndTax/VatAndTax.jsx";
import CompanyLaw from "./Pages/CompanyLaw/CompanyLaw.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/vat-&-tax" element={<VatAndTax />} />
          <Route path="/company-law" element={<CompanyLaw />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
