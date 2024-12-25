import { Link } from "react-router-dom";
import { removeEstate } from "../../Components/Localstorage";
import { MdDeleteForever } from "react-icons/md";

const SelectedEstateCard = ({ estate, handleRemoveEstate }) => {
    const { estate_title, id, image, description, price, status, area, location, facilities, additional_info } = estate;



    return (
        <div>

    

            <div className=" space-y-4 flex flex-col relative  p-6 shadow-lg w-full h-[480px] max-w-sm mx-auto group transition border-2 rounded-xl hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline ">
                <div className="relative">
                    <img alt="card navigate ui" className="w-[330px] h-[230px] object-cover  rounded-xl " src={image} />
                    <div className="bg-blue-400 absolute text-[25px] font-normal text-center right-0 top-4 w-[85px] h-[35px] rounded-l-full ">{status}</div>
                </div>
                <div className="grid gap-2 justify-start text-start">
                    <h1 className="text-[20px] font-semibold text-[#131313] ">{estate_title}</h1>
                    <p className="text-base text-[#131313CC] font-medium ">{description.slice(0, 70)}</p>
                    <hr className="border border-dashed text-[#13131326] my-2 " />

                    <div className=" flex text-base text-[#131313CC] font-medium justify-between ">
                        <p>{price}</p>
                        <p>{area}</p>
                    </div>

                </div>

                <div
                    onClick={() => handleRemoveEstate(estate)}
                    className='bg-primary p-3 ml-5 rounded-full absolute  -top-5 -right-5 hover:bg-secondary group   cursor-pointer hover:scale-105 '>
                    <MdDeleteForever size={20} className='text-secondary group hover:text-primary' />
                </div>



            </div>
        </div>
    );
};

export default SelectedEstateCard;