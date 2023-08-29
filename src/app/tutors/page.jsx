"use client"
import React, { useState } from 'react';
import SectionTitle from '@/components/(shared)/SectionTitle/SectionTitle';
import { useContext, useEffect } from "react";
import Aos from "aos";
import TutorCard from "@/app/tutors/TutorCard";

const Tutors = () => {

  const [mentorData, setMentorData] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    const fetchMentorData = async () => {
      try {
        const res = await fetch('https://edu-mentor-main-project.vercel.app/api/tutors', {
          cache: "no-cache"
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setMentorData(data);
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      }
    };

    fetchMentorData();
  }, []);

 

  return (
    <div>
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <SectionTitle heading="Tutors" subHeading="Meet Our Exceptional Tutors"></SectionTitle>

        <div>
          <h1 className="text-2xl font-bold text-teal-600 underline underline-offset-8 text-center mb-6">Total Verified Tutors: {mentorData?.length}</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
          {
            mentorData?.map((data) => <TutorCard key={data._id} tutorData={data}></TutorCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Tutors;