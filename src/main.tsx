import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import VatAndTax from "./Pages/VatAndTax/VatAndTax";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/vat-&-tax" element={<VatAndTax></VatAndTax>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
