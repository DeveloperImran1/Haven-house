import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/Firebase.config";
// react sweet alert
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import 'animate.css';



const UpdateProfile = () => {
    const navigate = useNavigate();
    const { handleUpdateProfile, user } = useContext(AuthContext);
    const updatetedProfile = () => {
        Swal.fire({
            title: "Good job!",
            text: "Successfully Updated Your Profile !",
            icon: "success"
        });
        navigate("/")
    }

    const updateProfileError = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",

        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.username.value;
        const photo = e.target.image.value;

        if (!name.length || !photo.length) {
            return updateProfileError()
        }
        console.log(name, photo);
        // add name and userProfile pic

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then((result) => {
            console.log(result);
            updatetedProfile()

        }).catch((error) => {
            console.log(error)
            updateProfileError()
        });
        e.target.reset()
    }


    return (
        <div id="update" className="flex flex-col lg:flex-row justify-between">
            <Helmet>
                <title>HavenHouse | Update Profile</title>
            </Helmet>
            <div className="flex items-center justify-center">
                <img className="w-[70%]  h-[70%] lg:w-[500px] lg:h-[400px]  " src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="" />

            </div>

            <div className="w-full bg-base-200 max-w-md p-8 space-y-3 rounded-xl border  font-sans mx-auto">

                <h1 className="animate__animated animate__bounce text-3xl font-bold text-center text-indigo-600">Update your profile</h1>
                {/* Input fields and the form started */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your name
                        </label>
                        <input defaultValue={user.displayName} type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />

                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="150"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your Image
                        </label>
                        <input defaultValue={user.photoURL} type="text" name="image" id="image" placeholder="Your Image" className="w-full   px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>
                    {
                        user.email && <div
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="250"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            className="space-y-2 text-sm">
                            <label htmlFor="email" className="block ">
                                Your Email
                            </label>
                            <input value={user.email} type="text" className="w-full   px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                        </div>
                    }



                    <button
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="350"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        type="submit" className=" text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        Update
                        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                            Let&apos;s go
                        </span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    </button>

                </form>

            </div>

        </div>
    );
};



export default UpdateProfile;