"use client"
import React, { useState, useEffect } from 'react';
import PopularCard from './PopularCard';
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";

interface Mentor {
  _id: number | string;
  name: string;
  email: string;
  subjects: string[];
  students: number;
  photoURL: string;
  location: string;
  Education: string;
  ratings: number;
}

const PopularTutors = () => {
  const [mentorData, setMentorData] = useState<Mentor[]>([]);

  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors`, {
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
    <section className="max-w-7xl mx-auto mt-12 lg:mt-20">
      <SectionTitle heading="Popular Tutors" subHeading="Discover Our Trusted and Popular Tutors!" />
      
      <div className='grid gap-4 col-span-1 md:grid-cols-4 mx-auto'>
        {mentorData.slice(0, 4).map((data: Mentor) => (
          <PopularCard key={data._id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default PopularTutors;
