"use client"
import useAuth from '@/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import {checkout} from '@/utils/checkout'
const MyPayments = () => {
	const { user } = useAuth();
	const [studentPaymentBooking, setStudentPaymentBooking] = useState([]);
	useEffect(() => {
		const fetchPaymentBooking = async () => {
		  try {
			const res = await fetch(
			  `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard/get-booking?student_email=${user?.email}&is_accepted=true`,
			  {
				cache: "no-store",
			  }
			);
			const data = await res.json();
			console.log(data);
			setStudentPaymentBooking(data);
		  } catch (error) {
			console.error("Error fetchHiredBooking data:", error);
		  }
		};
	
		fetchPaymentBooking();
	  }, [user?.email]);
	//   console.log(studentPaymentBooking);
	const paymentsData = [
		{
		  "tutor_name": "John Doe",
		  "tutor_email": "mamun.bbn.bd@gmail.com",
		  "subject": "Math",
		  "class_name": "Algebra 1",
		  "salary": 2000,
		  "payment_status": "Pending",
		  "month_name": "September",
		  "action": "Pay Now"
		},
		{
		  "tutor_name": "Jane Doe",
		  "tutor_email": "mamun.bbn.bd@gmail.com",
		  "subject": "English",
		  "class_name": "English 10",
		  "salary": 1500,
		  "payment_status": "Pending",
		  "month_name": "October",
		  "action": "Pay Now"
		},
		{
		  "tutor_name": "Peter Parker",
		  "tutor_email": "mamun.bbn.bd@gmail.com",
		  "subject": "Science",
		  "class_name": "Biology",
		  "salary": 2500,
		  "payment_status": "Pending",
		  "month_name": "November",
		  "action": "Pay Now"
		},
	  ]
	  

	return (
		<>
			<header>
				<h1 className="text-5xl text-teal-700 font-bold text-center mt-4 lg:mt-8">
					{/* <Fade duration={200} triggerOnce={true} cascade>Add a Tuition</Fade> */}
					<span>My Payments</span>
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
								Tutor&apos;s <br /> Name
							</th>
							<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
								Tutor&apos;s <br /> Email
							</th>
							<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
								Subject <br /> Name
							</th>
							<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
								Class <br /> Name
							</th>
							<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
								Salary <br /> (Per Month)
							</th>
							<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
								Payment <br /> Status
							</th>
							<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
								Month <br /> Name
							</th>
							<th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{
							paymentsData?.map((payment, index) => (
								<tr
								key={payment?._id}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
								 {index + 1}
								</td>
								<td className="px-2 py-2 border-r-2">
									{payment?.tutor_name}
								</td>
								<td className="px-2 py-2 border-r-2">
								{payment?.tutor_email}
								</td>
								<td className="px-2 py-2 border-r-2">
								{payment?.subject}
								</td>
								<td className="px-2 py-2 border-r-2">
								{payment?.class_name}
								</td>
								<td className="px-2 py-2 text-center border-r-2">
								{payment?.salary}
								</td>
								<td className="px-2 py-2 text-center uppercase border-r-2">
								Unpaid
								</td>
								<td className="px-2 py-2 text-center border-r-2">
									<select className="select select-sm !h-9 py-0 leading-none select-accent w-full min-w-[192px] max-w-[280px]"
									defaultValue="" 
									>
										<option value="">Select Month</option>
										<option value="January">January</option>
										<option value="February">February</option>
										<option value="March">March</option>
										<option value="April">April</option>
										<option value="May">May</option>
										<option value="June">June</option>
										<option value="July">July</option>
										<option value="August">August</option>
										<option value="September">September</option>
										<option value="October">October</option>
										<option value="November">November</option>
										<option value="December">December</option>
									</select>
								</td>
								<td className="px-2 py-2 text-center border-r-2">
									<button type="button" 
									onClick={(()=>{
										checkout(
										  {
											lineItems:[{price:"price_1NsdFNJeiBkN36n3ah91t7Uw",quantity:1}]
										  }
										)
									   })}
									className="flex w-28 mx-auto justify-center items-center text-white bg-gradient-to-br from-green-500 to-green-600 transition-all hover:duration-300 hover:from-green-600 hover:to-green-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={false} >
										<FaMoneyBill className='gr-icon w-4 h-4 mr-2' />
										Pay Now
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

export default MyPayments;