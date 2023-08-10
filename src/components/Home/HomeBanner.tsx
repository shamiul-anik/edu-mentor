
import BannerImage from '@/assets/images/banner.svg';
import { FaArrowRight } from 'react-icons/fa';
// import { Fade, Rotate } from "react-awesome-reveal";
import Image from 'next/image';
import Link from 'next/link';

const HomeBanner = () => {
  
  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 max-w-7xl mx-auto px-4 py-6 lg:py-8">
        {/* <div className="max-w-xl p-4" data-aos="fade-left"> */}
        <div className="max-w-xl p-4">
          <header className="banner-title">
            {/* <Fade cascade triggerOnce={true}> */}
              <h1>Welcome to</h1>
              <h1 className="animate-pulse">EduMentor</h1>
            {/* </Fade> */}
            {/* <Fade duration={300} triggerOnce={true} cascade>EduMentor</Fade> */}
          </header>
          {/* <p className="text-2xl font-bold">Best Tutoring Platform for Home & Online Tuitions</p> */}
          <p className="banner-description mt-4 mb-8 lg:mb-12">Elevate Education Together: Connecting Tutors and Students Seamlessly!</p>
          <Link href="/">
            <button type="button" className="flex gap-3 mx-auto md:mx-0 items-center justify-center text-white w-48 bg-gradient-to-br from-teal-500 to-teal-700 ring-2 ring-offset-1 ring-teal-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-semibold rounded-lg text-xl px-5 py-4 text-center">Explore <FaArrowRight /></button>
          </Link>
        </div>
        {/* <div className="p-2" data-aos="zoom-in"> */}
        <div className="p-2">
          {/* <Rotate triggerOnce={true}> */}
            <Image className="h-[500px] w-full image-full rounded-xl" src={BannerImage} alt="Banner Image" />
          {/* </Rotate> */}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;