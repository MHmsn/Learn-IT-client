import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { AllContext } from '../../contexts/Context/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AllContext);
    const location = useLocation();

    if(user && user.uid){
        return children;
    }
    else{
        return <Navigate to='/login' state ={{from: location}} replace></Navigate>;
    }
    
};

export default PrivateRoute;