import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const Course = () => {
    const courses = useLoaderData();
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default Course;