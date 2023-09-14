"use client"
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import blogPostApi from "@/utils/blogPostApi"

const PostBlog = () => {
    const router = useRouter();
    const { user } = useAuth();

    // console.log(" post blog page 17", user.email);
    const [blogPostImageUrl, setBlogPostImageUrl] = useState('')
    const [storeUserData, setStoreUserData] = useState([])


    const toDay = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate
    }

    const navigate = () => {
        router.push('/blogs');
    }

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();


    const uploadImage = async (event) => {
        const formData = new FormData();
        // if (!event.target.files[0]) return;

        const selectedImageFile = event.target.files[0]
        if (selectedImageFile) {
            const fileName = selectedImageFile.name;
            const fileExtension = fileName.split('.').pop().toLowerCase();
            // Define allowed extensions
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

            if (allowedExtensions.includes(fileExtension)) {
                //   console.log('Valid file extension: ' + fileExtension);
            } else {
                // File has an invalid extension
                return toast.error('Invalid Image Extension: ' + fileExtension)
            }
        }

        formData.append("image", event.target.files[0]);
        const toastId = toast.loading("Progressing Image...");
        try {
            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=1cc8373b2b72da27fdf6f46447e5d7a8`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!res.ok) throw new Error("😞 Failed to upload image");

            const data = await res.json();
            toast.dismiss(toastId);
            toast.success("Progressing Image successfully!");
            setValue("photo", data.data.url);
            setBlogPostImageUrl(data.data.url)
            console.log('49', data.data.url);

        } catch (error) {
            toast.error(`Progressing !😞! Error `);
            toast.dismiss(toastId);
        }
    };

    const onSubmit = async (data) => {
        const postImgUrl = blogPostImageUrl;
        const postDescription = data.words;
        const postDate = toDay();
        const userName = user.displayName;
        const userRole = "student"
        const userEmail = user.email

        const allData = {
            postImgUrl, postDescription, postDate, userName, userRole
        }
        
        // console.log("91",allData);
        blogPostApi(allData)
        // navigate()

    }
    return (
        <div>
            <form className='w-[95%] mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <textarea placeholder='Type Your Thinking' className=' w-full h-28 rounded-lg mt-2' {...register("words", {})} />
                <br />
                <label className='form-label' htmlFor='xmlFile'>
                    Image Upload
                </label>
                <input
                    type='file'
                    className='form-control rounded-md'
                    id='xmlFile'
                    // {...register('imageFile')}
                    onChange={uploadImage}
                />
                <button className='bg-slate-600 py-2 px-4 max-sm:ml-[65%] ml-1 rounded-md my-2 text-white hover:bg-slate-700' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default PostBlog;