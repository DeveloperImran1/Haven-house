import { useEffect, useState } from "react";
import SatisfiedClientCard from "./SatisfiedClientCard";
import Marquee from "react-fast-marquee";
import CompanyIcons from "./CompanyIcons";

const SatisfiedClients = () => {
    const [clients, setClients] = useState([]);
    const [icons, setIcons] = useState([]);

    useEffect(() => {
        fetch('/Client.json')
            .then(res => res.json())
            .then(data => setClients(data))


    }, [])

    useEffect(() => {
        fetch("/CompanyIcon.json")
            .then(res => res.json())
            .then(data => setIcons(data))
    }, [])
    return (
        <div id="clients">
            <section className="py-6 mb-12 lg:mb-[96px] sm:py-12  ">
                <div className="container  mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h1 
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                         className="text-[40px] font-bold text-[#131313] text-center w-full "> Our Satisfied Clients</h1>
                        <p
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                         className=" text-[16px] text-[#131313CC] text-center mb-12 w-full lg:w-[80%] mx-auto ">At Haven House, our residents satisfaction is our top priority. Dont just take our word for it – hear what some of our happy residents have to say... </p>

                    </div>
                    <Marquee className="w-full h-[470px]" autoFill="false" pauseOnHover="true" speed="100">


                        {
                            clients.map(client => <SatisfiedClientCard key={client.id} client={client} ></SatisfiedClientCard>)
                        }
                    </Marquee>

                    <div>
                        <Marquee className="w-full " autoFill="false" pauseOnHover="true" direction="right" speed="200">

                            {
                                icons.map(icon => <CompanyIcons key={icon.id} icon={icon} ></CompanyIcons>)
                            }
                        </Marquee>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SatisfiedClients;