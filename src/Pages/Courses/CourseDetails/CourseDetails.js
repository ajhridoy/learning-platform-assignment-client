import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFilePdf, FaArrowRight } from "react-icons/fa";

const CourseDetails = () => {
  const singleCourse = useLoaderData();
  console.log(singleCourse)
  const {img, courseName, desc, id, instractor} = singleCourse
  return (
    <div className="my-8">
      <div class="max-w-lg rounded overflow-hidden shadow-lg bg-gray-200 mx-auto">
          <div className="flex items-center justify-between">
            <h1 class="font-bold px-6 py-4 text-xl mb-2">{courseName}</h1>
            <button className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center mr-2"><span>Download </span><span><FaFilePdf></FaFilePdf></span></button>
          </div>
        <img class="w-full h-[400px]" src={img} alt="Mountain" />
        <div class="px-6 py-4">
          <p class="text-amber-700 text-base">
           {desc}
          </p>
        </div>
          <p className="font-mono mb-3 px-6"><span className="font-bold">Course Instructor:</span> {instractor}</p>
        <Link
            to={`/course/${id}`}
            className="w-full"
          >
            <button className="text-violate-400 hover:text-white hover:bg-emerald-500 font-medium text-sm bg-emerald-300 w-full rounded-b-lg p-3 flex items-center justify-center"><span>Get Premium Access</span><span className="ml-2"><FaArrowRight></FaArrowRight></span></button>
          </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
