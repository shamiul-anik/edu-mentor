import Image from "next/image";
// import { useState } from "react";
import { GrValidate } from "react-icons/gr";
import { LuShieldClose } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
// import FeedbackModal from "./FeedbackModal";
// import SingleClass from "./SingleClass";
// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import useAuth from "../../../../hooks/useAuth";

const ManageStudents = () => {

  // Sample Data
  const admin_feedback = "Good work!"
  const isVerified = false;

  // const { user, loading, setLoading } = useAuth();
  // const [axiosSecure] = useAxiosSecure();

  // // Feedback Modal Open/Close State
  // const [isOpen, setIsOpen] = useState(false);

  // // Setting Class ID for Feedback
  // const [feedbackID, setFeedbackID] = useState("");

  // // Opening Feedback Modal
  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // // Closing Feedback Modal
  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  // // TODO: Change to AxiosSecure
  // const { data: allClassData = [], refetch } = useQuery({
  //   queryKey: ["allClassData", user?.email],
  //   enabled: !loading,
  //   queryFn: async () => {
  //     // const res = await axios.get(`${import.meta.env.VITE_API_URL}/classes`);
  //     const res = await axiosSecure.get(`/admin/manage-classes`);
  //     setLoading(false);
  //     // console.log(res?.data);
  //     return res?.data;
  //   },
  // });

  // const handleApprove = (classData) => {
  //   console.log("Inside Approve: ", classData._id);
  //   if (classData) {
  //     axiosSecure.patch(`/admin/approve-class/${classData._id}`).then(
  //       (data) => {
  //         console.log("Approve Status:", data?.data);
  //         if (data?.data.modifiedCount) {
  //           refetch();
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: `${classData.class_name} is approved!`,
  //             showConfirmButton: false,
  //             timer: 3000
  //           });
  //         }
  //       }
  //     );
  //   }
  // };

  // const handleDeny = (classData) => {
  //   console.log("Inside Deny: ", classData._id);
  //   if (classData) {
  //     axiosSecure.patch(`/admin/deny-class/${classData._id}`).then(
  //       (data) => {
  //         console.log("Deny Status:", data?.data);
  //         if (data?.data.modifiedCount) {
  //           refetch();
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: `${classData.class_name} is denied!`,
  //             showConfirmButton: false,
  //             timer: 3000
  //           });
  //         }
  //       }
  //     );
  //   }
  // };

  // const handleFeedback = (classData) => {
  //   openModal();
  //   // console.log("Feedback ID: ", classData._id);
  //   setFeedbackID(classData._id);
  // };

  return (
    <>
      <section className="max-w-full mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        {/* <div>
          <h1 className="text-3xl font-bold text-center mb-6">Total Classes: {allClassData?.length}</h1>
        </div> */}

        <div className="relative overflow-x-auto">
          <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  #
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Student&apos;s <br /> Image
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Student&apos;s <br /> Name
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Student&apos;s <br /> Email
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Location
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Subject(s)
                </th>
                {/* <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Enrolled <br /> Students
                </th> */}
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Salary <br /> (Monthly)
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Verification <br /> Status
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                  Feedback
                </th>
                <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
                  1
                </td>
                <td className="px-2 py-2 text-center border-r-2">
                  <div className="avatar flex items-center justify-center ">
                    <div className="w-24 rounded-xl">
                      <Image src="" alt={`Image of Tutor`} />
                    </div>
                  </div>
                </td>
                <td className="px-2 py-2 whitespace-nowrap border-r-2">
                  {/* {class_name} */}
                </td>
                <td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
                  {/* {instructor_name} */}
                </td>
                <td className="px-2 py-2 text-center border-r-2">
                  {/* {instructor_email} */}
                </td>
                <td className="px-2 py-2 text-center border-r-2">
                  {/* {available_seats} */}
                </td>
                <td className="px-2 py-2 text-center border-r-2">
                  {/* ${class_price} */}
                </td>
                <td className="px-2 py-2 text-center uppercase border-r-2">
                  {/* {class_status} */}
                </td>
                <td className="px-2 py-2 border-r-2">
                  {/* {admin_feedback} */}
                </td>
                <td className="px-2 py-2 text-center">
                  <button type="button" className="flex w-44 mx-auto justify-center items-center text-white bg-gradient-to-br from-green-500 to-green-600 transition-all hover:duration-300 hover:from-green-600 hover:to-green-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={isVerified} >
                    <GrValidate className='gr-icon w-4 h-4 mr-2' />
                    Approve
                  </button>
                  <button type="button" className="flex w-44 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={isVerified}>
                    <LuShieldClose className='gr-icon w-4 h-4 mr-2' />
                    Deny
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

      {/* FeedbackModal */}
      {/* <FeedbackModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} feedbackID={feedbackID}></FeedbackModal> */}
    </>
  );
};

export default ManageStudents;