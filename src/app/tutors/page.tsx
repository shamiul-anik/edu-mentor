

import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";
import getAllTutors from '@/utils/getAllTutors'
import { Tutor } from '@/scriptType/tutorType';
import TutorsCard from './TutorsCard';



const TutorsPage= async  () => {
	const allData = await getAllTutors();
    // console.log('hello data',allData)
	// const { allData, loading, error } = usePopularDataFetch();

	// if (loading) {
	// 	return <p>Loading...</p>;
	// } 
	 
	// const allData = await getData();

	// const res = await fetch(`${process.env.NEXT_PUBLIC_fetch_data}/api/popularTutors`,{
	// 	cache: 'force-cache'
	// })
	// const allData = await res.json();


	return (
		<section className="max-w-7xl mx-auto mt-12 lg:mt-20">
			<SectionTitle heading="All Tutors" subHeading="Discover Our Trusted and All Tutors!"></SectionTitle>

			<div className='grid gap-4 col-span-1 md:grid-cols-4 mx-auto'>
				{
					allData?.map((tutorData: Tutor) => (<TutorsCard key={tutorData._id} tutorData={tutorData}></TutorsCard>))
				}
			</div>

		</section>
	);
};

export default TutorsPage;