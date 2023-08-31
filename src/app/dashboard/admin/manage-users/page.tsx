// import { useQuery } from "@tanstack/react-query";
// import SingleUser from "./SingleUser";
// import Swal from "sweetalert2";
// import { useTitle } from "../../../../hooks/useTitle";
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import useAuth from "../../../../hooks/useAuth";
import Link from "next/link";
import { GrUserAdmin } from 'react-icons/gr';
import { FaChalkboardTeacher } from "react-icons/fa";
import Image from "next/image";

const ManageUsers = () => {

  const role = "admin";
  // const { user, setUserRole, loading, setLoading } = useAuth();
  // // const [disableInstructorBtn, setDisableInstructorBtn] = useState(false);
  // // const [disableAdminBtn, setDisableAdminBtn] = useState(false);
  // const [axiosSecure] = useAxiosSecure();

  // // TODO: Change to AxiosSecure
  // const { data: usersData = [], refetch } = useQuery({
  //   queryKey: ["usersData", user?.email],
  //   enabled: !loading,
  //   queryFn: async () => {
  //     // const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
  //     const res = await axiosSecure.get(`/admin/manage-users`);
  //     // console.log(res);
  //     setLoading(false);
  //     return res?.data;
  //   },
  // })

  // const handleMakeInstructor = (userInfo) => {
  //   console.log("Inside Make Instructor: ", user._id);
  //   if (userInfo) {
  //     axiosSecure.patch(`/admin/make-instructor/${userInfo._id}`).then(
  //       (data) => {
  //         // console.log("Data:", data?.data);
  //         if (data?.data.modifiedCount) {
  //           if (user?.email === userInfo.email) {
  //             setUserRole("instructor");
  //           }
  //           refetch();
  //           // setDisableInstructorBtn(true);
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: `${userInfo.name} is an Instructor Now!`,
  //             showConfirmButton: false,
  //             timer: 3000
  //           });
  //         }
  //       }
  //     );
  //   }
  // };
  
  // const handleMakeAdmin = (userInfo) => {
  //   console.log("Inside Make Admin: ", user._id);
  //   if (userInfo) {
  //     axiosSecure.patch(`/admin/make-admin/${userInfo._id}`).then(
  //       (data) => {
  //         // console.log("Data:", data?.data);
  //         if(data?.data.modifiedCount) {
  //           if (user?.email === userInfo.email) {
  //             setUserRole("admin");
  //           }
  //           refetch();
  //           // setDisableAdminBtn(true);
  //           // toast.success(`${user.name} is an Admin now!`);
  //           Swal.fire({
  //             position: 'center',
  //             icon: 'success',
  //             title: `${userInfo.name} is an Admin Now!`,
  //             showConfirmButton: false,
  //             timer: 3000
  //           });
  //         }
  //       }
  //     );
  //   }
  // };

  return (
    <section className="max-w-full mx-auto mt-4 lg:mt-8 p-4 md:px-0">
      
      {/* <div>
        <h1 className="text-3xl font-bold text-center mb-6">Total Users: {usersData.length}</h1>
      </div> */}

      <div className="relative overflow-x-auto">
        <table className="border-2 border-slate-200 w-full text-sm text-left text-gray-1000 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                #
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Photo
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Name
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Email
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2 border-r-2">
                Role
              </th>
              <th scope="col" className="text-center bg-gray-100 px-3 py-4 border-b-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {
              usersData?.map((user, index) => <SingleUser key={user._id} user={user} index={index} handleMakeInstructor={handleMakeInstructor} handleMakeAdmin={handleMakeAdmin}></SingleUser>)
            } */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-2 py-2 whitespace-nowrap text-center border-r-2">
                {/* {index + 1} */}
              </td>
              <td className="px-2 py-2 text-center border-r-2">
                <div className="avatar flex items-center justify-center">
                  <div className="w-24 rounded-xl">
                    <Image src="" alt={`Profile of Name`} />
                  </div>
                </div>
              </td>
              <td className="px-2 py-2 text-center border-r-2">
                {/* {name} */}
              </td>
              <td className="px-2 py-2 text-center border-r-2">
                {/* {email} */}
              </td>
              <td className="px-2 py-2 text-center uppercase border-r-2">
                {/* {role} */}
              </td>
              <td className="px-2 py-2 text-center">
                {/* <Link> */}
                  <button type="button" className="flex w-40 mx-auto justify-center items-center text-white bg-gradient-to-br from-teal-500 to-teal-600 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-teal-200 dark:focus:ring-teal-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={role === "tutors"}>
                    <FaChalkboardTeacher className='w-4 h-4 mr-2' />
                    Make Tutor
                  </button>
                {/* </Link> */}
                {/* <Link> */}
                  <button type="button" className="flex w-40 mx-auto mt-2 justify-center items-center text-white bg-gradient-to-br from-red-500 to-red-600 transition-all hover:duration-300 hover:from-red-600 hover:to-red-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-normal rounded-md text-md px-3 py-2 text-center disabled:from-slate-600 disabled:to-slate-700" disabled={role === "admin"}>
                    <GrUserAdmin className='gr-icon w-4 h-4 mr-2' />
                    Make Admin
                  </button>
                {/* </Link> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default ManageUsers;