"use client";


import useAuth from "@/hooks/useAuth";
// import createJWT from "@/utils/createJWT";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";


const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  const { user } = useAuth();



  const onSubmit = async (data, event) => {
    const { name, email, password } = data;
    const toastId = toast.loading("Loading...");
    // try {
    //   await createUser(email, password);
    // //   await createJWT({ email });
    //   await profileUpdate({
    //     displayName: name,
    //     photoURL: photo,
    //   });
      //user Data save mongodb start
      // const userData ={
      //   name: name,
      //   email: email,
      //   role: 'student',
      //   photo_URL: photo,
      //   registered_at: new Date()
      // }
      // userPost(userData)
      
      //user Data save mongodb end
    //   startTransition(() => {
    //     refresh();
    //     replace(from);
    //     toast.dismiss(toastId);
    //     toast.success("User signed in successfully");
    //   });
    // } catch (error) {
    //   toast.dismiss(toastId);
    //   toast.error(error.message || "User not signed in");
    // }
  };
 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body m-10">
        <h3 className="text-2xl text-black">Contact with This tutor</h3>
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
          type="text"
          placeholder="Your phone Number"
          id="phone"
          name="phone"
          className="input input-bordered"
          {...register("phone")}
        />
      </div>
      <div className="form-control">
        <label htmlFor="writeText" className="label label-text">
        Details Information
        </label>
        <textarea placeholder='Type Your Thinking' className=' w-full h-28 rounded-lg mt-2' 
          {...register("writeText")}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )}
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BookingForm;