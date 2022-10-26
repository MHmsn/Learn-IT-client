import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { AllContext } from '../../contexts/Context/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AllContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56 bg-primary"></progress>;
    }

    if(user && user.uid){
        return children;
    }
    else{
        return <Navigate to='/login' state ={{from: location}} replace></Navigate>;
    }
    
};

export default PrivateRoute;