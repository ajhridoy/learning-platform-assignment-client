import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context API/UserAuth/UserAuth';

const Signup = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value
    const photourl = form.photourl.value
    const email = form.email.value
    const password = form.password.value
    // console.log(firstName, lastName, photourl, email, password)
    createUser(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      toast.success('Sign Up Successfully')
      form.reset()
      //update name and image
      updateUserProfile(name, photourl)
      .then(() => {

      }).catch((error) => {
        setError(error.message)
      });
    })
    .catch((error) => {
      setError(error.message);
    });
  }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-gray-100 rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="photourl"
              className="block text-sm font-semibold text-gray-800"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photourl"
              placeholder="Photo URL"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <p className='text-red-500 font-medium'>{error}</p>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Sign Up
            </button>
          </div>
        </form>
        <p className="mt-8 text-sm font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
           to='/signin' className="font-medium text-purple-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Signup;