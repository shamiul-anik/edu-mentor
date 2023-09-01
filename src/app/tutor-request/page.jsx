"use client";

import React, { useState } from "react";
import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";
import FAQAccordion from "@/components/Tutor-Request/FAQ";

const TutorRequest = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [medium, setMedium] = useState("");
  const [classname, setClassname] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log(name);
    console.log(phone);
    console.log(medium);
    console.log(classname);
    console.log(district);
    console.log(area);
  };

  return (
    <div>
      <CommonBanner bannerHeading="Tutor Job" />
      <div className="w-10/12 mx-auto">

      <h1 className="text-4xl md:text-7xl py-12 text-teal-500 font-bold">
        Are you looking🔍 for a Tutor?
      </h1>

      <p className="text-lg md:text-3xl pb-12 text-teal-600">
        Fill out the form to let us know which class/area you need a tutor for.
        <br />
        Our representative will contact you within 24 hours.
      </p>
      <div className="mx-auto p-4 md:p-8 flex flex-col md:flex-row">

        <form
          onSubmit={handleSubmit}
          className="shadow-md w-1/2  rounded-lg mr-8 px-8  md:p-8"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-teal-600 text-lg">
              Student Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-teal-600 text-lg">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-teal-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="medium" className="block text-teal-600 text-lg">
              Medium
            </label>
            <select
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
      

      <div className="w-1/2 rounded mx-8">
        <FAQAccordion />
      </div>
      </div>
      </div>
    </div>
  );
};

export default TutorRequest;
