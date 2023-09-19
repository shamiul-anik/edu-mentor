"use client"
import React, { useEffect, useState } from 'react';
import { GrValidate } from 'react-icons/gr';
import { LuShieldClose } from 'react-icons/lu';

const BookedTutors = () => {
	// const [bookingData, setBookingData] = useState([])
	// useEffect(()=>{
	// 	const getBookingData = async () =>{
	// 		const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/booking`)
	// 		const data = res.json();
	// 		console.log(data);
	// 	}
	// }, [])
	return (
		<>
			<header>
				<h1 className="text-5xl text-teal-700 font-bold text-center mt-4 lg:mt-8">
					{/* <Fade duration={200} triggerOnce={true} cascade>Add a Tuition</Fade> */}
					<span>Booked Tutors</span>
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
									Name
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Email
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Mobile Number
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Subject <br /> Name
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Class <br /> Name
								</th>
								<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
									Location
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
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
									1
								</td>
								<td className="px-2 py-2 border-r-2">
									Abu Haidar
								</td>
								<td className="px-2 py-2 border-r-2">
									haidar@gmail.com
								</td>
								<td className="px-2 py-2 border-r-2">
									01712345678
								</td>
								<td className="px-2 py-2 border-r-2">
									English
								</td>
								<td className="px-2 py-2 border-r-2">
									Ten
								</td>
								<td className="px-2 py-2 border-r-2">
									Gulshan-1
								</td>
								<td className="px-2 py-2 text-center border-r-2">
									5000
								</td>
								<td className="px-2 py-2 text-center border-r-2">
									Available days are Monday, Wednesday and Friday.
								</td>
								<td className="px-2 py-2 text-center border-r-2">
									Pending 
									{/* If isAccepted == null, then the status is pending. If isAccepted == false, then the status is Rejected. If isAccepted == true, then Accepted. */}
								</td>
							</tr>

						</tbody>
					</table>
				</div>

			</section>
			
		</>
		
	);
};

export default BookedTutors;