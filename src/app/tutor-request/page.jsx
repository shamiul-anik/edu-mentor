"use client"
import React, { useState } from "react";
import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";
import FAQAccordion from "@/components/TutorRequest/FAQ";
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
    console.log("Form submitted!");
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
    <div>
      <CommonBanner bannerHeading="Tutor Request" />
      <div className="w-10/12 mx-auto">
        <h1 className="text-4xl md:text-7xl py-12 text-teal-500 font-bold">
          Are you looking🔍 for a Tutor?
        </h1>

        <p className="text-lg md:text-3xl pb-12 text-teal-600">
          Fill out the form to let us know which class/area you need a tutor for.
          <br />
          Our representative will contact you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          className="shadow-md w-10/12 p-8 mx-auto rounded-lg m-8 px-8  md:p-8"
        >
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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

          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Submit
          </button>
        </form>

        <div className="mt-8">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};

export default TutorRequest;
