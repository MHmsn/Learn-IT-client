import React from "react";
import { Link } from "react-router-dom";
import banner from '../../Assets/banner.jpg';

//home page

const Home = () => {
  return (
    <div>
        <h2 className="font-bold text-3xl text-primary"> Welcome to Learn IT! Home for Science and Computer Technology Courses!</h2>
        <Link to="/courses"><button className="btn btn-secondary my-5"> Get Started with Courses</button></Link>
        <img src={banner} className="my-10 rounded-lg mx-auto shadow-lg" alt="banner"/>
    </div>
  );
};

export default Home;
