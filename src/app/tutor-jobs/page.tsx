'use client'
import React, { useEffect, useState } from "react";
import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";
import { TutorData } from '@/typeScript/tutorJobsType';
import { MdLocationPin } from 'react-icons/md';

const TutorRequest = () => {
  const [allData, setAllData] = useState<TutorData[]>([]); // Set the type of allData

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutor-request`, {
          cache: 'no-cache'
        });
        const data: TutorData[] = await res.json(); // Set the type of data
        setAllData(data);
      } catch (error) {
        console.error('Error fetching mentor data:', error);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div>
      <CommonBanner bannerHeading="Tutor Jobs" />

      <div className="p-4">
        <h2 className="text-5xl font-semibold mb-4 text-teal-600 py-12">Choose your job as a tutor as you want! </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allData.map((item) => (
            <div key={item._id} className="bg-teal-200 rounded-lg shadow-lg p-6 relative">
            <h3 className="text-4xl text-teal-600">{item.title}</h3>
            <p>Job Posted by <span className="text-teal-800">{item.name}</span></p>
            <p>📞 {item.phone}</p>
            <p>Category: {item.tuitionType}</p>
            <p>Salary: TK {item.salary !== null ? item.salary : 'Discussion Needed'}</p>
            <p>Medium: {item.medium}</p>
            <p>Class: {item.classname}</p>
            <p>District: {item.district}</p>
            <div className="flex items-center">
              <MdLocationPin /> {item.area !== null ? <p>{item.area}</p> : 'Area was not provided'}
            </div>
            <button className="btn bg-teal-600 text-white absolute bottom-2 right-2">Knock Tutor Seeker</button>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorRequest;
