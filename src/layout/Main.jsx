import { Outlet } from "react-router-dom";
import Footer from "../pages/Share/Footer/Footer";
import Navbar from "../pages/Share/Navbar/Navbar";


const Main = () => {
    return (
        <div className="bg-[#2b2b2b] text-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;