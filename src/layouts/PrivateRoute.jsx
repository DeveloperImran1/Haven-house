import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
        return <div className='w-full h-[200px] flex items-center justify-center'>
            <div className=" w-12 h-12"><div className="grid grid-cols-2 h-full w-full overflow-hidden shadow-lg rounded-full animate-spin"><span className="h-6 w-6 rounded-tl-full bg-transparent"></span><span className="h-6 w-6 rounded-tr-full bg-sky-500"></span><span className="h-6 w-6 rounded-bl-full bg-sky-500"></span><span className="h-6 w-6 rounded-br-full"></span></div></div>
        </div>

    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;