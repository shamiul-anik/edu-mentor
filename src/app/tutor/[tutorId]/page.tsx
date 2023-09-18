
import { Tuition } from '@/typeScript/tuitionsType';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import BookingForm from "@/app/tutors/BookingForm"
import getTuitions from "@/utils/getTuitions"

import Link from 'next/link';
import TuitionsCard from '@/app/tutors/TuitionsCard';
// import useAuth from '@/hooks/useAuth';

const singlePage: React.FC<{ params: { tutorId: string } }> = async ({ params: { tutorId } }) => {

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors/${tutorId}`, {
		cache: 'no-store'
	})
	const singleTutor = await res.json();
	const { _id, displayName, mobileNumber, location, gender, qualification, isVerified, students, ratings, email, photoURL, role } = singleTutor || {};
 
	
		const allTuitions = await getTuitions(email)
	
		
	
	// console.log("single Page Tuitions",allTuitions)
	return (
		<>
			<div className='md:flex flex-row justify-center'>
				<div className="m-10 w-1/2 bg-white ">
					<h3 className="text-3xl text-white p-1 font-bold divide-x-2 divide-neutral-900 mb-4  bg-gradient-to-r from-[#29A2AA] to-[#c0332e] ">Tutor Profile</h3>

					<div className="border border-gray-200 rounded-lg shadow">
						<a href="#" className="flex flex-col w-full items-center md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
							<Image width={190} height={256} className="object-cover w-full shadow-2xl md:h-auto " src={photoURL} alt="" />
							<div className=" w-full leading-normal">
								{/* <div className="mb-2  ">
			<span>Name:</span>
			
			<span>ID#:</span>
			<span>Gender:</span>
			<p>Area Covered:</p>
			<p>Tutor Location:</p>
			 </div> */}
								<div className="mb-2 ml-4 dark:text-white">
									<p>
										<span className='pr-4'>Name:</span>
										<span className="font-bold tracking-tight text-gray-900"> {displayName}</span>
									</p>
									<p>
										<span className='pr-4'>Gender:</span>
										<span className="font-bold tracking-tight text-gray-900">{gender}</span>
									</p>
									<hr className="mt-4 mb-4 border-1 border-slate-900" />
									<p>
										<span className="pr-4 font-bold tracking-tight text-gray-900">Area Covered:</span>  
										  <span>
											{location}
										  </span>
									</p>
									
								</div>
							</div>
						</a>

					</div>

				</div>
				<div className=" mt-10 mb-10 w-1/2">
					<BookingForm id={_id} />
				</div>
			</div>


			<section className="max-w-7xl mx-auto lg:mt-32 p-4 md:px-0">
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
					{allTuitions.map((tuition: Tuition) => 
						
							<TuitionsCard 
							 key={tuition?._id}
							 data= {tuition}
							 />
					
					)}
				</div>
			</section>
		</>
	);
};

export default singlePage;