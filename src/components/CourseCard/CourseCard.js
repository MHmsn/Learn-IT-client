import React from "react";

const CourseCard = ({course}) => {
  const { name, img, details} = course;

  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-68 md:h-52 lg:h-44" alt="Course Banner" />
        </figure>
        <div className="card-body bg-secondary">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="mt-4">{details}</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
