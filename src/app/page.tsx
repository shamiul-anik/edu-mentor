// import Image from 'next/image'
// "use client"
import HomeBanner from '@/components/Home/HomeBanner';
import Testimonial from '@/components/Home/Testimonial';
import Newsletter from '@/components/Home/Newsletter';
import TuitionTypes from '@/components/Home/TuitionTypes';
<<<<<<< HEAD
import SuccessStory from '@/components/Home/SuccessStory';
=======
import Statistics from '@/components/Home/Statistics';
>>>>>>> db68df3f347984d4db3814b700205bce924d5b1a
// import AOS from 'aos';

export default function Home() {
  return (
    <div className="">
      {/* Hello */}
      <HomeBanner />
      <TuitionTypes />
      <Statistics />
      <Testimonial />
      <SuccessStory />
      <Newsletter />
    </div>
  )
}
