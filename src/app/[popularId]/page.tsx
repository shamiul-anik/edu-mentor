
import getSingleTutor from "@/utils/getSingleTutor"
import React from 'react';

const singlePage = async ({params: {popularId}}) => {
    const singleTutor= await getSingleTutor(popularId)
    console.log(singleTutor)
    return (
        <div>
            <h1>singlePage {popularId}</h1>
        </div>
    );
};

export default singlePage;