'use client'

import CommonBanner from "@/components/(shared)/CommonHeader/CommonBanner";
import { TutorData } from '@/typeScript/tutorJobsType';
import { MdLocationPin } from 'react-icons/md';
import useAuth from "@/hooks/useAuth";
import { useState, useEffect } from "react";




const TutorRequest = () => {
  const [allData, setAllData] = useState<TutorData[]>([]);
  const [filteredData, setFilteredData] = useState<TutorData[]>([]);
  const [filterOptions, setFilterOptions] = useState({
    tuitionType: '',
    medium: ''
  });

  const { user}:any = useAuth();
  // console.log("user in tutor-jobs page", user);
  const currentUserMail = user?.email;
  // console.log(currentUserMail);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tutor-request`, {
          cache: 'no-cache'
        });
        const data: TutorData[] = await res.json();
        setAllData(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching mentor data:', error);
      }
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    // Apply filters based on user selections
    const filtered = allData.filter(item => {
      return (
        (filterOptions.tuitionType === '' || item.tuitionType === filterOptions.tuitionType) &&
        (filterOptions.medium === '' || item.medium === filterOptions.medium)
      );
    });
    setFilteredData(filtered);
  }, [filterOptions, allData]);

  const handleFilterChange = (event:any) => {
    const { name, value } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value
    }));
  };

  const sendEmail = async (toEmail: string) => {
    // console.log(toEmail);
    const emailData = {
      to: toEmail, 
      from: "mamun.bbn.bd@gmail.com", 
      subject: "Message From EduMentor",
      message: "Contact with your desire tutor.",
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
};


  


  return (
    <div>
      <CommonBanner bannerHeading="Tutor Jobs" />

      <div className="p-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-teal-600 py-12">
          Choose your job as a tutor as you want!{" "}
        </h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <div>
              <label htmlFor="tuitionType">Tuition Type: </label>
              <select
                id="tuitionType"
                name="tuitionType"
                value={filterOptions.tuitionType}
                onChange={handleFilterChange}
                className="border border-gray-400 rounded px-2 py-1"
              >
                <option value="">All</option>
                <option value="Remote Tutoring">Remote Tutoring</option>
                <option value="Home Tutoring">Home Tutoring</option>
              </select>
            </div>
            <div>
              <label htmlFor="medium">Medium:</label>
              <select
                id="medium"
                name="medium"
                value={filterOptions.medium}
                onChange={handleFilterChange}
                className="border border-gray-400 rounded px-2 py-1"
              >
                <option value="">All</option>                
                <option value="Bangla">Bangla</option> 
                <option value="English">English</option> 
                
              </select>
            </div>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredData.map((item) => (
              <div key={item._id} className="bg-teal-200 rounded-lg shadow-lg p-6 relative">
                <h3 className="text-2xl text-teal-600">{item.title}</h3>
                <hr className="border-b border-teal-600" />
                <p className="py-2">
                  Job Posted by <span className="text-teal-800 text-xl">{item.name}</span>
                </p>
                <p className="py-2">📞 {item.phone}</p>
                <p className="py-2">Email: {item.email}</p>
                <p className="py-2">Category: {item.tuitionType}</p>
                <p className="py-2">Salary: TK {item.salary !== null ? item.salary : 'Discussion Needed'}</p>
                <p className="py-2">Medium: {item.medium}</p>
                <p className="py-2">Class: {item.classname}</p>
                <p className="py-2">District: {item.district}</p>
                <div className="flex items-center">
                  <MdLocationPin /> {item.area !== null ? <p>{item.area}</p> : 'Area was not provided'}
                </div>
                <button onClick={() => sendEmail(item.email)} className="btn bg-teal-600 text-white absolute bottom-2 right-2 hover:bg-teal-800">Knock Tutor Seeker</button>


              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default TutorRequest;
