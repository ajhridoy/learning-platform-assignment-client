import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Context API/UserAuth/UserAuth';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false)

    const handleLogOut = () => {
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
    return (
        <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to='/'>
                        <h2 className="text-2xl font-bold flex items-center"><span className='text-4xl'><FaGraduationCap></FaGraduationCap></span> <span className='ml-2'>Tech-Knowledge</span></h2>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center text-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <li className="text-gray-600 hover:text-orange-600 font-semibold">
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className="text-gray-600 hover:text-orange-600 font-semibold">
                            <Link to='/courses'>Courses</Link>
                        </li>
                        <li className="text-gray-600 hover:text-orange-600 font-semibold">
                            <Link to='/faq'>FAQ</Link>
                        </li>
                        <li className="text-gray-600 hover:text-orange-600 font-semibold">
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li className="font-semibold">
                            <button onClick={(e) => setToggle(!toggle)} className={toggle ? "bg-black text-white font-bold py-2 px-4 border border-orange-700 rounded" : "bg-white text-black font-bold py-2 px-4 border border-orange-700 rounded"}>
                                {toggle ? "Dark" : "Light"}
                                </button>
                        </li>
                        {
                            user?.uid ? 
                            <>
                            <li className='flex justify-center'><img title={user.displayName} className='rounded-full w-[50px]' src={user.photoURL} alt="" /></li>
                            <li><button onClick={handleLogOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Log Out</button></li>
                            </> 
                            :<li className="text-gray-600 hover:text-blue-600">
                            <Link to='signin'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Sign in</button></Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    </nav>
);
}

export default Header;