
'use client'
import { Tutor } from '@/typeScript/tutorType';
import Image from 'next/image';
import Link from 'next/link';

interface PopularCardProps {
	tutorData: Tutor
}

const TestForButton = (id: (number | string)) => {
	// console.log('test for button')
}

const TutorCard: React.FC<PopularCardProps> = ({ tutorData }) => {
	// console.log(tutorData)
	const { name, _id, image_url, education, education_qualification } = tutorData || {};

	return (
		<div className="flex card card-compact w-full bg-base-100 custom-box-shadow group p-4">
			<figure className='rounded-xl'>
				<Image height={288} width={374} priority={true} className='overflow-hidden h-72 w-full object-cover object-center rounded-t-xl transition duration-300 group-hover:scale-110' src={image_url} alt={`Image of ${name}`} />
			</figure>
			<div className='border-t border-slate-300 mt-4 mb-1'></div>
			<div className="flex-1 p-4 pt-4 pb-4">
				<h3 className='text-center text-2xl text-slate-700 font-bold'>{name}</h3>
				<p className='font-medium text-sm text-center mt-3 mb-3 text-slate-600'>
					{
						education_qualification.map((value, index) =>
							(<span key={index}>{value.institution}</span>)
						)
					}
				</p>
				<p className='font-bold text-base text-center mt-2 mb-2 text-slate-600'>{education}</p>
			</div>
			<div className='border-t border-slate-300 mb-4'></div>
			<div className=" w-full">
				<Link href={`/tutor/${_id}`}>
					<button onClick={() => TestForButton(_id)} className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Details</button>
				</Link>
			</div>
		</div>
	);
};

export default TutorCard;