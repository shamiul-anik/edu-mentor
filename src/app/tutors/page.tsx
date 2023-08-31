
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";

import { Tutor } from '@/typeScript/tutorType';
import TutorsCard from './TutorsCard';
import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";

const TutorsPage= async  () => {

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors`,{
		cache: 'no-cache'
	})
	const allData = await res.json();
	// console.log('tutors page data',allData)


	return (
		<>
				<CommonBanner bannerHeading="Tutors"></CommonBanner>
		<section className="max-w-7xl mx-auto mt-12 lg:mt-20">
			<SectionTitle heading="All Tutors" subHeading="Discover Our Trusted and All Tutors!"></SectionTitle>

			<div className='grid gap-4 col-span-1 md:grid-cols-4 mx-auto'>
				{
					allData?.map((tutorData: Tutor) => (<TutorsCard key={tutorData._id} tutorData={tutorData}></TutorsCard>))
				}
			</div>

		</section>
		</>
	);
};

export default TutorsPage;
