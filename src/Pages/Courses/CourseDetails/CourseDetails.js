import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFilePdf, FaArrowRight } from "react-icons/fa";
import Pdf from "react-to-pdf"

const CourseDetails = () => {
  const singleCourse = useLoaderData();
  console.log(singleCourse)
  const {img, courseName, desc, id, instractor} = singleCourse
  const ref = React.createRef()
  return (
    <div className="my-8">
      <div className="flex justify-center items-center mb-3">
        <div className="text-center mr-3 p-2">
        <h1 className="text-2xl font-semibold">See course details or download details PDF</h1>
        <p className="font-mono mt-2">Here is a detailed discussion of what to learn in each course.<br/> Plus there's Premium Access Now to explore more features in this course</p>
        </div>

        <div className="">
        <Pdf targetRef={ref} filename="course-details.pdf">
          {({toPdf}) =>(

        <button onClick={toPdf} title="Download Course PDF" className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded flex items-center mr-2"><span>Download </span><span><FaFilePdf></FaFilePdf></span></button>
          )}
        </Pdf>
        </div>
      </div>
     <div className="max-w-lg rounded overflow-hidden shadow-lg bg-gray-200 mx-auto">
        <img className="w-full h-[400px]" src={img} alt="Mountain" />

          <div className="px-6 py-4" ref={ref}>
              <h1 className="font-bold py-4 text-2xl mb-2">{courseName}</h1>
            <p className="text-amber-700 text-base font-medium">{desc}</p>
            <p className="font-mono mb-3 mt-3"><span className="font-bold">Course Instructor:</span> {instractor}</p>
          </div>

        <Link
            to={`/cheackout/${id}`}
            className="w-full"
          >
            <button className="text-violate-400 hover:text-white hover:bg-emerald-500 font-medium text-sm bg-emerald-300 w-full rounded-b-lg p-3 flex items-center justify-center"><span>Get Premium Access</span><span className="ml-2"><FaArrowRight></FaArrowRight></span></button>
          </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
