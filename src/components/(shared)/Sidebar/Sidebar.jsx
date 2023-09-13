"use client"
import { useEffect, useState } from 'react'
import Aos from 'aos';
// import { Fade } from "react-awesome-reveal";
import Logo from '../../../assets/images/logo.png';
import UserImage from '../../../assets/images/user.png'
import { BsBookFill, BsBookmarkCheckFill, BsPerson } from 'react-icons/bs'
import { BiDetail, BiHome, BiLogOut } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';
import { GiTeacher } from 'react-icons/gi';
import { LuContact } from 'react-icons/lu';
import { FaBook, FaBookMedical, FaChalkboardTeacher, FaCheckDouble, FaMoneyCheck, FaUserCheck, FaWallet } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';
// import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { usePathname, useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';

const Sidebar = () => {
  const { user, loading, setLoading, logOut, userRole } = useAuth();
  console.log(user);
  const [isActive, setActive] = useState(false);
  const { replace, refresh } = useRouter();

  const userEmail = user?.email;
  console.log(userEmail);
  console.log(userRole);

  useEffect(async () => {
    Aos.init({ duration: 1000 });
     
  }, []);

  // }, []);
  // const userRole = userData?.role;
  // const userRole = "tutor";




  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-teal-50 text-teal-700 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link href="/" className="flex gap-3 md:gap-3 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-teal-600 hover:bg-inherit">
              <Image className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-teal-700" width={40} height={40} src={Logo} alt="Logo" />
              <span className='animate-pulse flex items-center text-xl md:text-3xl'>
                {/* <Fade duration={300} triggerOnce={true} cascade>EduMentor</Fade> */}
                EduMentor
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
        ${isActive && '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className='w-full hidden md:flex py-4 justify-center items-center bg-teal-100 mx-auto'>
              <Link href="/" className="flex gap-3 md:gap-3 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-teal-600 hover:bg-inherit">
                <Image className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-teal-700" width={40} height={40} src={Logo} alt="Logo" />
                <span className='flex items-center text-lg md:text-xl'>
                  {/* <Fade duration={300} triggerOnce={true} cascade>Language School</Fade> */}
                  EduMentor
                </span>
              </Link>
            </div>
            <div className='flex flex-col items-center mt-6 -mx-2'>
              <Link href='/dashboard'>
                {
                  user?.photoURL ?
                    <Image
                      className='object-cover w-24 h-24 mx-2 rounded-full border border-teal-400 ring-2 ring-offset-1 ring-teal-500'
                      src={user?.photoURL}
                      alt='avatar'
                      // referrerPolicy='no-referrer'
                      // data-aos="zoom-in"
                      width={40}
                      height={40}
                    />
                    :
                    <Image
                      className='object-cover w-24 h-24 mx-2 rounded-full border border-teal-400 ring-2 ring-offset-1 ring-teal-500'
                      src={UserImage}
                      alt='avatar'
                      // referrerPolicy='no-referrer'
                      // data-aos="zoom-in"
                      width={40}
                      height={40}
                    />
                }
              </Link>
              <Link href='/dashboard'>
                <h4 className='mx-2 mt-3 font-medium text-gray-800  hover:underline'>
                  {user?.displayName}
                </h4>
              </Link>
              <Link href='/dashboard'>
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

                {/* Student */}
                {
                  userRole === "student" &&
                  <>
                    {/* <Link
                      href='/dashboard/my-selected-classes'
                      className={({ isActive }) =>
                        `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <FaCheckDouble className='w-5 h-5' />
                      <span className='mx-4 font-medium'>My Selected Classes</span>
                    </Link> */}
                    <Link
                      href='/dashboard/student/hired-tutors'
                      className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <FaMoneyCheck className='w-5 h-5' />
                      <span className='mx-4 font-medium'>Hired Tutors</span>
                    </Link>
                    <Link
                      href='/dashboard/student/payment-history'
                      className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <FaWallet className='w-5 h-5' />
                      <span className='mx-4 font-medium'>Payment History</span>
                    </Link>
                  </>
                }


                {/* Tutor */}
                {
                  userRole === "tutor" &&
                  <>
                    <Link
                      href='/dashboard/tutor/add-a-tuition'
                      className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <FaBookMedical className='w-5 h-5' />
                      <span className='mx-4 font-medium'>Add a Tuition</span>
                    </Link>
                    <Link
                      href='/dashboard/tutor/my-students'
                      className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <FaBook className='w-5 h-5' />
                      <span className='mx-4 font-medium'>My Students</span>
                    </Link>
                    <Link
                      href='/dashboard/tutor/my-bookings'
                      className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <FaBook className='w-5 h-5' />
                      <span className='mx-4 font-medium'>My Bookings</span>
                    </Link>
                  </>
                }


                {/* Admin */}
                {
                  userRole === "admin" &&
                  <>
                    <Link
                      href='/dashboard/admin/manage-tutors'
                      className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <BsBookmarkCheckFill className='w-5 h-5' />
                      <span className='mx-4 font-medium'>Manage Tutors</span>
                    </Link>
                    <Link
                      href='/dashboard/admin/manage-students'
                      className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <BsBookFill className='w-5 h-5' />
                      <span className='mx-4 font-medium'>Manage Students</span>
                    </Link>
                    <Link
                      href='/dashboard/admin/manage-users'
                      className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
                      }
                    >
                      <FaUserCheck className='w-5 h-5' />
                      <span className='mx-4 font-medium'>Manage Users</span>
                    </Link>
                  </>
                }

              </>
            </nav>
          </div>
        </div>

        <div>
          <div className="divider my-2"></div>
          <Link
            href='/'
            className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <BiHome className='w-5 h-5' />
            <span className='mx-4 font-medium'>Home</span>
          </Link>
          <Link
            href='/tutors'
            className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <FaChalkboardTeacher className='w-5 h-5' />
            <span className='mx-4 font-medium'>Tutors</span>
          </Link>
          <Link
            href='/students'
            className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <GiTeacher className='w-5 h-5' />
            <span className='mx-4 font-medium'>Students</span>
          </Link>
          <Link
            href='/contact'
            className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <LuContact className='w-5 h-5' />
            <span className='mx-4 font-medium'>Contact</span>
          </Link>
          <Link
            href='/about'
            className={`flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <BiDetail className='w-5 h-5' />
            <span className='mx-4 font-medium'>About</span>
          </Link>
          {/* <Link
            href='/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 transition-colors duration-300 transform hover:bg-teal-200 hover:text-teal-700 ${isActive ? 'bg-teal-200 text-teal-700' : 'text-teal-600'}`
            }
          >
            <ImProfile className='w-5 h-5' />
            <span className='mx-4 font-medium'>Profile</span>
          </Link> */}
          <button
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
