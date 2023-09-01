"use client"
import { Select } from 'flowbite-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Aos from "aos";
import BlogCard from './BlogCard';
import { toast } from 'react-hot-toast';
import useAuth from '@/hooks/useAuth';


const people = [
    { name: 'All' },
    { name: 'Admin' },
    { name: 'Instructors' },
    { name: 'student' },
]


const Blogs = () => {

    const [selected, setSelected] = useState(people[0])
    const [blogs, setBlogs] = useState([])

    // const [selected, setSelected] = useState('All'); // Default to 'all'

    useEffect(() => {
        Aos.init({ duration: 1000 });

        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await res.json();

                // Filter the data based on the selected role
                let filteredData;

                if (selected.name === 'All') {
                    // If 'all' is selected, show all data
                    console.log(selected, '47');

                    filteredData = data;
                } else {
                    // Filter data for the selected role
                    filteredData = data.filter(item => item.role === selected.name);
                }

                setBlogs(filteredData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();

    }, [selected]);
    const toDay = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const year = today.getFullYear(); 
        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate
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

            } else {
                // File has an invalid extension
                toast.error('Invalid Image Extension: ' + fileExtension)
            }
        }

    }

    return (
        <div className='text-sm'>
            <div className="">
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
            <div className="w-[90%] mx-auto">
                <div className=" my-2">
                    <div className=" rounded-md flex justify-between">
                        <p></p>
                        <div className="lg:mr-[2%] rounded-md w-44 text-center">

                            <Listbox value={selected} onChange={setSelected}>
                                <div className="relative mt-1">
                                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span className="block truncate">{selected.name}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {people.map((person, personIdx) => (
                                                <Listbox.Option
                                                    key={personIdx}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                        }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {person.name}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>
                </div>

                {
                    blogs.map((blog, index) => <BlogCard key={index} blog={blog} selected={selected} setSelected={setSelected} > </BlogCard>)
                }

                {/* extra */}
                {/* <div className="mx-[15%]">
                    <div className={`bg-slate-600 text-white rounded-xl shadow-2xl shadow-slate-400 `}>
                        <div className=" h-52">
                            <Image className='object-cover h-52 rounded-md' src={currying} alt='' placeholder='blur' />
                        </div>
                        <div className=" my-2 ">
                            <div className=" lg:mx-10 text-center flex ">
                                <div className="">
                                    <Image className='object-cover h-[50px] max-sm:mx-auto max-md:mx-auto mx-2 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"50"} />
                                </div>
                                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-white">
                                    <p className='p-2 sm:text-sm mx-2  rounded-md '>Rebold</p>
                                    <p className='p-2 sm:text-sm rounded-md '>Admin</p>
                                    <p className='max-sm:col-span-2 mx-1'>date: 28-8-22023</p>
                                </div>
                            </div>
                            <p className='my-2 p-2'>A JavaScript curry funcFtion is a powerful tool for function composition and partial application. It allows you to transform a function that takes multiple arguments into a series of functions that each take one argument. This enables you to create reusable and more modular code. <br /> <span><a className='text-blue-500' href="">Read more...</a></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-[15%]">
                    <div className={` rounded-xl shadow-2xl shadow-slate-400 `}>
                        <div className=" h-52">
                            <Image className='object-cover h-52 rounded-md' src={currying} alt='' placeholder='blur' />
                        </div>
                        <div className=" my-2 ">
                            <div className=" lg:mx-10 text-center flex ">
                                <div className="">
                                    <Image className='object-cover h-[50px] max-sm:mx-auto max-md:mx-auto mx-2 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"50"} />
                                </div>
                                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] ">
                                    <p className='p-2 sm:text-sm mx-2  rounded-md '>Rebold</p>
                                    <p className='p-2 sm:text-sm rounded-md '>Admin</p>
                                    <p className='max-sm:col-span-2 mx-1'>date: 28-8-22023</p>
                                </div>
                            </div>
                            <p className='my-2 p-2'>A JavaScript curry funcFtion is a powerful tool for function composition and partial application. It allows you to transform a function that takes multiple arguments into a series of functions that each take one argument. This enables you to create reusable and more modular code. <br /> <span><a className='text-blue-500' href="">Read more...</a></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-[15%]">
                    <div className={`bg-slate-600 text-white rounded-xl shadow-2xl shadow-slate-400 `}>
                        <div className=" h-52">
                            <Image className='object-cover h-52 rounded-md' src={currying} alt='' placeholder='blur' />
                        </div>
                        <div className=" my-2 ">
                            <div className=" lg:mx-10 text-center flex ">
                                <div className="">
                                    <Image className='object-cover h-[50px] max-sm:mx-auto max-md:mx-auto mx-2 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"50"} />
                                </div>
                                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-white">
                                    <p className='p-2 sm:text-sm mx-2  rounded-md '>Rebold</p>
                                    <p className='p-2 sm:text-sm rounded-md '>Admin</p>
                                    <p className='max-sm:col-span-2 mx-1'>date: 28-8-22023</p>
                                </div>
                            </div>
                            <p className='my-2 p-2'>A JavaScript curry funcFtion is a powerful tool for function composition and partial application. It allows you to transform a function that takes multiple arguments into a series of functions that each take one argument. This enables you to create reusable and more modular code. <br /> <span><a className='text-blue-500' href="">Read more...</a></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-[15%]">
                    <div className={`rounded-xl shadow-2xl shadow-slate-400 `}>
                        <div className=" h-52">
                            <Image className='object-cover h-52 rounded-md' src={currying} alt='' placeholder='blur' />
                        </div>
                        <div className=" my-2 ">
                            <div className=" lg:mx-10 text-center flex ">
                                <div className="">
                                    <Image className='object-cover h-[50px] max-sm:mx-auto max-md:mx-auto mx-2 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"50"} />
                                </div>
                                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] ">
                                    <p className='p-2 sm:text-sm mx-2  rounded-md '>Rebold</p>
                                    <p className='p-2 sm:text-sm rounded-md '>Admin</p>
                                    <p className='max-sm:col-span-2 mx-1'>date: 28-8-22023</p>
                                </div>
                            </div>
                            <p className='my-2 p-2'>A JavaScript curry funcFtion is a powerful tool for function composition and partial application. It allows you to transform a function that takes multiple arguments into a series of functions that each take one argument. This enables you to create reusable and more modular code. <br /> <span><a className='text-blue-500' href="">Read more...</a></span>
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* extra */}
            </div>
            <div className=" lg:w-[50%] w-[80%] text-center mx-auto mt-10">
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn btn-disabled">...</button>
                    <button className="join-item btn">99</button>
                    <button className="join-item btn">100</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;