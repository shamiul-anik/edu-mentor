"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const Blogs = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("Type Your Blogs", {})} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Blogs;