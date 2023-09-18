"use client";


import useAuth from "@/hooks/useAuth";
// import createJWT from "@/utils/createJWT";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import bookingPost from "@/utils/bookingPost";
import { startTransition } from "react";
import { useRouter } from "next/navigation";



const BookingForm = (data) => {
  const {id} = data
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const { user } = useAuth();
  const { refresh } = useRouter();



  const onSubmit = async (data, event) => {
    const { name, email, phoneNumber, subject, location, salary, detailsInfo } = data;
    const toastId = toast.loading("Loading...");
    try {
      // Booking Data save mongodb start
      const bookingData ={
        tutorId: id,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        subject:  subject,
        location: location,
        salary: salary,
        detailsInfo:  detailsInfo,
      }
      
      if(bookingData){
        // bookingPost(bookingData)
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
          {...register("subject")}
          />
      </div>
      <div className="form-control">
          <label 
          htmlFor="location"
          className="label label-text"
          >Location</label>
          <input
          type="text"
          placeholder="Type location"
          id="location"
          name= "location"
          className="input input-bordered"
          {...register("location")}
          />
      </div>
      <div className="form-control">
          <label 
          htmlFor="salary"
          className="label label-text"
          >Salary</label>
          <input
          type="text"
          id="salary"
          placeholder="expected tuition fees"
          name= "subject"
          className="input input-bordered"
          {...register("salary")}
          />
      </div>
    </div>
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
        <button className="btn btn-primary bg-gradient-to-r from-[#29A2AA] to-[#c0332e] hover:from-[#c0332e] hover:to-[#29A2AA]" type="submit">
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default BookingForm;