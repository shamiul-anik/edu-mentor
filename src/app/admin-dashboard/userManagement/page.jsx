"use client"
import React, { useEffect, useState } from 'react';
import Chart from '../Chart';
import CommonBanner from '@/components/(shared)/CommonHeader/CommonBanner';
import { useForm } from 'react-hook-form';
import getUser from '@/utils/getUser';
import Image from 'next/image';
import toast from 'react-hot-toast';


const page = () => {
    const [allUser, setAllUser] = useState([]);
    // const {updatedAt, role, qualification, photoURL, mobileNumber, location, isVerified, gender, email, displayName, createdAt} = allUser;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const searchData = data.IdOrEmail;
        console.log(searchData)

    };

    useEffect(async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-user`, { cache: "no-cache" });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAllUser(data)
            // console.log("data", data);

            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }

    }, [])
const admin = () =>{
    toast.success("Change Successful Admin");
}
const tutor = () =>{
    toast.success("Change Successful Tutor");
}
const student = () =>{
    toast.success("Change Successful Student");
}
    return (
        <div>
            <div className="">
                <CommonBanner bannerHeading="User Management"></CommonBanner>
                <div className=" ">
                    <div className="mx-auto text-center ">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <input type="search" placeholder="Type Id Or Email" {...register("IdOrEmail", {})} className=' rounded-md m-2' />

                            <button type='submit' className=' bg-slate-500 p-2 rounded-lg text-white'> Search</button>
                        </form>
                    </div>
                    <div className="w-[98%]  mx-auto overflow-y-auto h-96">
                        <table className="table ">
                            {/* head */}
                            <thead className=''>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                    <th>Total User: {allUser.length}</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {/* row 1 */}
                                {
                                    allUser.map((item, index) =>
                                        <tr item={item} key={index}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <Image className='object-cover rounded-full' src={item.photoURL} alt='' width={40} height={40} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{item.displayName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.role}</td>
                                            <th>
                                                {
                                                    item.role == "admin" ?
                                                        <div className="">
                                                            <button onClick={tutor} className="btn btn-ghost btn-xs mx-2 bg-slate-400">Tutor</button>
                                                            <button onClick={student} className="btn btn-ghost btn-xs bg-slate-400">Student</button>
                                                        </div>
                                                        : item.role == "student" ?
                                                            <div className="">
                                                                <button onClick={admin} className="btn btn-ghost btn-xs bg-slate-400 mx-2 ">Admin</button>
                                                                <button onClick={tutor} className="btn btn-ghost btn-xs bg-slate-400">Tutor</button>
                                                            </div>
                                                            :
                                                            <div className="">
                                                                <button onClick={admin} className="btn btn-ghost btn-xs bg-slate-400 mx-2">Admin</button>
                                                                <button onClick={student} className="btn btn-ghost btn-xs bg-slate-400">Student</button>
                                                            </div>
                                                }
                                            </th>
                                        </tr>
                                    )
                                }
                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;