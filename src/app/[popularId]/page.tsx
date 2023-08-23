
import { Tutor } from "@/scriptType/tutorType";
import getSingleTutor from "@/utils/getSingleTutor"
import Image from "next/image";
import React from 'react';

const singlePage: React.FC<{ params: { popularId: string } }> = async ({params: {popularId}}) => {
    const singleTutor: Tutor= await getSingleTutor(popularId)
    // console.log(singleTutor)
    const { image_url, name, id, }= singleTutor;
    return (
        <div className="m-10 w-1/2 bg-white ">
            <h3 className="text-3xl font-bold divide-x-2 divide-neutral-900 mb-4  ">Tutor Profile</h3>

<div className="border border-gray-200 rounded-lg shadow">
<a href="#" className="flex flex-col p-20 w-full  items-center  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image width={190} height={256} className="object-cover w-full shadow shadow-2xl md:h-auto " src={image_url} alt=""/>
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
           <p> {name}</p>
           <p> {name}</p>
           <p> {name}</p>

        </div>
    </div>
</a>

</div>

        </div>
    );
};

export default singlePage;