import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div className='flex'>
            <div className='flex-1 flex-auto w-6/12 md:w-8/12'>
                <div className='p-6'>
                    <h2 className='text-3xl font-bold font-mono text-center'>Courses of Information Technology</h2>
                    <p className='text-center mt-3 text-lg font-mono'>IT field is one that overlaps with any number of other computer science subject areas. Therefore, anyone seriously thinking about the computer science profession will find IT a good place to start his or her career research. To learn more about information technology, enrolling courses on the below.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
            <div className='flex-1 flex-col w-6/12 md:w-4/12 bg-emerald-300 relative'>
                <div className='sticky top-0'>
                <h2 className='text-xl font-semibold my-8 text-center underline'>Our Courses:</h2>
                <div>
                    {
                        courses.map(course => <Link key={course.id}><div className='bg-gray-500 hover:bg-gray-700 text-white mb-3 mx-3 text-center p-3 rounded-lg font-medium'>{course.courseName}</div></Link>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;