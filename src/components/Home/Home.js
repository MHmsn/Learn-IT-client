import React from "react";
import toast from 'react-hot-toast';
const Home = () => {
  return (
    <div>
        <button onClick={() => toast.success("hello")}>hello</button>
      
    </div>
  );
};

export default Home;
