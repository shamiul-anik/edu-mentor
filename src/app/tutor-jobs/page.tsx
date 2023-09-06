"use client";

import React, { useState } from "react";
import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";

// Sample array of job objects
const jobDataArray = [
  {
    job_id: "123",
    title: "Male Tutor Needed For English Medium",
    location: "Basundhara R/A, Dhaka",
    tuition_type: "Home Tutoring",
    subject: "English",
    salary: "8,000Tk/Month",
    post_date: "02/09/23",
    other_requirements:
      "Bashundhara, k block, r-19, O/A level Background tutors are requested to apply",
    status: "available",
  },
  {
    job_id: "124",
    title: "Math Tutor Wanted",
    location: "Gulshan, Dhaka",
    tuition_type: "Online",
    subject: "Mathematics",
    salary: "10,000Tk/Month",
    post_date: "02/09/23",
    other_requirements: "Experience in teaching math is required",
    status: "unavailable",
  },
  {
    job_id: "124",
    title: "Math Tutor Wanted",
    location: "Gulshan, Dhaka",
    tuition_type: "Online",
    subject: "Physics",
    salary: "10,000Tk/Month",
    post_date: "02/09/23",
    other_requirements: "Experience in teaching math is required",
    status: "unavailable",
  },
  {
    job_id: "124",
    title: "Math Tutor Wanted",
    location: "Gulshan, Dhaka",
    tuition_type: "Online",
    subject: "Chemistry",
    salary: "10,000Tk/Month",
    post_date: "02/09/23",
    other_requirements: "Experience in teaching math is required",
    status: "unavailable",
  },
  // Add more job objects as needed
];

const TutorRequest = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("All");

  // Function to toggle the details view
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Function to handle subject filter change
  const handleSubjectChange = (e:any) => {
    setSelectedSubject(e.target.value);
  };

  // Filter job data based on the selected subject
  const filteredJobData = selectedSubject === "All"
    ? jobDataArray
    : jobDataArray.filter((job) => job.subject === selectedSubject);

  return (
    <div>
      <CommonBanner bannerHeading="Tutor Jobs" />
      <div className="my-4">
        <label className="text-gray-600">Filter by Subject:</label>
        <select
          className="ml-2 border border-gray-300 rounded-md p-2"
          value={selectedSubject}
          onChange={handleSubjectChange}
        >
          <option value="All">All</option>
          <option value="English">English</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>
      </div>
      {filteredJobData.map((jobData) => (
        <div
          key={jobData.job_id}
          className="p-4 border border-gray-300 shadow-md rounded-md m-4"
        >
          <p className="text-xl font-semibold">{jobData.title}</p>
          <p className="text-gray-600">{jobData.location}</p>
          <p className="text-gray-600">{jobData.tuition_type}</p>
          <p className="text-gray-600">{jobData.subject}</p>
          <p className="text-gray-600">{jobData.salary}</p>
          <p className="text-gray-600">{jobData.post_date}</p>
          <p className="text-gray-600">{jobData.other_requirements}</p>
          {jobData.status === "available" ? (
            <button
              onClick={toggleDetails}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              {showDetails ? "Hide Details" : "View Details"}
            </button>
          ) : (
            <p className="text-red-500">Not Available</p>
          )}
          {showDetails && (
            <div className="mt-4">
              
              <p>Detals data should be shown here</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TutorRequest;
