import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const course = useLoaderData();
    const {name, img, details, videos} = course

    return (
        <div className='bg-secondary p-10 rounded-lg'>
            <h1 className='text-5xl'> {name}</h1>
            <br></br>
            <img src={img} className="w-1/2 mx-auto rounded-lg" alt=''/>
            <p className='mt-8 text-2xl'>Total Videos: {videos}</p>
            <p className='mt-8 text-2xl'>{details}</p>
            <div className='btn btn-primary mt-8'> Get Premium Access <FaCrown/><button></button></div>
        </div>
    );
};

export default CourseDetail;