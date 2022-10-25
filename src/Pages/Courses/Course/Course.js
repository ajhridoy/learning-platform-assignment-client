import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Course = ({ course }) => {
  console.log(course);
  const { courseName, img, id } = course;
  return (
    <div className="p-10 w-full md:w-full">
      <div className="bg-white rounded-lg shadow-lg h-96 relative">
        <img
          src={img}
          alt=""
          className="rounded-t-lg h-2/3 w-full"
        />
        <div className="">
          <h2 className="font-bold mb-2 text-2xl text-purple-800 p-4">
            {courseName}
          </h2>
          <Link
            href="#"
            className="absolute bottom-0 w-full"
          >
            <button className="text-violate-400 hover:bg-emerald-500 font-medium text-sm bg-emerald-300 w-full rounded-b-lg p-3 flex items-center justify-center"><span>See Details</span><span className="ml-2"><FaArrowRight></FaArrowRight></span></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
