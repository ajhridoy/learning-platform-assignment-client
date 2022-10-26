import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context API/UserAuth/UserAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed mx-auto my-7 rounded-full animate-spin border-violet-400"></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/signin' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;