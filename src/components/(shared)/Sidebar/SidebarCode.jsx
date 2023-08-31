"use client"

import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Aos from 'aos';
import { Fade } from "react-awesome-reveal";
import Logo from '../../../assets/images/logo.png';
import UserImage from '../../../assets/images/user.png'
import { BsBookmarkCheckFill } from 'react-icons/bs'
import { toast } from 'react-toastify';
import { BiDetail, BiHome, BiLogOut } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { GiTeacher } from 'react-icons/gi';
import { LuContact } from 'react-icons/lu';
import { FaBook, FaBookMedical, FaChalkboardTeacher, FaCheckDouble, FaMoneyCheck, FaUserCheck, FaWallet } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';
import useAuth from '../../../hooks/useAuth';
import Image from 'next/image';

const Sidebar = () => {
  
  const { user, userRole, setUserRole, loading, setLoading, logOut } = useAuth();
  const navigate = useNavigate();
  const [isActive, setActive] = useState('false');

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out!");
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      })
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-teal-50 text-teal-700 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to="/" className="flex gap-3 md:gap-3 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-teal-600 hover:bg-inherit">
              <Image className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-teal-700" src={Logo} alt="Logo" />
              <span className='flex items-center text-xl md:text-3xl'>
                <Fade duration={300} triggerOnce={true} cascade>Language School</Fade>
              </span>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-teal-100'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-start overflow-x-hidden bg-teal-50 w-72 space-y-2 pt-0 pb-4 absolute inset-y-0 left-0 transform 
        ${ isActive && '-translate-x-full' } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className='w-full hidden md:flex py-4 justify-center items-center bg-teal-100 mx-auto'>
              <Link to="/" className="flex gap-3 md:gap-3 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-teal-600 hover:bg-inherit">
                <Image className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-teal-700" src={Logo} alt="Logo" />
                <span className='flex items-center text-lg md:text-xl'>
                  <Fade duration={300} triggerOnce={true} cascade>Language School</Fade>
                </span>
              </Link>
            </div>
            <div className='flex flex-col items-center mt-6 -mx-2'>
              <Link to='/dashboard'>
                {
                  user?.photoURL ?
                    <Image
                      className='object-cover w-24 h-24 mx-2 rounded-full border border-teal-400 ring-2 ring-offset-1 ring-teal-500'
                      src={user?.photoURL}
                      alt='avatar'
                      referrerPolicy='no-referrer'
                      data-aos="zoom-in"
                    />
                    :
                    <Image
                      className='object-cover w-24 h-24 mx-2 rounded-full border border-teal-400 ring-2 ring-offset-1 ring-teal-500'
                      src={UserImage}
                      alt='avatar'
                      referrerPolicy='no-referrer'
                      data-aos="zoom-in"
                    />
                }
              </Link>
              <Link to='/dashboard'>
                <h4 className='mx-2 mt-3 font-medium text-gray-800  hover:underline'>
                  {user?.displayName}
                </h4>
              </Link>
              <Link to='/dashboard'>
                <p className='mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline'>
                  {user?.email}
                </p>
              </Link>
              {
                userRole && <p className="uppercase mt-3 px-5 py-0.5 text-sm bg-teal-300 w-fit mx-auto rounded-xl" data-aos="zoom-out">{userRole}</p>
              }
            </div>
          </div>
          <div className="divider mt-4 mb-2"></div>
          {/* Nav Items */}
          <div className='flex flex-col justify-start flex-1'>
            <nav>
              <>
                {/* Dashboard Menu Links */}
                {/* <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                  }
                >
                  <FaBookOpen className='w-5 h-5' />
                  <span className='mx-4 font-medium'>Dashboard</span>
                </NavLink> */}
                
                {/* Student */}
                { 
                  userRole === "student" && 
                    <>
                      <NavLink
                        to='/dashboard/my-selected-classes'
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                        }
                      >
                        <FaCheckDouble className='w-5 h-5' />
                        <span className='mx-4 font-medium'>My Selected Classes</span>
                      </NavLink>
                      <NavLink
                        to='/dashboard/my-enrolled-classes'
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                        }
                      >
                        <FaMoneyCheck className='w-5 h-5' />
                        <span className='mx-4 font-medium'>My Enrolled Classes</span>
                      </NavLink>
                      <NavLink
                        to='/dashboard/my-payment-history'
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                        }
                      >
                        <FaWallet className='w-5 h-5' />
                        <span className='mx-4 font-medium'>My Payment History</span>
                      </NavLink>
                    </>
                }
                
                
                {/* Instructor */}
                {
                  userRole === "instructor" &&
                    <>
                      <NavLink
                        to='/dashboard/add-a-class'
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                        }
                      >
                        <FaBookMedical className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Add a Class</span>
                      </NavLink>
                      <NavLink
                        to='/dashboard/my-classes'
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                        }
                      >
                        <FaBook className='w-5 h-5' />
                        <span className='mx-4 font-medium'>My Classes</span>
                      </NavLink>
                    </>
                }
                
                
                {/* Admin */}
                {
                  userRole === "admin" &&
                    <>
                      <NavLink
                        to='/dashboard/manage-classes'
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                        }
                      >
                        <BsBookmarkCheckFill className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Manage Classes</span>
                      </NavLink>
                      <NavLink
                        to='/dashboard/manage-users'
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                        }
                      >
                        <FaUserCheck className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Manage Users</span>
                      </NavLink>
                    </>
                }
                                
              </>
            </nav>
          </div>
        </div>

        <div>
          <div className="divider my-2"></div>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <BiHome className='w-5 h-5' />
            <span className='mx-4 font-medium'>Home</span>
          </NavLink>
          <NavLink
            to='/instructors'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <FaChalkboardTeacher className='w-5 h-5' />
            <span className='mx-4 font-medium'>Instructors</span>
          </NavLink>
          <NavLink
            to='/classes'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <GiTeacher className='w-5 h-5' />
            <span className='mx-4 font-medium'>Classes</span>
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <LuContact className='w-5 h-5' />
            <span className='mx-4 font-medium'>Contact</span>
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <BiDetail className='w-5 h-5' />
            <span className='mx-4 font-medium'>About</span>
          </NavLink>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <ImProfile className='w-5 h-5' />
            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-2 text-red-600 hover:bg-red-200 hover:text-red-700 transition-colors duration-300 transform'
          >
            <BiLogOut className='w-5 h-5' />
            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
