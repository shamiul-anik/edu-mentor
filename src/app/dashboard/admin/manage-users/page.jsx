"use client"
import { Fade } from "react-awesome-reveal";
// import { useQuery } from "@tanstack/react-query";
// import SingleUser from "./SingleUser";
// import Swal from "sweetalert2";
// import { useTitle } from "../../../../hooks/useTitle";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import useAuth from "../../../../hooks/useAuth";
import Link from "next/link";
import { GrUserAdmin } from 'react-icons/gr';
import { GrValidate } from "react-icons/gr";
import { LuShieldClose } from "react-icons/lu";
import { FaChalkboardTeacher } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

import adminBtn from "@/utils/dashboard/adminBtn"

const ManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const { user, loading, userRole, setUserRole } = useAuth();
	
	useEffect(() => {
		const fetchAllUsers = async () => {
		  try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-user`,
			{
			  cache: 'no-cache'
			});
			const data = await res.json();
			setAllUsers(data);
		  } catch (error) {
			console.error('Error fetching All userdata:', error);
		   
		  }
		};
	
		fetchAllUsers ();
	  }, []);
    // console.log(allUsers);

  const role ={userRole};
  const isVerified = false;
  // const { user, setUserRole, loading, setLoading } = useAuth();

  // // const [disableInstructorBtn, setDisableInstructorBtn] = useState(false);
  // // const [disableAdminBtn, setDisableAdminBtn] = useState(false);
  // const [axiosSecure] = useAxiosSecure();

  // // TODO: Change to AxiosSecure
  // const { data: usersData = [], refetch } = useQuery({
  //   queryKey: ["usersData", user?.email],
  //   enabled: !loading,
  //   queryFn: async () => {
  //     // const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
  //     const res = await axiosSecure.get(`/admin/manage-users`);
  //     // console.log(res);
  //     setLoading(false);
  //     return res?.data;
  //   },
  // })

  // const handleMakeInstructor = (userInfo) => {
  //   console.log("Inside Make Instructor: ", user._id);
  //   if (userInfo) {
  //     axiosSecure.patch(`/admin/make-instructor/${userInfo._id}`).then(
  //       (data) => {
  //         // console.log("Data:", data?.data);
  //         if (data?.data.modifiedCount) {
  //           if (user?.email === userInfo.email) {
  //             setUserRole("instructor");
  //           }
  //           refetch();
  //           // setDisableInstructorBtn(true);
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: `${userInfo.name} is an Instructor Now!`,
  //             showConfirmButton: false,
  //             timer: 3000
  //           });
  //         }
  //       }
  //     );
  //   }
  // };
  
  // const handleMakeAdmin = (userInfo) => {
  //   console.log("Inside Make Admin: ", user._id);
  //   if (userInfo) {
  //     axiosSecure.patch(`/admin/make-admin/${userInfo._id}`).then(
  //       (data) => {
  //         // console.log("Data:", data?.data);
  //         if(data?.data.modifiedCount) {
  //           if (user?.email === userInfo.email) {
  //             setUserRole("admin");
  //           }
  //           refetch();
  //           // setDisableAdminBtn(true);
  //           // toast.success(`${user.name} is an Admin now!`);
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: `${userInfo.name} is an Admin Now!`,
  //             showConfirmButton: false,
  //             timer: 3000
  //           });
  //         }
  //       }
  //     );
  //   }
  // };
 
  const handleAdminBtn= (user, value) => {
    adminBtn(user, value);
  // console.log(user._id, value)

  //   const fetchAdminBtn = async () => {
	// 	  try {
	// 		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/admin?id=${user?._id}&controlAdminBtn=${value}`, {
  //       method: "PATCH",
  //     },
	// 		{
	// 		  cache: 'no-store'
	// 		});
  //     if (res.status === 200) {
  //       // Successful response, handle data accordingly
  //       // setAllUsers(data);
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: "User Action successfully",
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //       console.log("User admin action successfully")
        
  //     }
	// 		const data = await res.json();
  //     console.log(data)

			
	// 	  } catch (error) {
	// 		console.error('Error fetching All userdata:', error);
		   
	// 	  }
	// 	};
	
	// 	fetchAdminBtn();
  }
  return (
    <>
      <header>
        <h1 className="text-5xl text-teal-700 font-bold text-center mt-4 lg:mt-8">
          <Fade duration={200} triggerOnce={true} cascade>Manage Users</Fade>
        </h1>
      </header>

      <section className="max-w-full mx-auto mt-6 lg:mt-12 p-4 md:px-0">
        
        {/* <div>
          <h1 className="text-3xl font-bold text-center mb-6">Total Users: {usersData.length}</h1>
        </div> */}

        <div className="relative overflow-x-auto">
          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  #
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Photo
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Email
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Mobile No.
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Gender
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Qualification
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Location
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Role
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Verification <br />Status
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {
                usersData?.map((user, index) => <SingleUser key={user._id} user={user} index={index} handleMakeInstructor={handleMakeInstructor} handleMakeAdmin={handleMakeAdmin}></SingleUser>)
              } */}
              {
                allUsers?.map((user, index) => (
                  <tr
                  key={user?._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
                    {index + 1}
                  </td>
                  <td className="px-2 py-2 text-center border-r-2">
                    <div className="avatar flex items-center justify-center">
                      <div className="w-24 rounded-xl">
                        <Image width={64} height={64} src={user?.photoURL} alt="user image"/>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-center border-r-2">
                    {user?.displayName}
                  </td>
                  <td className="px-2 py-2 text-center border-r-2">
                    {user?.email}
                  </td>
                  <td className="px-2 py-2 text-center uppercase border-r-2">
                    {user?.phoneNumber}
                  </td>
                  <td className="px-2 py-2 text-center uppercase border-r-2">
                    {user?.gender}
                  </td>
                  <td className="px-2 py-2 text-center uppercase border-r-2">
                    {user?.qualification}
                  </td>
                  <td className="px-2 py-2 text-center uppercase border-r-2">
                    {user?.location}
                  </td>
                  <td className="px-2 py-2 text-center uppercase border-r-2">
                    {user?.role}
                  </td>
                  <td className="px-2 py-2 text-center uppercase border-r-2">
                  {(user?.isVerified == true) ? <span className= "text-green-700">true</span> : <span className="text-red-700"> false</span>}
                  </td>
                  <td className="px-2 py-2 text-center">
                    <button onClick={()=>handleAdminBtn(user, 'approve')} type="button" className="flex w-40 mx-auto justify-center items-center text-white bg-gradient-to-br from-green-500 to-green-600 transition-all hover:duration-300 hover:from-green-600 hover:to-green-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={user?.isVerified} >
                      <GrValidate className='gr-icon w-4 h-4 mr-2' />
                      Approve
                    </button>
                    <button onClick={()=>handleAdminBtn(user, 'deny')} type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={(user?.isVerified) ? false : true}>
                      <LuShieldClose className='gr-icon w-4 h-4 mr-2' />
                      Deny
                    </button>
                    {/* <Link> */}
                    <button onClick={()=>handleAdminBtn(user, 'tutor')} type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-teal-500 to-teal-600 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={(user?.role == "tutor") ? true : false}>
                        <FaChalkboardTeacher className='w-4 h-4 mr-2' />
                        Make Tutor
                      </button>
                    {/* </Link> */}
                    {/* <Link> */}
                      <button onClick={()=>handleAdminBtn(user, 'admin')} type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={(user?.role == "admin") ? true : false}>
                        <GrUserAdmin className='gr-icon w-4 h-4 mr-2' />
                        Make Admin
                      </button>
                    {/* </Link> */}
                  </td>
                </tr>
                ))
              }

            </tbody>
          </table>
        </div>

      </section>
    </>
  );
};

export default ManageUsers;