
import { Tutor } from '@/typeScript/tutorType';
import Image from "next/image";
import React from 'react';

const singlePage: React.FC<{ params: { popularId: string } }> = async ({params: {popularId}}) => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors/${popularId}`,{
		cache: 'no-cache'
	})
	const singleTutor = await res.json();
    const { image_url, name, id, tuition_info, area_covered}= singleTutor || {};
    return (
        <div className="m-10 w-1/2 bg-white ">
            <h3 className="text-3xl font-bold divide-x-2 divide-neutral-900 mb-4  ">Tutor Profile</h3>

<div className="border border-gray-200 rounded-lg shadow">
<a href="#" className="flex flex-col p-20 w-full  items-center  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image width={190} height={256} className="object-cover w-full shadow-2xl md:h-auto " src={image_url} alt=""/>
    <div className="grid grid-cols-2 justify-between gap-10 p-4 w-full leading-normal">
        <div className="mb-2  ">
            <p>Name:</p>
            <p>ID#:</p>
            <p>Gender:</p>
            <p>Area Covered:</p>
            <p>Tutor Location:</p>
             </div>
        <div className="mb-2  dark:text-white">
           <p className="font-bold tracking-tight text-gray-900"> {name}</p>
           <p> {id}</p>
           <p> null</p>
           <p> {
                tuition_info?.preferred_areas_to_teach?.map((areas:any, index:any)=> <span
                 key={index}
                 className="pr-2"
                 >
                    
                    {areas }
                </span>)
            }</p>
           <p> {
                area_covered?.map((area:any, index:any)=> <span
                key={index}
                className="pr-2"
                >
                   
                   {area}
               </span>)
            }</p>

        </div>
    </div>
</a>

</div>

        </div>
    );
};

export default singlePage;