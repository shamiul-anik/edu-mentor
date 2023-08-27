import React from 'react';
import Blogs from './Blogs';
import CommonBanner from '@/components/(shared)/CommonHeader/CommonBanner';


const Blog = () => {

  

    return (
        <div>
            {/* bg-teal-700 py-2 */}
            <CommonBanner bannerHeading="Blogs"></CommonBanner>
            <h1 className='text-center text-xl my-2'>Blog</h1>
            <Blogs></Blogs>
        </div>
    );
};

export default Blog;