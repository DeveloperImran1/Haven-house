import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

// react tostify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
const register = () => toast("Successfully Register !");
const updade = () => toast("Successfully Updated Your Profile !");
const error = () => toast.error("Empty input not allowed !");


// react sweet alert
import Swal from 'sweetalert2'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Register = () => {


    const navigate = useNavigate();

    const signUp = () => {
        Swal.fire({
            title: "Good job!",
            text: "You Successfully Registerd !",
            icon: "success"
        });
        navigate("/")
    };

    const RegisterErroor = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",

        });
    }

    const { register, signInGoogle, signInGithub, handleUpdateProfile, logOut } = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        console.log(name, email, password.length, photo);

        if(!name.length || !email.length || !password.length || !photo.length ){
            return error()
        }
        setErrorMessage("")
        // password validation
        if (password.length < 6) {
            return setErrorMessage("Password Should have Atleast 6 charecter !")
        }
        if (!/[A-Z]/.test(password)) {
            return setErrorMessage("Password Should have Atleast 1 Uppercase !")
        }
        if (!/[a-z]/.test(password)) {
            return setErrorMessage("Password Should have Atleast 1 Lowercase !")
        }

        register(email, password)
            .then(result => {
                console.log(result)
                // add name and userProfile pic
                handleUpdateProfile(name, photo)
                    .then(result => {
                        console.log(result)

                    })

                signUp()
                logOut()
            })
            .catch(err => RegisterErroor())

        e.target.reset();
    }

    // signInGoogle
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                console.log(result)
                signUp()
            })
            .catch(err => RegisterErroor())
    }

    // signInGithub
    const handleGithubSignIn = () => {
        signInGithub()
            .then(result => {
                console.log(result)
                signUp()
            })
            .catch(err => RegisterErroor())
    }

    return (
        <div className=" flex flex-col-reverse lg:flex-row justify-between overflow-x-hidden gap-[100px]">
            <Helmet>
                <title>HavenHouse | Register</title>
            </Helmet>
            <div className="w-full lg:ml-9 bg-base-200 max-w-md p-5 lg:p-8 space-y-3 rounded-xl border  font-sans mx-auto">
                <h1 className="animate__animated animate__heartBeat text-3xl font-bold text-center text-indigo-600">Register</h1>
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
                        <div className="text-left  " >
                            <label htmlFor="username" >
                                Your name
                            </label>
                        </div>
                        <input type="text" name="name"  id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />

                    </div>

                    <div 
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="150"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                    className="space-y-2 text-sm">
                        <div className="text-left  " >
                            <label htmlFor="username" >
                                Your Email
                            </label>
                        </div>
                        <input type="email" name="email"  id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>

                    <div 
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="250"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                    className="space-y-2 text-sm">
                        <div className="text-left  " >
                            <label htmlFor="photo" >
                                Your Photo URL
                            </label>
                        </div>
                        <input type="text" name="photo" id="photo"  placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>

                    <div 
                      data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="350"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                    className="space-y-2 text-sm">

                        <div className="text-left  " >
                            <label htmlFor="password" >
                                Password
                            </label>
                        </div>
                        <div className="relative">
                            <input type={`${showPassword ? 'password' : 'text'}`} name="password" id="password"  placeholder="Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                            <div className="absolute top-3 right-3 " onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash size="20" ></FaEyeSlash> : <FaEye size="20"></FaEye>}
                            </div>
                        </div>

                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    </div>
                    {/* Sign in Button */}
                    <button
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="450"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      data-aos-mirror="true"
                    className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        Sign In
                        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                            Let&apos;s go
                        </span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <p className="text-sm text-gray-600">Sign In with social accounts</p>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                {/* Social icons */}
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                    </button>

                    <button onClick={handleGithubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-full hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path></svg>
                    </button>
                </div>
                <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                    Already have an account?
                    <Link to="/login" className="underline hover:text-indigo-600">
                        Login
                    </Link>
                </p>
            </div>

            <div>
                <img className="w-full" src="https://brandio.io/envato/hostify/html/images/graphic1.png" alt="" />
            </div>
        </div>
    );
};

export default Register;


