import React from "react";
import { FaCrown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import toast from 'react-hot-toast';

const Checkout = () => {
  const course = useLoaderData();
  const { name, img, details, videos } = course;
  return (
    <div className="bg-secondary p-10 rounded-xl w-4/5 mx-auto">
      <h1 className="text-3xl md:text-5xl">CheckOut</h1>
      <h1 className="text-2xl md:text-3xl mt-8"> {name}</h1>

      <br />
      <img src={img} className="w-1/2 mx-auto rounded-lg" alt="" />
      <p className="mt-8 text-1xl md:text-2xl">Total Videos: {videos}</p>
      <p className="mt-8 text-1xl md:text-2xl">{details}</p>
      <button className="btn btn-primary mt-6" onClick={() =>{toast.success(`Welcome to the ${name} course`)} }> Pay and get premium access? <FaCrown className="mx-3"/></button>

      
    </div>
  );
};

export default Checkout;
