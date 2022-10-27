import { createRef } from "react";
import { React } from "react";
import { FaCrown } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";

const CourseDetail = () => {
  const course = useLoaderData();
  const { name, img, details, videos, id, price } = course;
  const ref = createRef();
  const options = {
    orientation: "landscape"
  };

  return (
    <div className="bg-secondary p-10 rounded-lg" ref={ref}>
      <h1 className="text-5xl"> {name}</h1>
      <div className=" text-end">
        <ReactToPdf targetRef={ref} filename={`${name}.pdf`} options={options} x={.5} y={.5} scale={0.8}>
          {({ toPdf }) => (
            <button className="btn btn-primary my-3" onClick={toPdf}>
              Download
            </button>
          )}
        </ReactToPdf>
      </div>
      <br />
      <img src={img} className="w-1/2 mx-auto rounded-lg" alt="" />
      <p className="mt-8 text-2xl">Total Videos: {videos}</p>
      <p className="mt-8 text-xl">Price: {price}</p>
      <p className="mt-8 text-2xl">{details}</p>
      <div className="mt-8">
        <Link to={`/courses/course-${id}/checkout`}>
          <button className="btn btn-primary">
            Get Premium Access <FaCrown />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
