import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';

const MyPayments = () => {

	return (
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
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
								1
							</td>
							<td className="px-2 py-2 border-r-2">
								James Patterson
							</td>
							<td className="px-2 py-2 border-r-2">
								patterson@gmail.com
							</td>
							<td className="px-2 py-2 border-r-2">
								English
							</td>
							<td className="px-2 py-2 border-r-2">
								Ten
							</td>
							<td className="px-2 py-2 text-center border-r-2">
								5000
							</td>
							<td className="px-2 py-2 text-center uppercase border-r-2">
								Unpaid
							</td>
							<td className="px-2 py-2 text-center border-r-2">
								<select className="select select-sm !h-9 py-0 leading-none select-accent w-full max-w-[280px]">
									<option disabled selected>Select Month</option>
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
								<button type="button" className="flex w-28 mx-auto justify-center items-center text-white bg-gradient-to-br from-green-500 to-green-600 transition-all hover:duration-300 hover:from-green-600 hover:to-green-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={false} >
									<FaMoneyBill className='gr-icon w-4 h-4 mr-2' />
									Pay Now
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

		</section>
	);
};

export default MyPayments;