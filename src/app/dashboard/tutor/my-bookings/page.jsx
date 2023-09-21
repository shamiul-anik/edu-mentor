"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useTransition } from 'react';
import { GrValidate } from 'react-icons/gr';
import { LuShieldClose } from 'react-icons/lu';
import Swal from 'sweetalert2';

const MyBookings = () => {
	const { user } = useAuth();
	const [tutorBooking, setTutorBooking] = useState([]);
	const [isPending, startTransition] = useTransition()
  const router = useRouter();
	useEffect(() => {
		const fetchTutorBooking = async () => {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/get-booking?tutor_email=${user?.email}`,
					{
						cache: "no-store",
					}
				);
				const data = await res.json();
				console.log(data);
				setTutorBooking(data);
			} catch (error) {
				console.error("Error fetchStudentBooking data:", error);
			}
		};

		fetchTutorBooking();
	}, [user?.email]);
	console.log(tutorBooking)

	const handleAdminBtn= (id, value) => {
    // adminBtn(user, value);
    

  // console.log(user._id, value)

    const fetchAdminBtn = async () => {
		  try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/manageBooking?id=${id}&controlAdminBtn=${value}`, {
        method: "PATCH",
		cache: "no-store"
      });
      if (res.status === 200) {
        // Successful response, handle data accordingly
        // setAllUsers(data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "User Action successfully",
          showConfirmButton: false,
          timer: 1500
        })
        console.log("User admin action successfully")
        
      }
	  startTransition(()=>{
		console.log({router})
		router.refresh();
	  })
			const data = await res.json();

      // console.log(data)

			
		  } catch (error) {
			console.error('Error fetching adminAction btn:', error);
		   
		  }
		};
	
		fetchAdminBtn();
  }
	return (
		<>
			<header>
				<h1 className="text-5xl text-teal-700 font-bold text-center mt-4 lg:mt-8">
					{/* <Fade duration={200} triggerOnce={true} cascade>Add a Tuition</Fade> */}
					<span>My Bookings</span>
				</h1>
			</header>
			<section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

				{/* <div>
				<h1 className="text-3xl font-bold text-center mb-6">Total Enrolled Classes: {myEnrolledClasses?.length}</h1>
			</div> */}

				<div className="relative overflow-x-auto">
					<table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									#
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Student&apos;s <br /> Name
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Student&apos;s <br /> Email
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Phone <br /> Number
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Subject <br /> Name
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Class <br /> Name
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Student&apos;s Location
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Salary <br /> (Per Month)
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Tuition <br /> Days
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Verification <br /> Status
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{
								tutorBooking?.map((tbook, index) => (
									<tr
									key={tbook?._id}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
									<td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
										{index + 1}
									</td>
									<td className="px-2 py-2 border-r-2">
										{tbook?.student_name}
									</td>
									<td className="px-2 py-2 border-r-2">
									{tbook?.student_email}
									</td>
									<td className="px-2 py-2 border-r-2">
									{tbook?.student_mobile_number}
									</td>
									<td className="px-2 py-2 border-r-2">
									{tbook?.subject}
									</td>
									<td className="px-2 py-2 border-r-2">
									{tbook?.student_class}
									</td>
									<td className="px-2 py-2 border-r-2">
									{tbook?.student_location}
									</td>
									<td className="px-2 py-2 text-center border-r-2">
									{tbook?.salary}
									</td>
									<td className="px-2 py-2 text-center border-r-2">
									{tbook?.available_days}
									</td>
									<td className="px-2 py-2 text-center border-r-2">
										
										{  tbook?.isAccepted == null ? "pending" :  tbook?.isAccepted == false ? "Rejected" : tbook?.isAccepted == true ? "Accepted" : ""}
									</td>
									<td className="px-2 py-2 text-center border-r-2">
										<button onClick={()=>handleAdminBtn(tbook?._id, 'approve')} type="button" className="flex w-40 mx-auto justify-center items-center text-white bg-gradient-to-br from-green-500 to-green-600 transition-all hover:duration-300 hover:from-green-600 hover:to-green-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={tbook?.isAccepted} >
											<GrValidate className='gr-icon w-4 h-4 mr-2' />
											Approve
										</button>
										<button onClick={()=>handleAdminBtn(tbook?._id, 'deny')} type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700"  disabled={(tbook?.isAccepted) ? false : true} >
											<LuShieldClose className='gr-icon w-4 h-4 mr-2' />
											Deny
										</button>
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

export default MyBookings;