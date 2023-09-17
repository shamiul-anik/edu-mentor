
import { Tutor } from '@/typeScript/tutorType';
import Image from "next/image";
import React from 'react';
import BookingForm from "@/app/tutors/BookingForm"



const singlePage: React.FC<{ params: { tutorId: string } }> = async ({params: {tutorId}}) => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors/${tutorId}`,{
		cache: 'no-cache'
	})
	const singleTutor = await res.json();
    const { image_url, name, id, tuition_info, area_covered, gender}= singleTutor || {};
    return (
        <>
                <div className=' md:flex flex-row   justify-center'>
        <div className="m-10 w-1/2 bg-white ">
            <h3 className="text-3xl text-white p-1 font-bold divide-x-2 divide-neutral-900 mb-4  bg-gradient-to-r from-[#29A2AA] to-[#c0332e] ">Tutor Profile</h3>

<div className="border border-gray-200 rounded-lg shadow">
<a href="#" className="flex flex-col w-full items-center md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image width={190} height={256} className="object-cover w-full shadow-2xl md:h-auto " src={image_url} alt=""/>
    <div className=" w-full leading-normal">
        {/* <div className="mb-2  ">
            <span>Name:</span>
            
            <span>ID#:</span>
            <span>Gender:</span>
            <p>Area Covered:</p>
            <p>Tutor Location:</p>
             </div> */}
        <div className="mb-2 ml-4 dark:text-white">
            <div>
            <span className='pr-4'>Name:</span>
           <span className="font-bold tracking-tight text-gray-900"> {name}</span>
            </div>
           
           <div>
           <span  className='pr-8'>ID#:</span>
           <span className="font-bold tracking-tight text-gray-900"> {id}</span>
           </div>
             <div>
             <span className='pr-4'>Gender:</span>
           <span className="font-bold tracking-tight text-gray-900">{gender}</span>
             </div>
             <hr className="mt-4 mb-4 border-1 border-slate-900" />
           <div>
           <span className="font-bold tracking-tight text-gray-900">Area Covered:</span>
           <div> {
                tuition_info?.preferred_areas_to_teach?.map((areas:any, index:any)=> <p
                 key={index}
                 className="pr-2 inline-block"
                 >
                    
                    {areas }
                </p>)
            }</div>
           </div>
            <div>
            <span className="font-bold tracking-tight text-gray-900">Tutor Location:</span>
           <div> {
                area_covered?.map((area:any, index:any)=> <p
                key={index}
                className="pr-2 inline-block"
                >
                   
                   {area}
               </p>)
            }</div>

            </div>
        </div>
    </div>
</a>

</div>

        </div>
        <div className= " mt-10 mb-10 w-1/2">
        <BookingForm id={id}/>
        </div>
        </div>
        </>
    );
};

export default singlePage;