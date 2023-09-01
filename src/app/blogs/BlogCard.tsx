import Image from 'next/image';
import React from 'react';
import currying from "@/assets/blogimg/what-is-currying.png"
import manImage1 from "@/assets/images/success/image2.jpg"

const BlogCard = (  { blog } ) => {
    const blur ="https://i.ibb.co/gSgNWbc/blur.jpg"

    const {postDate, postDescription, role, userImgUrl, userName, _id, postImgUrl} = blog
    // console.log(blog);
    
    return (
        <div className="my-4">
            {/* card one*/}
            <div className={`${role !== "Admin" ? "mx-1 bg-white rounded-xl shadow-2xl lg:grid lg:grid-cols-4 shadow-slate-400 " : "mx-1 bg-slate-600 text-white rounded-xl shadow-2xl shadow-slate-400 lg:grid lg:grid-cols-4"
                }`}>
                <div className="my-2 lg:col-span-1">
                    <Image className='object-cover p-2 mx-auto rounded-md' width={300} height={300} src={postImgUrl} alt='' placeholder='https://i.ibb.co/gSgNWbc/blur.jpg'/>
                </div>
                <div className="lg:col-span-3 md:col-span-3 my-2 ">
                    <div className=" lg:mx-10 text-center flex ">
                        <div className="">
                            <Image className='object-cover h-[50px] max-sm:mx-auto max-md:mx-auto mx-2 my-4 rounded-full' src={manImage1} alt=''  width={50} />
                        </div>
                        <div
                            //  className="grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-slate-500 "
                            className={`${role !== "Admin" ? " grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-slate-700 " : "grid grid-cols-3 max-sm:grid-cols-2 gap-2 py-[3%] text-white"
                                }`}
                        >
                            <p className='p-2 h-10 sm:text-sm '>{userName}</p>
                            <p className='p-2 h-10 sm:text-sm '>{role}</p>
                            <p className='max-sm:col-span-2 h-10 mx-1'>{postDate}</p>
                        </div>
                    </div>
                    <p className='my-2 p-2'>{postDescription} <br /> <span><a className='text-blue-600' href="">Read more...</a></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;