"use client"
import React, { useEffect, useState } from 'react'
import CommonBanner from '@/components/(shared)/CommonHeader/CommonBanner'
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";
import StudentCard from "@/app/students/StudentCard"
import Link from 'next/link';
import Image from 'next/image';
import { User } from '@/typeScript/userType';


const Students = () => {

  const [studentData, setStudentData] = useState<User[]>([]);
  

	useEffect(() => {
	  const fetchStudentData = async () => {
		try {
		  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/students`, {
			cache: 'no-cache'
		  });
		  const data = await res.json();
		  setStudentData(data);
		} catch (error) {
		  console.error('Error fetching mentor data:', error);
		}
	  };
  
	  fetchStudentData();
	}, []);
  console.log(studentData)
  return (
    <div>
      <CommonBanner bannerHeading="Students"></CommonBanner>

      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <SectionTitle heading="Students" subHeading="Check out our successful Students!"></SectionTitle>

        {/* <div>
          <h1 className="text-2xl font-bold text-teal-600 underline underline-offset-8 text-center mb-6">Total Tutors: 3</h1>
        </div> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
         {
            studentData?.map((data: User) => <StudentCard key={data._id} data={data}></StudentCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Students;