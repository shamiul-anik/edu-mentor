"use client"
import React from "react";
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import Aos from "aos";
import StudentCard from "@/app/students/StudentCard";
import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";

const Students = () => {
	const [tutors, setTutors] = useState([]);



	useEffect(() => {
		Aos.init({ duration: 1000 });
		const setTutorsData = async () => {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutors`, {
					cache: "no-cache"
				});
				if (!res.ok) {
					throw new Error("Failed to fetch data");
				}
				const data = await res.json();
				// console.log(data);
				setTutors(data);
			} catch (error) {
				console.error("Error fetching mentor data:", error);
			}
		};

		setTutorsData();
	}, []);





	return (
		<div>
			<CommonBanner bannerHeading="Tutors"></CommonBanner>
			<section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

				<SectionTitle heading="Tutors" subHeading="Our beloved Tutors"></SectionTitle>

				<div>
					<h1 className="text-2xl font-bold text-teal-600 underline underline-offset-8 text-center mb-6">Total tutors: {tutors?.length}</h1>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
					{
						tutors?.map((studentData) => <StudentCard key={studentData._id} studentsData={studentData}></StudentCard>)
					}
				</div>
			</section>
		</div>
	);
};

export default Students;