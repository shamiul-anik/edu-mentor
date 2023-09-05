"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';



const PostBlog = () => {
    const router = useRouter();
    const toDay = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate
    }

    const navigate = () =>{
        router.push('/blogs');
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const selectedImageFile = data.imageFile[0];
        const postImgUrl = data.imageFile[0].name;
        const postDescription = data.words;
        const postDate = toDay();

        const allData = {
            postImgUrl, postDescription, postDate
        }

        if (selectedImageFile) {
            const fileName = selectedImageFile.name;
            const fileExtension = fileName.split('.').pop().toLowerCase();

            // Define allowed extensions
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

            if (allowedExtensions.includes(fileExtension)) {
                //   console.log('Valid file extension: ' + fileExtension);
                console.log("data", allData);
                toast.success('Thank Your Blogs')
                navigate()
            } else {
                // File has an invalid extension
                toast.error('Invalid Image Extension: ' + fileExtension)
            }
        }

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
                    {...register('imageFile')}
                />
                <button className='bg-slate-600 py-2 px-4 max-sm:ml-[65%] ml-1 rounded-md my-2 text-white hover:bg-slate-700' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default PostBlog;