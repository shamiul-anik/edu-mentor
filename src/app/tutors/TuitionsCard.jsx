import React from 'react';
import {Tuition} from "@/typeScript/tuitionsType"
import useAuth from '@/hooks/useAuth';



const TuitionsCard = (data) => {
	const {subject, class_name, service_location, available_days, salary } = data
	console.log(data)
	const { user } = useAuth();
    return (
        <div
						className="flex card card-compact w-full bg-base-100 custom-box-shadow group p-4">
						{/* <figure className='rounded-xl'>
							<Image height={288} width={374} priority={true} className='overflow-hidden h-72 w-full object-cover object-center rounded-t-xl transition duration-300 group-hover:scale-110' src={photoURL} alt={`Image of ${displayName}`} />
						</figure> */}
						<div className='border-t border-slate-300 mt-4 mb-1'></div>
						<div className="flex-1 p-4 pt-4 pb-4">
							<h3 className='text-center text-2xl text-slate-700 font-bold'>Subject: {subject}</h3>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Class: {class_name}
							</p>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Service Location: {service_location}
							</p>
							<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
								Available Days: {available_days}
							</p>
							<p className='font-medium text-base text-center mt-2 mb-2 text-slate-600'>Expected Salary: {salary}</p>
						</div>
						<div className='border-t border-slate-300 mb-4'></div>
						<div className=" w-full">
							{/* <Link href={`/tutor/${_id}`}> */}
							<button className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Book Now</button>
							{/* </Link> */}
						</div>
					</div>
    );
};

export default TuitionsCard;