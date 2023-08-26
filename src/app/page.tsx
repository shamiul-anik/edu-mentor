
// import AOS from 'aos';

import HomeBanner from "@/components/Home/HomeBanner";
import Gallery from "@/components/Home/Gallery"
import PopularTutors from "./popularTutors/page";
import TuitionTypes from "@/components/Home/TuitionTypes";
import Statistics from "@/components/Home/Statistics";
import Testimonial from "@/components/Home/Testimonial";
import SuccessStory from "@/components/Home/SuccessStory";
import Newsletter from "@/components/Home/Newsletter";

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
  );
}
