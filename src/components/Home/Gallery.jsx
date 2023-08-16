"use client";
import SectionTitle from "@/components/(shared)/SectionTitle/SectionTitle";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '@/assets/images/carousel/image1.jpg'
import img2 from '@/assets/images/carousel/image2.jpg'
import img3 from '@/assets/images/carousel/image3.jpg'
import img4 from '@/assets/images/carousel/image4.jpg'
import Image from 'next/image';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="w-3/4 mx-auto mt-12 lg:mt-32 p-4 md:px-0 ">

      <SectionTitle heading="Photo Gallery" subHeading="Empowering Minds through Education: Nurturing Growth with Mentorship"></SectionTitle>

      <Carousel   >
        <div>
          <Image src={img1} alt="Image 1" />
          {/* <p className="legend">Preparing Students For Success In Life</p> */}
        </div>
        <div>
          <Image src={img2} alt="Image 2" />
          {/* <p className="legend">Picture of graduated students</p> */}
        </div>
        <div>
          <Image src={img3} alt="Image 3" />
          {/* <p className="legend">Another picture of graduated students</p> */}
        </div>
        <div>
          <Image src={img4} alt="Image 4" />
          {/* <p className="legend">Throwing graduation cap </p> */}
        </div>
      </Carousel>

    </section>
  );
};

export default Gallery;