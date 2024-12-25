
import { Helmet } from "react-helmet-async";
import EstateCard from "./EstateCard";
import SatisfiedClients from "./SatisfiedClients";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";
import ContactUs from "./ContactUs";


const Home = () => {

    const data = useLoaderData();
    console.log(data);
    return (
        <div className=" overflow-hidden">
            <Helmet>
                <title>HavenHouse | Home</title>
            </Helmet>
            <Slider></Slider>

            <div id="states" className="relative " >
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-offset="200"   
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="text-[40px] font-bold text-[#131313] text-center"> Estates</h1>
                <p
                 data-aos="fade-up"
                 data-aos-anchor-placement="center-bottom"
                 data-aos-offset="200"
                 data-aos-delay="100"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                className=" text-[16px] text-[#131313CC] text-center mb-9 lg:mb-12 w-[80%] mx-auto ">Welcome to our Estate Section, where your dream home awaits! Discover an exquisite collection of residential properties carefully curated to meet your desires and exceed your expectations. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between  gap-4 mb-[38px] lg:mb-[66px] ">

                    {
                        data.map(singleData => <EstateCard key={singleData.id} singleData={singleData} ></EstateCard>)
                    }
                </div>
            </div>

            <SatisfiedClients></SatisfiedClients>

            <ContactUs></ContactUs>

            
        </div>
    );
};

export default Home;