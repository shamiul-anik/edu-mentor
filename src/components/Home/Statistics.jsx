import { GiOpenBook, GiTeacher } from "react-icons/gi";
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";
// import { BiBookContent } from "react-icons/bi";

const Statistics = () => {
  return (
    <section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4 md:px-0">

      <SectionTitle heading="Statistics" subHeading="Statistics Showcase: EduMentor's Impact and Growth"></SectionTitle>

      <div className="max-w-[240px] md:max-w-6xl grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8 mx-auto">

        {/* <div className="card card-compact w-full bg-base-100 box-shadow-custom justify-center" data-aos="flip-left"> */}
        <div className="card card-compact w-full bg-base-100 custom-box-shadow justify-center">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <FaUserAlt className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 flex flex-col justify-center items-center h-full">
            <h2 className="card-title justify-center text-2xl font-bold text-slate-800">258</h2>
            <p className="card-title justify-center text-lg font-medium text-slate-600">Total Applied</p>
          </div>
        </div>
        

        {/* <div className="card card-compact w-full bg-base-100 box-shadow-custom justify-center" data-aos="flip-left"> */}
        <div className="card card-compact w-full bg-base-100 custom-box-shadow justify-center">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiOpenBook className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 flex flex-col justify-center items-center h-100">
            <h2 className="card-title justify-center text-2xl font-bold text-slate-800">12</h2>
            <p className="card-title justify-center text-lg font-medium text-slate-600">Live Tuition Jobs</p>
          </div>
        </div>

        {/* <div className="card card-compact w-full bg-base-100 box-shadow-custom justify-center" data-aos="flip-left"> */}
        <div className="card card-compact w-full bg-base-100 custom-box-shadow justify-center">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <GiTeacher className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 flex flex-col justify-center items-center h-100">
            <h2 className="card-title justify-center text-2xl font-bold text-slate-800">16</h2>
            <p className="card-title justify-center text-lg font-medium text-slate-600">Total Tutors</p>
          </div>
        </div>

        {/* <div className="card card-compact w-full bg-base-100 box-shadow-custom justify-center" data-aos="flip-left"> */}
        <div className="card card-compact w-full bg-base-100 custom-box-shadow justify-center">
          <div className='px-2 pt-6 pb-2 flex justify-center'>
            <HiOutlineBuildingOffice2 className='h-24 w-24 text-slate-600 aspect-square' />
          </div>
          <div className="p-2 flex flex-col justify-center items-center h-100">
            <h2 className="card-title justify-center text-2xl font-bold text-slate-800">4.7</h2>
            <p className="card-title justify-center text-lg font-medium text-slate-600">Average Tutor Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;