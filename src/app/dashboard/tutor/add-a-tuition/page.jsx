"use client"
// import AddClassImage from '../../../../assets/images/language-banner.jpg';
import { Fade } from "react-awesome-reveal";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { useTitle } from '../../../../hooks/useTitle';
// import useAuth from '../../../../hooks/useAuth';
import useAuth from '@/hooks/useAuth';
import Image from 'next/image';

const AddATuition = () => {

  // useTitle("Add a Class");

  const { user } = useAuth();

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const currentUserName = user?.displayName;
  const currentUserEmail = user?.email;

  const onSubmit = (classInfo) => {
    console.log(classInfo);

    // const classDetails = {
    //   class_name: classInfo.class_name,
    //   class_image: classInfo.class_image,
    //   instructor_name: classInfo.instructor_name,
    //   instructor_email: classInfo.instructor_email,
    //   available_seats: parseFloat(classInfo.available_seats),
    //   enrolled_students: parseFloat(0),
    //   class_price: parseFloat(classInfo.price),
    //   class_status: "pending"
    // }
    // console.log(classDetails);
    // if (user && user.email) {
    //   axios.post(`${import.meta.env.VITE_API_URL}/add-a-tuition`, classDetails)
    //     .then((data) => {
    //       console.log(data.data);
    //       if (data?.data?.insertedId) {
    //         reset();
    //         Swal.fire({
    //           position: 'center',
    //           icon: 'success',
    //           title: 'Class added successfully!',
    //           showConfirmButton: true,
    //           timer: 3000
    //         })
    //       }
    //     });
    // }
  };

  return (
    <>
      <header>
        <h1 className="text-5xl text-teal-700 font-bold text-center mt-4 lg:mt-8">
          <Fade duration={200} triggerOnce={true} cascade>Add a Tuition</Fade>
        </h1>
      </header>
      <section className="flex flex-col md:flex-row gap-4 md:gap-12 items-center max-w-7xl mx-auto mt-6 lg:mt-12 p-4 md:p-8 rounded-3xl">
        {/* <div>
          <Image className="w-full min-w-[350px] image-full" src={AddClassImage} alt="Add Class Image" />
        </div> */}
        <div className="flex card card-compact w-full bg-base-100 px-0 md:px-4 py-2 md:py-7 box-shadow-custom">

          <div className="flex-1 mb-2">
            <h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Enter Tuition Details</h3>
          </div>

          <div className='border-t border-slate-300 my-2 mx-6 md:mx-8'></div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="!px-6 md:!px-8 !pt-2 card-body">
              
              <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="form-control">
                  <label className="label pl-0" htmlFor="tutorName">
                    <span className="label-text text-md md:text-[16px]">Tutor&apos;s Name</span>
                  </label>
                  <input type="text" id="tutorName" {...register("tutor_name", { required: true })} name="tutor_name" placeholder="Tutor's name" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" defaultValue={currentUserName} readOnly />
                  {errors?.tutor_name && <p className="text-red-500 mt-2"> Tutor&apos;s name is required!</p>} {/* Error Message */}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="tutorEmail">
                    <span className="label-text text-md md:text-[16px]">Tutor&apos;s Email</span>
                  </label>
                  <input type="email" id="tutorEmail" {...register("tutor_email", { required: true })} name="tutor_email" placeholder="Tutor's email address" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" defaultValue={currentUserEmail} readOnly />
                  {errors?.tutor_email && <p className="text-red-500 mt-2">Tutor&apos;s email is required!</p>} {/* Error Message */}
                </div>
              </div>
              
              <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="form-control">
                  <label className="label pl-0" htmlFor="subject">
                    <span className="label-text text-md md:text-[16px]">Subject</span>
                  </label>
                  <input type="text" id="subject" {...register("subject", { required: true })} name="subject" placeholder="Enter subject" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.subject?.type === 'required' && <p className="text-red-500 mt-2">Subject is required!</p>}
                </div>
                
                <div className="form-control">
                  <label className="label pl-0" htmlFor="className">
                    <span className="label-text text-md md:text-[16px]">Class</span>
                  </label>
                  <input type="text" id="className" {...register("class_name", { required: true })} name="class_name" placeholder="Enter class name" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.class_name?.type === 'required' && <p className="text-red-500 mt-2">Class name is required!</p>}
                </div>
              </div>
              
              <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="form-control">
                  <label className="label pl-0" htmlFor="mobile">
                    <span className="label-text text-md md:text-[16px]">Mobile No.</span>
                  </label>
                  <input type="text" id="mobile" {...register("mobile", { required: true, pattern: { value: /^(\d+\.?\d*|\.\d+)$/ } })} name="mobile" placeholder="Enter your mobile no." className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.mobile?.type === 'required' && <p className="text-red-500 mt-2">Mobile no. is required!</p>}
                  {errors?.mobile?.type === 'pattern' && <p className="text-red-500 mt-2">Only numbers are allowed!</p>}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="salary">
                    <span className="label-text text-md md:text-[16px]">Salary</span>
                  </label>
                  <input type="text" id="salary" {...register("salary", { required: true, pattern: { value: /^(\d+\.?\d*|\.\d+)$/ } })} name="salary" placeholder="Enter your salary" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.salary?.type === 'required' && <p className="text-red-500 mt-2">Salary is required!</p>} {/* Error Message */}
                  {errors?.salary?.type === 'pattern' && <p className="text-red-500 mt-2">Only numbers are allowed!</p>}
                </div>
              </div>
              
              <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="form-control">
                  <label className="label pl-0" htmlFor="gender">
                    <span className="label-text text-md md:text-[16px]">Gender</span>
                  </label>
                  <input type="text" id="gender" {...register("gender", { required: true })} name="gender" placeholder="Enter your gender" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.gender?.type === 'required' && <p className="text-red-500 mt-2">Gender is required!</p>}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="qualification">
                    <span className="label-text text-md md:text-[16px]">Qualification</span>
                  </label>
                  <input type="text" id="qualification" {...register("qualification", { required: true })} name="qualification" placeholder="Enter your qualification" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.qualification?.type === 'required' && <p className="text-red-500 mt-2"> Qualification is required!</p>}
                </div>
              </div>

              <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
                <div className="form-control">
                  <label className="label pl-0" htmlFor="location">
                    <span className="label-text text-md md:text-[16px]">Tutor&apos;s Location</span>
                  </label>
                  <input type="text" id="location" {...register("location", { required: true  })} name="location" placeholder="Enter your location" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.location?.type === 'required' && <p className="text-red-500 mt-2">Tutor&apos;s Location is required!</p>}
                </div>

                <div className="form-control">
                  <label className="label pl-0" htmlFor="availableDays">
                    <span className="label-text text-md md:text-[16px]">Available Days</span>
                  </label>
                  <input type="text" id="availableDays" {...register("available_days", { required: true, pattern: { value: /^(\d+\.?\d*|\.\d+)$/ } })} name="available_days" placeholder="Enter your available days" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                  {errors?.available_days?.type === 'required' && <p className="text-red-500 mt-2">Available Days are required!</p>} {/* Error Message */}
                  {errors?.available_days?.type === 'pattern' && <p className="text-red-500 mt-2">Only numbers are allowed!</p>}
                </div>
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="serviceLocation">
                  <span className="label-text text-md md:text-[16px]">Service Location</span>
                </label>
                <input type="text" id="serviceLocation" {...register("service_location", { required: true })} name="service_location" placeholder="Enter service location information" className="input input-bordered input-sm py-5 text-[14px] focus:ring-teal-400 focus:border-teal-400 focus:outline-teal-300" />
                {errors?.service_location?.type === 'required' && <p className="text-red-500 mt-2">Service Location is required!</p>}
              </div>


              <div className="form-control mt-3">
                <button type="submit" className="text-white bg-gradient-to-br from-teal-500 to-teal-600 ring-2 ring-offset-1 ring-teal-500 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Add a Tuition</button>
              </div>
            </div>
          </form>

        </div>
      </section>
    </>
  );
};

export default AddATuition;