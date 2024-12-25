import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div >
            <div className="max-w-[95%] lg:max-w-[85%] mx-auto poppins">
                <Navbar></Navbar>
                <div className="mt-6 md:mt-9">
                    <Outlet></Outlet>
                </div>

            </div>
            <div className="max-w-full mt-[96px] poppins">

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;