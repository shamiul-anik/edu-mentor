
import { Tutor } from "@/scriptType/tutorType";
import getSingleTutor from "@/utils/getSingleTutor"
import React from 'react';

const singlePage: React.FC<{ params: { popularId: string | number } }> = async ({params: {popularId}}) => {
    const singleTutor: Tutor= await getSingleTutor(popularId)
    // console.log(singleTutor)
    return (
        <div>
            <h1>singlePage {popularId}</h1>
        </div>
    );
};

export default singlePage;