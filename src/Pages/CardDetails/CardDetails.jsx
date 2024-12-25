


import { useLoaderData, useParams } from "react-router-dom";
import { setEstate } from "../../Components/Localstorage";

import { MdBookmarkAdd } from "react-icons/md";

// swipe slider
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from "react-helmet-async";

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";






const CardDetails = () => {


    const data = useLoaderData();

    const path = useParams();
    const currentData = data.filter(singleData => singleData.id == path.id);

    const handleSetEstate = (estate) => {
        setEstate(estate);
    }

    console.log(currentData[0])
    const { id, estate_title, map, segment_name, image, description, price, status, area, location, facilities, additional_info } = currentData[0];

    return (
        <div>
            <Helmet>
                <title>{`HavenHouse | Details ${id}`} </title>
            </Helmet>
            <div className="w-full lg:w-[70%] mx-auto flex  items-center justify-center p-5 border-2 rounded-2xl">
                <div className="flex flex-col gap-12 rounded-lg  w-full">
                    <div>
                        <h1 className=" text-[24px] lg:text-[40px] w-full font-semibold ">{estate_title}</h1>
                    </div>
                    <div className="text-base -my-10 flex justify-between ">
                        <p>{price}</p>
                        <p>Status: {status}</p>
                    </div>
                    <div className="flex mt-4 -mb-4 gap-6">
                        <p className="text-[20px] font-semibold">{segment_name}</p>
                        <div onClick={() => handleSetEstate(currentData[0])} className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden">
                            <MdBookmarkAdd size={20} className="text-secondary"></MdBookmarkAdd>
                        </div>
                    </div>

                    <div>
                        {/* <img alt="card navigate ui" className="w-full h-[400px] object-cover  rounded-lg " src={image} /> */}
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img alt="card navigate ui" className="w-full h-[400px] object-cover  rounded-lg " src={image} /> </SwiperSlide>
                            <SwiperSlide><img alt="card navigate ui" className="w-full h-[400px] object-cover  rounded-lg " src="https://i.ibb.co/YBJM4Z4/folio-img3-1536x960.jpg" /> </SwiperSlide>
                            <SwiperSlide><img alt="card navigate ui" className="w-full h-[400px] object-cover  rounded-lg " src="https://i.ibb.co/DGDD1bG/folio-img4-q1mix2zqnzajhubhq281n0nchz2v2kilewhqjkk3yo.jpg" /> </SwiperSlide>
                            <SwiperSlide><img alt="card navigate ui" className="w-full h-[400px] object-cover  rounded-lg " src="https://i.ibb.co/G0L2fZJ/folio-img5-q1mizdpjdefrvizcb1z7qfrwrvr5vxmz29wgrx5gr4-1.jpg" /> </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="w-full ">

                        <div className="flex justify-between">
                            <div className="flex flex-col text-start">
                                <p className="text-base font-semibold">Facilites: </p>
                                {
                                    facilities.map(facilite => <li>{facilite}</li>)
                                }
                            </div>
                            <div className="flex flex-col text-start">
                                <p className="text-base font-semibold">Additional Info: </p>
                                {

                                    <div>
                                        {additional_info.bedrooms && <li>Bedrooms: {additional_info.bedrooms} </li>}
                                        {additional_info.bathrooms && <li>Bathrooms: {additional_info.bathrooms} </li>}
                                        {additional_info.parking && <li>Parking: {additional_info.parking} </li>}
                                        {additional_info.lot_size && <li>Lot size: {additional_info.lot_size} </li>}
                                        {additional_info.maximum_guests && <li>Maximum Guests: {additional_info.maximum_guests} </li>}
                                        {additional_info.floor && <li>Floor: {additional_info.floor} </li>}
                                        {additional_info.school_district && <li>School District: {additional_info.school_district} </li>}
                                        {additional_info.age_requirement && <li>Age Requirement: {additional_info.age_requirement} </li>}
                                        {additional_info.utilities_included && <li>Utilities Included: {additional_info.utilities_included} </li>}
                                        {additional_info.distance_to_campus && <li>Distance to Campus: {additional_info.distance_to_campus} </li>}
                                        {additional_info.lease_term && <li>Lease Term: {additional_info.lease_term} </li>}
                                        {additional_info.year_built && <li>Year Built: {additional_info.year_built} </li>}
                                        {additional_info.furnished && <li>Furnished: {additional_info.furnished} </li>}
                                    </div>

                                }
                            </div>
                        </div>

                        <p className="text-base text-gray-500 dark:text-gray-400 my-6"><span className="text-[20px] font-semibold text-black" >Description:</span> {description}</p>
                        {/* react leaflet */}
                        <div>
                            <div className="flex justify-between">
                                <p className="text-base my-6"><span className="text-[20px] font-semibold text-black" >Location:</span> {location}</p>
                                <p className="text-base my-6"><span className="text-[20px] font-semibold text-black" >Area:</span> {area}</p>
                            </div>
                            <MapContainer
                                center={map || [23.7104, 90.4074] }
                                zoom={11}
                                scrollWheelZoom={true}
                                className="h-[40vh] md:h-[50vh] lg:h-[70vh]"
                            >
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={map || [23.7104, 90.4074] }>
                                    <Popup>
                                        {location}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default CardDetails;