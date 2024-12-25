
import { useContext, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// react sweet alert
import Swal from 'sweetalert2'

const Navbar = () => {
    const navigate = useNavigate()


    const logOutPopup = () => {
        Swal.fire({
            title: "Log Out!",
            text: "You Successfully Log Out !",
            icon: "success"
        });
        navigate("/")
    };
    const logoutErroor = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",

        });
        navigate("/")
    }



    const { user, logOut, loading } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log("loged out succefully")
                logOutPopup()
            })
            .catch(err => {
                console.log(err)
                logoutErroor()
            })
    };
    console.log(user)

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    if (loading) {
        return <div className='w-full mt-8 flex justify-center items-center '>
            <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
        </div>
    }


    return (
        <div>
            <nav className="flex items-center justify-between py-[32px]">
                {
                    user ? <div className="hidden md:flex scale-100 cursor-pointer rounded-2xl text-[18px] lg:text-[24px] font-bold transition-all duration-200 hover:scale-110">
                        <NavLink to="/">
                            <h2 className='text-sky-500'><span className='text-green-500'>Haven</span>House</h2>
                        </NavLink>
                    </div> : <div className="flex scale-100 cursor-pointer rounded-2xl  text-[18px] lg:text-[24px] font-bold transition-all duration-200 hover:scale-110">
                        <NavLink to="/">
                            <h2 className='text-sky-500'><span className='text-green-500'>Haven</span>House</h2>
                        </NavLink>
                    </div>
                }
                <ul className="hidden items-center justify-between gap-4 lg:flex  ">
                    <NavLink to="/" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : `border-2 rounded-lg border-[#23BE0A] hover:border-sky-500 text-[#131313CC] `}>
                        <li className="group flex  cursor-pointer flex-col">
                            {/* Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span> */}
                            <button className="rounded-lg hover:border-2 hover:border-sky-500 px-2 py-1 text-xl  duration-200 hover:bg-sky-500 hover:text-white">Home</button>

                        </li>
                    </NavLink>

                    {
                        user && <>

                            <NavLink to="/selectedEstate" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : `border-2 rounded-lg border-[#23BE0A]  hover:border-sky-500 text-[#131313CC] `}>
                                <li className="group flex  cursor-pointer flex-col">
                                    {/* Selected Estate<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span> */}
                                    <button className="rounded-lg hover:border-2 hover:border-sky-500 px-2 py-1 text-xl  duration-200 hover:bg-sky-500 hover:text-white">Selected Estate</button>
                                </li>
                            </NavLink>
                            <NavLink to="/profile" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : `border-2 rounded-lg border-[#23BE0A]  hover:border-sky-500 text-[#131313CC] `}>
                                <li className="group flex  cursor-pointer flex-col">
                                    {/* Profile <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span> */}
                                    <button className="rounded-lg hover:border-2 hover:border-sky-500 px-2 py-1 text-xl  duration-200 hover:bg-sky-500 hover:text-white">Profile</button>

                                </li>
                            </NavLink>
                            <NavLink to="/updateProfile" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : `border-2 rounded-lg border-[#23BE0A]  hover:border-sky-500 text-[#131313CC] `}>
                                <li className="group flex  cursor-pointer flex-col">
                                    {/* Update Profile<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span> */}
                                    <button className="rounded-lg hover:border-2 hover:border-sky-500 px-2 py-1 text-xl  duration-200 hover:bg-sky-500 hover:text-white">Update Profile</button>

                                </li>
                            </NavLink>

                        </>
                    }

                </ul>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`cursor-pointer ${user || 'ml-[185px]' }`} > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className=" z-10  gap-2  bg-[#393E46]  absolute left-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                            <NavLink to="/" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : ` rounded-lg text-[#131313CC] `}>
                                <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                                    Home
                                </li>
                            </NavLink>
                            {
                                user && <>



                                    <NavLink to="/selectedEstate" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : ` rounded-lg text-[#131313CC] `} >
                                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                            Selected Estate
                                        </li>
                                    </NavLink>
                                    <NavLink to="/profile" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : ` rounded-lg text-[#131313CC] `}>
                                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                            Profile
                                        </li>
                                    </NavLink>


                                    <NavLink to="/updateProfile" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : ` rounded-lg text-[#131313CC] `} >
                                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                            Update Profile
                                        </li>
                                    </NavLink>
                                </>
                            }
                            {
                                user ? <NavLink to="/login" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : ` rounded-lg text-[#131313CC] `}>
                                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        <button onClick={handleLogout} className="">
                                            Logut
                                        </button>
                                    </li>
                                </NavLink> : <NavLink to="/login" className={({ isActive }) => isActive ? `bg-sky-500 text-white border-2 rounded-lg border-sky-500 ` : ` rounded-lg text-[#131313CC] `}>
                                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                                        <button className="">
                                            LogIn
                                        </button>
                                    </li>
                                </NavLink>
                            }

                        </ul>
                    )}
                </div>

                {

                    user ? <div className='flex gap-2 justify-center items-center'>

                        <div className="flex items-center justify-center">
                            <div className="pointer group relative h-10">
                                {/* Hover button */}
                                <NavLink to="/profile">
                                    <div className="relative group">
                                        <img className="size-[50px] bg-slate-500 object-cover rounded-full" src={user.photoURL || "https://i.ibb.co/gWtW8nS/th-3-removebg-preview.png"} alt="avatar navigate ui" />
                                        <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                                        <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                                    </div>
                                </NavLink>

                                {/* Hover Text */}
                                <div className="absolute -left-[90px] top-0 flex cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-left-[150px] group-hover:opacity-100">
                                    <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]"> {user.displayName || "name not found"} </p>
                                    <span className="absolute -right-2 top-[50%] h-0 w-0 -translate-y-1/2 rotate-45 border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/login" >
                            {/* <button onClick={handleLogout} className="hidden md:flex rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90">Log Out</button> */}
                            <button onClick={handleLogout} className="hidden md:flex">
                                <a href="#_" className="w-[150px] lg:w-[100px] text-center rounded-md text-[17px] font-semibold px-[3px] lg:px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2  border-[#23BE0A] text-[#23BE0A] hover:text-white">
                                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#23BE0A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                    <span className="relative text-[#23BE0A] transition duration-300 group-hover:text-white ease">Log Out</span>
                                </a>
                            </button>
                        </NavLink>
                    </div> : <NavLink to="/login" >
                        <button className="hidden md:flex">
                            <a href="#_" className="w-[150px] lg:w-[100px] text-center rounded-md text-[17px] font-semibold px-[3px] lg:px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2  border-[#23BE0A] text-[#23BE0A] hover:text-white">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#23BE0A] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-[#23BE0A] transition duration-300 group-hover:text-white ease">Log In</span>
                            </a>
                        </button>
                    </NavLink>
                }


            </nav>

        </div>
    );
};

export default Navbar;