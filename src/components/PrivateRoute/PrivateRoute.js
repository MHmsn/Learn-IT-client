import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AllContext } from '../../contexts/Context/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AllContext);


    if(user){
        return children;
    }
    else{
        return <Navigate to='/login'></Navigate>;
    }
    
};

export default PrivateRoute;