import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    let error = useRouteError();
    console.error(error);
    return (
        <div className='h-screen'>
            <div className='pt-32'>
            Error 404 - No content found!<br/>
            Please check your route and try again!
            <br/>
            <Link to='/' className='btn btn-outline mt-12'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;