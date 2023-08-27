import HomeBanner from '@/components/Home/HomeBanner';
import Testimonial from '@/components/Home/Testimonial';
import Newsletter from '@/components/Home/Newsletter';
import TuitionTypes from '@/components/Home/TuitionTypes';
import SuccessStory from '@/components/Home/SuccessStory';
import Statistics from '@/components/Home/Statistics';
<<<<<<< HEAD
import Gallery from '@/components/Home/Gallery';
// import AOS from 'aos';
import PopularTutors from '@/components/Home/PopularTutors';
=======
import PopularTutors from '@/components/Home/PopularTutors';
import Gallery from '@/components/Home/Gallery';
// import AOS from 'aos';
>>>>>>> 9303b390b4369dbdf04fcd1e3129e69ad6f2176f

export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      <Gallery/> 
      <PopularTutors/>
      <TuitionTypes />
      <Statistics />
      <Testimonial />
      <SuccessStory />
      <Newsletter />
    </div>
  )
}
