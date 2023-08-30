"use client"
import { Select } from 'flowbite-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import Image from 'next/image';
import manImage1 from "@/assets/images/success/image2.jpg"



const people = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Admin' },
    { id: 3, name: 'Instructors' },
    { id: 4, name: 'Student' },
]

const Blogs = () => {

    const [selectedPerson, setSelectedPerson] = useState(people[0])

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    // console.log(selectedPerson);


    return (
        <div>
            <div className="">
                <form className='w-[95%] mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <textarea placeholder='Type Your Thinking' className=' w-full h-28 rounded-lg mt-2' {...register("Type Your Blogs", {})} />
                    <br />
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    <br />
                    <button className='bg-slate-600 p-2 rounded-md text-white hover:bg-slate-700' type='submit'>Submit</button>
                </form>
            </div>
            <div className="">
                <div className=" my-2">
                    <div className=" rounded-md flex justify-between">
                        <p></p>
                        <div className="lg:mr-[2%] bg-slate-500 p-2 rounded-md w-28 text-white text-center">
                            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                                <Listbox.Options>
                                    {people.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            value={person}
                                            disabled={person.unavailable}
                                        >
                                            {person.name}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Listbox>
                        </div>
                    </div>
                </div>
                {/* card One*/}
                <div className="my-4">
                    <div className={`bg-slate-500 text-white rounded-xl shadow-2xl shadow-slate-400 grid grid-cols-4 max-sm:grid-cols-1`}>
                        <div className="">
                            <Image className='object-cover h-[267px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"200"} />
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 my-2">
                            <div className="w-38 text-center flex">
                                <p className='p-2 mx-2 text-white rounded-md  border border-white bg-slate-500'>Name: mnopqerst</p>
                                <p className='p-2 text-white rounded-md bg-slate-500 border border-white'>Admin</p>
                            </div>
                            <p className='my-2 p-2'>Lore
                                m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem asperna
                            </p>
                        </div>
                    </div>
                </div>
                {/* card two*/}
                <div className="my-4">
                    {/* card one*/}
                    <div className={`${selectedPerson.name !== "Admin" ? " bg-white  rounded-xl shadow-2xl shadow-slate-400 grid grid-cols-4 max-sm:grid-cols-1" : "bg-slate-600 text-white rounded-xl shadow-2xl shadow-slate-400 grid grid-cols-4 max-sm:grid-cols-1"
                        }`}>
                        <div className="">
                            <Image className='object-cover h-[267px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"200"} />
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 my-2">
                            <div className="w-38 text-center flex">
                                <p className='p-2 mx-2 text-white  border border-white rounded-md bg-slate-500'>Name: PPrr</p>
                                <p className='p-2 text-white border border-white rounded-md bg-slate-500'>Instructors</p>
                            </div>
                            <p className='my-2 p-2'>Lore
                                m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem asperna
                            </p>
                        </div>
                    </div>
                </div>
                {/* card One*/}
                <div className="my-4">
                    <div className={`bg-slate-500 text-white rounded-xl shadow-2xl shadow-slate-400 grid grid-cols-4 max-sm:grid-cols-1`}>
                        <div className="">
                            <Image className='object-cover h-[267px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"200"} />
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 my-2">
                            <div className="w-38 text-center flex">
                                <p className='p-2 mx-2 text-white  border border-white rounded-md bg-slate-500'>Name: mnopqerst</p>
                                <p className='p-2 text-white rounded-md  border border-white bg-slate-500'>Admin</p>
                            </div>
                            <p className='my-2 p-2'>Lore
                                m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem asperna
                            </p>
                        </div>
                    </div>
                </div>
                {/* card three*/}
                <div className="my-4">
                    <div className={`${selectedPerson.name !== "Admin" ? " bg-white  rounded-xl shadow-2xl shadow-slate-400 grid grid-cols-4 max-sm:grid-cols-1" : "bg-slate-600 text-white rounded-xl shadow-2xl shadow-slate-400 grid grid-cols-4 max-sm:grid-cols-1"
                        }`}>
                        <div className="">
                            <Image className='object-cover h-[267px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-full' src={manImage1} alt='' placeholder='blur' width={"200"} />
                        </div>
                        <div className="lg:col-span-3 md:col-span-3 my-2">
                            <div className="w-38 text-center flex">
                                <p className='p-2 mx-2 text-white rounded-md  border border-white bg-slate-500'>Name: mnopqerst</p>
                                <p className='p-2 text-white rounded-md  border border-white bg-slate-500'>Student</p>
                            </div>
                            <p className='my-2 p-2'>Lore
                                m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem aspernatur asperiores sequi odit velit architecto dicta.m ipsum dolor sit amet consectetur adipisicing elit. Hic atque voluptatibus sunt autem asperna
                            </p>
                        </div>
                    </div>
                </div>
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