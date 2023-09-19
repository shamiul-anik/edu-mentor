"use client";


import useAuth from "@/hooks/useAuth";
// import createJWT from "@/utils/createJWT";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import studentMessagePost from "@/utils/studentMessagePost";
import { startTransition } from "react";
import { useRouter } from "next/navigation";



const BookingForm = ({tutorEmail}) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const { user, userRole } = useAuth();
  const { refresh } = useRouter();



  const onSubmit = async (data, event) => {
    const { name, email, className,  phoneNumber, gender, subject, location, detailsInfo } = data;
    const toastId = toast.loading("Loading...");
    try {
      // student_message collection save mongodb start
      const studentMessage ={
        tutor_email: tutorEmail,
        student_name: name,
        student_email: email,
        student_mobile_no: phoneNumber,
        subject_name:  subject,
        student_location: location,
        student_gender: gender,
        class_name: className,
        details:  detailsInfo,
      }
      console.log("StudentMessage", studentMessage);
      
      if(studentMessage){
        studentMessagePost(studentMessage)
        startTransition(() => {
          refresh();
          toast.dismiss(toastId);
          toast.success("booking data save in successfully");
        });
      }
      // Booking Data save mongodb start


    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "Booking Data not saved successfully");
    }
  };
  
 

  return (
    <>
            <h3 className="text-3xl text-white p-1 font-bold divide-x-2 divide-neutral-900 mb-4  bg-gradient-to-r from-[#29A2AA] to-[#c0332e]  ">Contact with This tutor</h3>
    <form onSubmit={handleSubmit(onSubmit)} className="card-body  border  border-gray-200">
    <div className="flex gap-4 justify-between">
    <div className="w-full">
    <div className="form-control">
        <label htmlFor="name" className="label label-text">
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          defaultValue={user?.displayName}
          
          id="name"
          name="name"
          className="input input-bordered"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email" className="label label-text">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          defaultValue={user?.email}
          
          className="input input-bordered"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="gender" className="label label-text">
          Gender
        </label>
        <select
    {...register("gender", { required: true })}
    className="input input-bordered"
  >
    <option value="" disabled selected>
      Select gender
    </option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
      </div>
    </div>
    <div className="w-full">
    <div className="form-control">
          <label 
          htmlFor="subject"
          className="label label-text"
          >Subject</label>
          <input
          type="text"
          id="subject"
          placeholder="Type subject"
          name= "subject"
          className="input input-bordered"
          {...register("subject", { required: true })}
          />
      </div>
      <div className="form-control">
          <label 
          htmlFor="className"
          className="label label-text"
          >Class</label>
          <input
          type="text"
          placeholder="Type Class name"
          id="className"
          name= "className"
          className="input input-bordered"
          {...register("className", { required: true })}
          />
      </div>
      <div className="form-control">
          <label 
          htmlFor="location"
          className="label label-text"
          >location</label>
          <input
          type="text"
          id="location"
          placeholder="Type location name"
          name= "location"
          className="input input-bordered"
          {...register("location", { required: true })}
          />
      </div>
    </div>
    </div>
    <div className="form-control">
        <label htmlFor="phone" className="label label-text">
          Phone Number
        </label>
        <input
        type="tel"
        placeholder="Phone number" 
        {...register("phoneNumber", {required: true, maxLength: 11})}
        className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label htmlFor="detailsInfo" className="label label-text">
        Details Information
        </label>
        <textarea placeholder='Type Your Available days' className=' w-full h-28 rounded-lg mt-2' 
          {...register("detailsInfo")}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Your Available days
          </span>
        )}
      </div>
      <div className="form-control mt-6">
        <button className={`btn   type="submit text-gray-300 ${userRole === "tutor" || userRole === "admin" ? "bg-gray-600" : "bg-cyan-700 hover:bg-cyan-800 hover:text-white"}`}
         disabled={(userRole === "tutor" || userRole === "admin") ? true : false}
         >
          {(userRole === "tutor" || userRole === "admin") ? "Disabled only student use" : "Send Message"}
        </button>
      </div>
    </form>
    </>
  );
};

export default BookingForm;