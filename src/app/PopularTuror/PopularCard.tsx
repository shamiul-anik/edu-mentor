'use client'
import { Tutor } from '@/scriptType/tutorType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PopularCardProps {
data: Tutor
}

const TestForButton = (id: (number | string)) => {
console.log('test for button')
}

const PopularCard: React.FC<PopularCardProps> = ({data}) => {
  // console.log(data)
  const {name, _id, image_url, education,} = data;
  
    return (
        <div className='my-4 mx-auto relative w-full'>
            <div className="card card-compact  bg-base-100 shadow-xl hover:shadow-2xl border border-gray-400 transition ease-in-out delay-150 hover:-translate-y-2 mx-auto  hover:border-cyan-500  hover:shadow-cyan-500/50  ">
              <div className='w-2/3 h-2/3 mx-auto  mt-10 mb-0'>
              <Image
              className='border mx-auto border-gray-400 rounded outline outline-1 hover:outline-cyan-500 shadow-lg hover:shadow-cyan-500/50  p-2'
               width={190} height={190} src={image_url} alt="tutorImage" />

              </div>
  <div className="card-body text-center">
    <h2 className="card-title justify-center">{name}</h2>
    {/* <p>Email: {email}</p> */}
    {/* <p>{university}</p> */}
    <p>Subject:  {education}</p>
    {/* <p>{location}</p> */}
    {/* TODO: Top 'use client' is use for button.  */}
    <div className="card-actions justify-end">
      <Link href={`/${_id}`}>
      <button onClick={()=>TestForButton(_id)} className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;