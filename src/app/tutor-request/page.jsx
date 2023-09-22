"use client"
import React, { useState } from "react";
import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";
import tutorRequestSave from "@/utils/tutorRequestSave";

const TutorRequest = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [title, setTitle] = useState("");
	const [tuitionType, setTuitionType] = useState("");
	const [salary, setSalary] = useState("");
	const [medium, setMedium] = useState("");
	const [classname, setClassname] = useState("");
	const [district, setDistrict] = useState("");
	const [area, setArea] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("Form submitted!");
		const tutorInfo = {
			name,
			email,
			phone,
			title,
			tuitionType,
			salary,
			medium,
			classname,
			district,
			area,
			
		};
		// console.log(tutorInfo);
		tutorRequestSave(tutorInfo);
	};

	return (
		<>
			
			<CommonBanner bannerHeading="Tutor Request" />
			
			<section className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4 md:px-0">

				<SectionTitle heading="Find Your Ideal Home Tutor" subHeading="Request Experienced Tutors for Personalized Learning!"></SectionTitle>

				<form onSubmit={handleSubmit} className="p-8 custom-box-shadow rounded-xl">
					<div className='grid md:grid-cols-2 gap-4 md:gap-6'>
						<div>
							<label htmlFor="name" className="block text-teal-600 text-lg">
								Student Name
							</label>
							<input
								required
								type="text"
								id="name"
								placeholder="Enter your name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block text-teal-600 text-lg">
								Email
							</label>
							<input
								required
								type="text"
								id="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							/>
						</div>
						<div>
							<label htmlFor="title" className="block text-teal-600 text-lg">
								Tuition Title
							</label>
							<input
								required
								type="text"
								id="title"
								placeholder="Enter the Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							/>
						</div>
						<div>
							<label htmlFor="phone" className="block text-teal-600 text-lg">
								Phone
							</label>
							<input
								required
								type="tel"
								id="phone"
								placeholder="Enter your phone number"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							/>
						</div>
						<div>
							<label htmlFor="salary" className="block text-teal-600 text-lg">
								Salary
							</label>
							<input
								type="number"
								id="salary"
								defaultValue="5000Tk"
								placeholder="Enter your asking salary"
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							/>
						</div>
						<div>
							<label htmlFor="tuitionType" className="block text-teal-600 text-lg">
								Tuition Type
							</label>
							<select
								value={tuitionType}
								onChange={(e) => setTuitionType(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							>
								<option value="Home Tutoring">Home Tutoring</option>
								<option value="Remote Tutoring">Remote Tutoring</option>
							</select>
						</div>
						<div>
							<label htmlFor="medium" className="block text-teal-600 text-lg">
								Medium
							</label>
							<select
								defaultValue={"English"}
								value={medium}
								onChange={(e) => setMedium(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							>
								<option value="English">English</option>
								<option value="Bangla">Bangla</option>
								<option value="Hindi">Hindi</option>
							</select>
						</div>
						<div>
							<label htmlFor="classname" className="block text-teal-600 text-lg">
								Class
							</label>
							<select
								value={classname}
								onChange={(e) => setClassname(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							>
								<option value="1">1st</option>
								<option value="2">2nd</option>
								<option value="3">3rd</option>
								<option value="4">4th</option>
								<option value="5">5th</option>
							</select>
						</div>
						<div>
							<label htmlFor="district" className="block text-teal-600 text-lg">
								District
							</label>
							<select
								value={district}
								onChange={(e) => setDistrict(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							>
								<option value="Dhaka">Dhaka</option>
								<option value="Chittagong">Chittagong</option>
								<option value="Khulna">Khulna</option>
								<option value="Rajshahi">Rajshahi</option>
								<option value="Barisal">Barisal</option>
							</select>
						</div>
						<div>
							<label htmlFor="area" className="block text-teal-600 text-lg">
								Area
							</label>
							<select
								value={area}
								onChange={(e) => setArea(e.target.value)}
								className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
							>
								<option value="Gulshan">Gulshan</option>
								<option value="Banani">Banani</option>
								<option value="Dhanmondi">Dhanmondi</option>
								<option value="Mirpur">Mirpur</option>
								<option value="Uttara">Uttara</option>
							</select>
						</div>
					</div>
					<button type="submit" className="w-full mt-4 md:mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-12 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400">
						Submit
					</button>
				</form>

			
			</section>
		</>
	);
};

export default TutorRequest;
