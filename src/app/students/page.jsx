"use client"
import React from "react";
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";
import {  useEffect, useState } from "react";
import Aos from "aos";
import StudentCard from "@/app/students/StudentCard";

const Students = () => {
  const [students, setStudents] = useState([]);



  useEffect(() => {
    Aos.init({ duration: 1000 });

    const setStudentsData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/students', {
          cache: "no-cache"
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        setStudents(data);
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      }
    };

    setStudentsData();
  }, []);





  return (
    <div>
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <SectionTitle heading="Students" subHeading="Our beloved students"></SectionTitle>

        <div>
          <h1 className="text-2xl font-bold text-teal-600 underline underline-offset-8 text-center mb-6">Total students: {students?.length}</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
          {
            students?.map((studentData) => <StudentCard key={studentData._id} studentsData={studentData}></StudentCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Students;