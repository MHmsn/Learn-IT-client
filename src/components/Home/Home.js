import React from "react";
import { Link } from "react-router-dom";

//home page

const Home = () => {
  return (
    <div>
        <h2 className="font-bold text-3xl text-primary"> Welcome to Learn IT! Home for Science and Computer Technology Courses!</h2>
        <Link to="/courses"><button className="btn btn-secondary my-5"> Get Started with Courses</button></Link>
        <img src="https://thumbs.dreamstime.com/b/science-technology-engineering-math-concept-outline-blue-banner-dark-background-vector-illustration-stem-151274081.jpg" className="my-10 rounded-lg mx-auto shadow-lg" alt="banner"/>
    </div>
  );
};

export default Home;
