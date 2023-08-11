import React from 'react';

import mentorData from '../../../public/data.json';
import PopularCard from './PopularCard';
import SectionTitle from '../(shared)/SectionTitle/SectionTitle';

interface Mentor {
    id: number | string;
    name: string;
    email: string;
    subject: string;
    image: string;
    university: string;
    location: string;
  }

  

const Popular =  () => {


    return (
        <section className="max-w-7xl mx-auto mt-12 lg:mt-20">
          <SectionTitle heading="Popular  Instructor" subHeading="Verified by some popular instructors!"></SectionTitle>
                  {/* <h3 className='text-center text-3xl font-bold uppercase py-4 '>Popular  Instructor</h3>
                  <p  className='text-center  pb-10 '>Verified by some popular instructors</p> */}

                  <div className='grid gap-4 col-span-1 md:grid-cols-4 mx-auto'>
                    {
                        mentorData.map((data: Mentor) => (<PopularCard
                        key={data.id}
                        data ={data}
                        ></PopularCard>)) 
                    }
                  </div>
        </section>
    );
};

export default Popular;