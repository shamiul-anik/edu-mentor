'use client'
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";

import { Tutor } from '@/typeScript/tutorType';
import TutorsCard from './TutorsCard';
import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";
import { useEffect, useState } from "react";
type tutors ={
	_id: string; // Replace with the actual type of _id
	gender: string; // Replace with the actual type of gender
	premium: string;
}

const TutorsPage= () => {

	const [allData, setAllData] = useState<Tutor[]>([]);
	const [searchCriteria, setSearchCriteria] = useState<{
		premium: string;
		gender: string;
	  }>({
	premium: '',
    gender: '',
	}); // Initialize with an empty string.
	// const {all, premium, allGender, male, female } = searchCriteria
	// console.log(all, premium, allGender, male , female);
	// console.log(searchCriteria)

	const {premium, gender} = searchCriteria;
	console.log(premium, gender)
	useEffect(() => {
	  const fetchAllData = async () => {
		try {
		  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors?premium=${premium}&gender=${gender}`,
		  {
			cache: 'no-cache'
		  });
		  const data = await res.json();
		          // Filter data based on gender and premium criteria
        // const filteredData = data.filter((tutor: Tutor) => {
          // Check gender criteria
		//   const filteredDatas = []
        //   if (gender !== '' && tutor.gender !== gender) {
			
        //     return false;
        //   }

        //   // Check premium criteria
        //   if (premium !== '' && tutor.premium !== premium) {
        //     return false;
        //   }

        //   return true; // Include this tutor in the filtered data
        // });

        // setAllData(filteredData);
		  
		  setAllData(data);
		} catch (error) {
		  console.error('Error fetching mentor data:', error);
		 
		}
	  };
  
	  fetchAllData();
	}, [premium, gender ]);

  // Function to handle radio button changes.
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedOption = event.target.value;
//     setSortingOption(selectedOption);
//   };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: checked ? value : '',
    }));
  };

	  

	return (
		<>
	<CommonBanner bannerHeading="Tutors"></CommonBanner>
		<section className="max-w-7xl mx-auto mt-12 lg:mt-20">
			<SectionTitle heading="All Tutors" subHeading="Discover Our Trusted and All Tutors!"></SectionTitle>
			<div className="flex gap-4">
				        {/* Add checkbox for sorting options */}
		<div className="basis-1/3">
			<h3 className="text-2xl">Advance filter</h3>
			<hr className="mt-4 border-1 border-slate-900" />
		<div className="p-4">
		<h3 className="pb-4">Tutor Type</h3>

		<label>
          <input
            type="checkbox"
            name="premium"
            value="all"
            checked={searchCriteria.premium === 'all'}
            onChange={handleInputChange}
          /> All
        </label>
		<br />
		<label>
          <input 
            type="checkbox"
            name="premium"
            value="done"
            checked={searchCriteria.premium === 'done'}
            onChange={handleInputChange}
			className="focus:outline-none"
			
          /> Premium
        </label>

		</div>
		<div className="p-4">
		<hr className="mt-4 border-1 border-slate-900" />
		<h3 className="pb-4 pt-4">Gender</h3>
		<label>
          <input
            type="checkbox"
            name="gender"
            value="allGender"
            checked={searchCriteria.gender === 'allGender'}
            onChange={handleInputChange}
          /> All
        </label>
		<br />
		<label>
          <input 
            type="checkbox"
            name="gender"
            value="male"
            checked={searchCriteria.gender === 'male'}
            onChange={handleInputChange}
			className="focus:outline-none"
			
          /> Male
        </label>
		<br />
		<label>
          <input 
            type="checkbox"
            name="gender"
            value="female"
            checked={searchCriteria.gender === 'female'}
            onChange={handleInputChange}
			className="focus:outline-none"
			
          /> Female
        </label>

		</div>
       
        

		</div>

			<div className='grid gap-4 col-span-1 md:grid-cols-3 mx-auto'>

				{
					allData?.map((tutorData: Tutor) => (<TutorsCard key={tutorData._id} tutorData={tutorData}></TutorsCard>))
				}
			</div>
			</div>

		</section>
		</>
	);
};

export default TutorsPage;
