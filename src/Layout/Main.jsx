import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import WhatsAppButton from "../Components/WhatsAppButton";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <WhatsAppButton></WhatsAppButton>
    </div>
  );
};

export default Main;
