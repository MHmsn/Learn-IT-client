import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Courses = () => {
  const categories = useLoaderData();
  return (
    <div className="mx-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
      <div className="flex flex-col p-5">
        {categories.map((category) => (
          <Link
            to={`/courses/${category.id}`}
            key={category.id}
            className="btn btn-secondary my-2"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className=" col-span-3 lg:col-span-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Courses;
