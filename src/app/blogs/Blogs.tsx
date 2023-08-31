"use client"
import { Select } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image';
import manImage1 from "@/assets/images/success/image2.jpg"
import currying from "@/assets/blogimg/what-is-currying.png"
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


const people = [
    { name: 'All' },
    { name: 'Admin' },
    { name: 'Instructors' },
    { name: 'Student' },
]

const Blogs = () => {

    const [selected, setSelected] = useState(people[0])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    console.log(selected);


    return (
        <div className='text-sm'>
            <div className="">
                <form className='w-[95%] mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <textarea placeholder='Type Your Thinking' className=' w-full h-28 rounded-lg mt-2' {...register("Type Your Blogs", {})} />
                    <br />
                    {/* <input type="file" className="file-input file-input-bordered lg:w-[30%] w-full max-w-xs" />
                    <br /> */}
                    <label className='form-label' htmlFor='xmlFile'>
                        Image Upload
                    </label>
                    <input
                        type='file'
                        className='form-control rounded-md'
                        id='xmlFile'
                        name='image-file'
                        {...register('image-file')}
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
                {/* card One*/}
                <div className="my-4">
                    <div className={`bg-slate-600 text-white rounded-xl shadow-2xl shadow-slate-400 lg:grid lg:grid-cols-4`}>
                        <div className="my-2 lg:col-span-1">
                            <Image className='object-cover p-2 mx-auto rounded-md' src={currying} alt='' placeholder='blur' />
                        </div>
                        <div className="lg:col-span-3 my-2 mx-1">
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
                {/* card two*/}
                <div className="my-4">
                    {/* card one*/}
                    <div className={`${selected.name !== "Admin" ? "mx-1 bg-white rounded-xl shadow-2xl lg:grid lg:grid-cols-4 shadow-slate-400 " : "mx-1 bg-slate-600 text-white rounded-xl shadow-2xl shadow-slate-400 lg:grid lg:grid-cols-4"
                        }`}>
                        <div className="my-2 lg:col-span-1">
                            <Image className='object-cover p-2 mx-auto rounded-md' src={currying} alt='' placeholder='blur' />
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 my-2 ">
                            <div className=" lg:mx-10 text-center flex ">
                                <div className="">
                                    <Image className='object-cover h-[50px] max-sm:mx-auto max-md:mx-auto mx-2 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"50"} />
                                </div>
                                <div
                                    //  className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-slate-500 "
                                    className={`${selected.name !== "Admin" ? " grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-slate-600 " : "grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-white"
                                        }`}
                                >
                                    <p className='p-2 h-10 sm:text-sm '>Pekachu</p>
                                    <p className='p-2 h-10 sm:text-sm '>Inestructor</p>
                                    <p className='max-sm:col-span-2 h-10 mx-1'>date: 24-8-22023</p>
                                </div>
                            </div>
                            <p className='my-2 p-2'>A JavaScript curry function is a powerful tool for function composition and partial application. It allows you to transform a function that takes multiple arguments into a series of functions that each take one argument. This enables you to create reusable and more modular code.code, enhances reusability, and improves code maintainability. It a powerful concept in JavaScript functional programming.  <br /> <span><a className='text-blue-500' href="">Read more...</a></span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* card One*/}
                <div className="my-4">
                    <div className={`bg-slate-500 text-white rounded-xl shadow-2xl shadow-slate-400 grid grid-cols-4 max-sm:grid-cols-1`}>
                        <div className="my-2 lg:col-span-1">
                            <Image className='object-cover p-2 mx-auto rounded-md' src={currying} alt='' placeholder='blur' />
                        </div>
                        <div className="lg:col-span-3 my-2 ">
                            <div className=" lg:mx-10 text-center flex ">
                                <div className="">
                                    <Image className='object-cover h-[50px] max-sm:mx-auto max-md:mx-auto mx-2 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"50"} />
                                </div>
                                <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-white">
                                    <p className='p-2 sm:text-sm mx-2  rounded-md '>Rebold</p>
                                    <p className='p-2 sm:text-sm rounded-md '>Admin</p>
                                    <p className='max-sm:col-span-2 mx-1'>date: 20-8-22023</p>
                                </div>
                            </div>
                            <p className='my-2 p-2'>A JavaScript curry funcFtion is a powerful tool for function composition and partial application. It allows you to transform a function that takes multiple arguments into a series of functions that each take one argument. This enables you to create reusable and more modular code. <br /> <span><a className='text-blue-500' href="">Read more...</a></span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* card two*/}
                <div className="my-4">
                    {/* card one*/}
                    <div className={`${selected.name !== "Admin" ? " bg-white rounded-xl shadow-2xl lg:grid lg:grid-cols-4 shadow-slate-400 " : "bg-slate-600 text-white rounded-xl shadow-2xl shadow-slate-400 lg:grid lg:grid-cols-4"
                        }`}>
                        <div className="my-2 lg:col-span-1">
                            <Image className='object-cover p-2 mx-auto rounded-md' src={currying} alt='' placeholder='blur' />
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 my-2 ">
                            <div className=" lg:mx-10 text-center flex ">
                                <div className="">
                                    <Image className='object-cover h-[50px] max-sm:mx-auto max-md:mx-auto mx-2 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"50"} />
                                </div>
                                <div
                                    //  className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-slate-500 "
                                    className={`${selected.name !== "Admin" ? " grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-slate-600 " : "grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-white"
                                        }`}
                                >
                                    <p className='p-2 h-10 sm:text-sm '>Pekachu</p>
                                    <p className='p-2 h-10 sm:text-sm '>Student</p>
                                    <p className='max-sm:col-span-2 h-10 mx-1'>date: 18-8-22023</p>
                                </div>
                            </div>
                            <p className='my-2 p-2'>A JavaScript curry function is a powerful tool for function composition and partial application. It allows you to transform a function that takes multiple arguments into a series of functions that each take one argument. This enables you to create reusable and more modular code.code, enhances reusability, and improves code maintainability. It a powerful concept in JavaScript functional programming.  <br /> <span><a className='text-blue-500' href="">Read more...</a></span>
                            </p>
                        </div>
                    </div>
                </div>
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