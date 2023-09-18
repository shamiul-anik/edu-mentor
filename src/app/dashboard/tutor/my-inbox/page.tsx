import React from 'react';
import { FiDelete } from 'react-icons/fi';
import { LuDelete } from 'react-icons/lu';
import { VscFeedback } from 'react-icons/vsc';

const MyInbox = () => {
  
  const admin_feedback = "Good work!" // TODO: Make it dynamic

  return (
    <>
      <header>
        <h1 className="text-5xl text-teal-700 font-bold text-center mt-4 lg:mt-8">
          {/* <Fade duration={200} triggerOnce={true} cascade>Add a Tuition</Fade> */}
          <span>My Inbox</span>
        </h1>
      </header>
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        {/* <div>
        <h1 className="text-3xl font-bold text-center mb-6">Total Enrolled Classes: {myEnrolledClasses?.length}</h1>
      </div> */}

        <div className="relative overflow-x-auto">
          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  #
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Email
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Mobile No.
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Gender
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Location
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Subject
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Class
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Details
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  My Feedback
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
                  1
                </td>
                <td className="px-2 py-2 border-r-2">
                  Abu Haidar
                </td>
                <td className="px-2 py-2 border-r-2">
                  haidar@gmail.com
                </td>
                <td className="px-2 py-2 text-center border-r-2">
                  01712345678
                </td>
                <td className="px-2 py-2 text-center border-r-2">
                  Male
                </td>
                <td className="px-2 py-2 text-center uppercase border-r-2">
                  Dhaka
                </td>
                <td className="px-2 py-2 border-r-2">
                  English
                </td>
                <td className="px-2 py-2 border-r-2">
                  Class
                </td>
                <td className="px-2 py-2 border-r-2">
                  Dynamic Details&apos;s Information
                </td>
                <td className="px-2 py-2 border-r-2">
                  Dynamic Feedback
                </td>
                <td className="px-2 py-2 border-r-2">
                  <button type="button" className="flex w-44 mx-auto justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={false}>
                    <FiDelete className='gr-icon w-4 h-4 mr-2' />
                    Delete
                  </button>
                  {
                    admin_feedback ?
                    <button type="button" className="flex w-44 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-teal-500 to-teal-600 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
                      <VscFeedback className='gr-icon w-4 h-4 mr-2' />
                      Update Feedback
                    </button>
                    :
                    <button type="button" className="flex w-44 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-blue-500 to-blue-600 transition-all hover:duration-300 hover:from-blue-600 hover:to-blue-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700">
                      <VscFeedback className='gr-icon w-4 h-4 mr-2' />
                      Send Feedback
                    </button>
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>
    </>
  );
};

export default MyInbox;