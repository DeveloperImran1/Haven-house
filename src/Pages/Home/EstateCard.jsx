import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const EstateCard = ({ singleData }) => {


    const { estate_title, id, image, description, price, status, area, location, facilities, additional_info } = singleData;
    return (
        <div >
            <div data-aos="fade-up"
     data-aos-duration="3000"
     data-aos-delay="50"
     data-aos-easing="ease-in-out"
             className=" space-y-4 flex flex-col relative  p-6 shadow-lg w-full h-[580px] max-w-sm mx-auto group transition border-2 rounded-xl hover:scale-105 border-sky-500 hover:border-[#23BE0A] border-opacity-30 hover:no-underline focus:no-underline ">
                <div className="relative">
                    <img alt="card navigate ui" className="w-[330px] h-[230px] object-cover  rounded-xl " src={image} />
                    <div className="bg-sky-500 text-white absolute text-[25px] font-normal text-center right-0 top-4 w-[85px] h-[35px] rounded-l-full ">{status}</div>
                </div>
                <div className="grid gap-2 justify-start text-start">
                    <h1 className="text-[20px] font-semibold text-[#131313] ">{estate_title}</h1>
                    <p className="text-base text-[#131313CC] font-medium ">{description.slice(0, 70)}</p>
                    <hr className="border border-dashed text-[#13131326] my-2 " />

                    <div className=" flex text-base text-[#131313CC] font-medium justify-between ">
                        <p>{price}</p>
                        <p>{area}</p>
                    </div>
                    <div className="text-base  font-semibold  ">
                        <p>Location: {location}</p>

                    </div>
                </div>


                <div className="flex absolute bottom-5 left-5 gap-4">
                    <Link to={`/cardDetails/${id} `} className="border-2 rounded-lg border-[#23BE0A] hover:border-sky-500 text-[#131313CC]">
                        <li className="group flex  cursor-pointer flex-col">
                            <button className="rounded-lg hover:border-2 text-[#23BE0A] hover:border-sky-500 px-2 py-1 text-xl  duration-200 hover:bg-sky-500 hover:text-white">View Property</button>

                        </li>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;