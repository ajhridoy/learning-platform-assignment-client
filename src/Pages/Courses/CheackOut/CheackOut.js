import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context API/UserAuth/UserAuth';

const CheackOut = () => {
    const {user} = useContext(AuthContext)
    const accessCourse = useLoaderData()
    const {id, courseName} = accessCourse
    return (
        <div className='my-10'>
            <h2 className='text-4xl font-bold font-mono text-center mb-4'>Congratulation <span className='text-red-700'>{user.displayName}</span>...!!!</h2>
            <h3 className='text-2xl font-semibold text-center mb-2'>You Get Premium Access On <Link to={`/course/${id}`}><span className='text-orange-500 font-bold text-3xl underline'>{courseName}</span></Link> Course</h3>
            <p className='text-xl font-medium text-center'>Keep learning...Keep Coading</p>
        </div>
    );
};

export default CheackOut;