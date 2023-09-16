
import { Tutor } from '@/typeScript/tutorType';
import Image from "next/image";
import React from 'react';
import BookingForm from "@/app/tutors/BookingForm"
import Link from 'next/link';

const singlePage: React.FC<{ params: { tutorId: string } }> = async ({ params: { tutorId } }) => {

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors/${tutorId}`, {
		cache: 'no-cache'
	})
	const singleTutor = await res.json();
	const { image_url, name, id, tuition_info, area_covered, gender } = singleTutor || {};
	return (
		<>
			<div className='md:flex flex-row justify-center'>
				<div className="m-10 w-1/2 bg-white ">
					<h3 className="text-3xl text-white p-1 font-bold divide-x-2 divide-neutral-900 mb-4  bg-gradient-to-r from-[#29A2AA] to-[#c0332e] ">Tutor Profile</h3>

					<div className="border border-gray-200 rounded-lg shadow">
						<a href="#" className="flex flex-col w-full items-center md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
							<Image width={190} height={256} className="object-cover w-full shadow-2xl md:h-auto " src={image_url} alt="" />
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
										<span className="font-bold tracking-tight text-gray-900"> {name}</span>
									</p>

									<p>
										<span className='pr-8'>ID#:</span>
										<span className="font-bold tracking-tight text-gray-900"> {id}</span>
									</p>
									<p>
										<span className='pr-4'>Gender:</span>
										<span className="font-bold tracking-tight text-gray-900">{gender}</span>
									</p>
									<hr className="mt-4 mb-4 border-1 border-slate-900" />
									<p>
										<span className="font-bold tracking-tight text-gray-900">Area Covered:</span>
										<span> {
											tuition_info?.preferred_areas_to_teach?.map((areas: any, index: any) => <span
												key={index}
												className="pr-2"
											>

												{areas}
											</span>)
										}</span>
									</p>
									<p>
										<span className="font-bold tracking-tight text-gray-900">Tutor Location:</span>
										<span> {
											area_covered?.map((area: any, index: any) => <span
												key={index}
												className="pr-2"
											>

												{area}
											</span>)
										}</span>

									</p>
								</div>
							</div>
						</a>

					</div>

				</div>
				<div className=" mt-10 mb-10 w-1/2">
					<BookingForm id={id} />
				</div>
			</div>


			<section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
					
					{/* Sample Data 1 */}
					<div className="flex card card-compact w-full bg-base-100 custom-box-shadow group p-4">
						<figure className='rounded-xl'>
							<Image height={288} width={374} priority={true} className='overflow-hidden h-72 w-full object-cover object-center rounded-t-xl transition duration-300 group-hover:scale-110' src={image_url} alt={`Image of ${name}`} />
						</figure>
						<div className='border-t border-slate-300 mt-4 mb-1'></div>
						<div className="flex-1 p-4 pt-4 pb-4">
							<h3 className='text-center text-2xl text-slate-700 font-bold'>Subject: Dynamic Data</h3>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Class: abc@gmail.com
							</p>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Service Location: Dynamic Data
							</p>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Available Days: Dynamic Data
							</p>
							<p className='font-bold text-base text-center mt-2 mb-2 text-slate-600'>BSc in CSE</p>
						</div>
						<div className='border-t border-slate-300 mb-4'></div>
						<div className=" w-full">
							{/* <Link href={`/tutor/${_id}`}> */}
							<button className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Book Now</button>
							{/* </Link> */}
						</div>
					</div>

					{/* Sample Data 2 */}
					<div className="flex card card-compact w-full bg-base-100 custom-box-shadow group p-4">
						<figure className='rounded-xl'>
							<Image height={288} width={374} priority={true} className='overflow-hidden h-72 w-full object-cover object-center rounded-t-xl transition duration-300 group-hover:scale-110' src={image_url} alt={`Image of ${name}`} />
						</figure>
						<div className='border-t border-slate-300 mt-4 mb-1'></div>
						<div className="flex-1 p-4 pt-4 pb-4">
							<h3 className='text-center text-2xl text-slate-700 font-bold'>Subject: Dynamic Data</h3>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Class: abc@gmail.com
							</p>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Service Location: Dynamic Data
							</p>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Available Days: Dynamic Data
							</p>
							<p className='font-bold text-base text-center mt-2 mb-2 text-slate-600'>BSc in CSE</p>
						</div>
						<div className='border-t border-slate-300 mb-4'></div>
						<div className=" w-full">
							{/* <Link href={`/tutor/${_id}`}> */}
							<button className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Book Now</button>
							{/* </Link> */}
						</div>
					</div>

					{/* Sample Data 3 */}
					<div className="flex card card-compact w-full bg-base-100 custom-box-shadow group p-4">
						<figure className='rounded-xl'>
							<Image height={288} width={374} priority={true} className='overflow-hidden h-72 w-full object-cover object-center rounded-t-xl transition duration-300 group-hover:scale-110' src={image_url} alt={`Image of ${name}`} />
						</figure>
						<div className='border-t border-slate-300 mt-4 mb-1'></div>
						<div className="flex-1 p-4 pt-4 pb-4">
							<h3 className='text-center text-2xl text-slate-700 font-bold'>Subject: Dynamic Data</h3>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Class: abc@gmail.com
							</p>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Service Location: Dynamic Data
							</p>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Available Days: Dynamic Data
							</p>
							<p className='font-bold text-base text-center mt-2 mb-2 text-slate-600'>BSc in CSE</p>
						</div>
						<div className='border-t border-slate-300 mb-4'></div>
						<div className=" w-full">
							{/* <Link href={`/tutor/${_id}`}> */}
							<button className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Book Now</button>
							{/* </Link> */}
						</div>
					</div>
					
				</div>
			</section>
		</>
	);
};

export default singlePage;