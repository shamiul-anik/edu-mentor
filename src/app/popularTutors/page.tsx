
import React, { useEffect, useState } from 'react';
// import mentorData from '../../../public/data.json';
// import PopularCard from './PopularCard';
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";
import PopularCard from './PopularCard';
import { Tutor } from '@/typeScript/tutorType';



const PopularTutors = async  () => {
	// const mentorData = await getTutors();
	// console.log(mentorData)
	// const { mentorData, loading, error } = usePopularDataFetch();

	// if (loading) {
	// 	return <p>Loading...</p>;
	// } 
	 
	// const mentorData = await getData();

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors/sort-tutors`,{
		cache: 'no-cache'
	})
	const mentorData = await res.json();


	return (
		<section className="max-w-7xl mx-auto mt-12 lg:mt-20">
			<SectionTitle heading="Popular Tutors" subHeading="Discover Our Trusted and Popular Tutors!"></SectionTitle>

			<div className='grid gap-4 col-span-1 md:grid-cols-4 mx-auto'>
				{
					mentorData?.map((data: Tutor) => (<PopularCard key={data._id} data={data}></PopularCard>))
				}
			</div>

		</section>
	);
};

export default PopularTutors;