import { React } from "react";
import { FaCrown } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const CourseDetail = () => {
  const course = useLoaderData();
  const { name, img, details, videos, id } = course;
  return (
    <div className="bg-secondary p-10 rounded-lg">
      <h1 className="text-5xl"> {name}</h1>
      
      <br />
      <img src={img} className="w-1/2 mx-auto rounded-lg" alt="" />
      <p className="mt-8 text-2xl">Total Videos: {videos}</p>
      <p className="mt-8 text-2xl">{details}</p>
      <div className="mt-8"> 
        <Link to={`/courses/course-${id}/checkout`}><button className="btn btn-primary">Get Premium Access <FaCrown /></button></Link>
      </div>
    </div>
  );
};

export default CourseDetail;
