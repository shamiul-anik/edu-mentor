// import Image from 'next/image'
// "use client"
import HomeBanner from '@/components/Home/HomeBanner';
import Statistics from '@/components/Home/Statistics';
import Testimonial from '@/components/Home/Testimonial';
import Newsletter from '@/components/Home/Newsletter';
import TuitionTypes from '@/components/Home/TuitionTypes';
import Gallery from '@/components/Home/Gallery';
// import AOS from 'aos';

export default function Home() {
  return (
    <div className="">
      {/* Hello */}
      <HomeBanner />
      <Gallery></Gallery>
      <TuitionTypes />
      <Statistics />
      <Testimonial />
      <Newsletter /> 
    </div>
  )
}
