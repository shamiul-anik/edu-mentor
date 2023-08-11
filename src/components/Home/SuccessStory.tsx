"use client"
import React, {useEffect} from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
// import '@smastrom/react-rating/style.css'
// import { Rating } from '@smastrom/react-rating'
import Image from 'next/image';
import womenImage1 from "@/assets/images/success/image1.jpg"
import manImage1 from "@/assets/images/success/image2.jpg"
import manImage2 from "@/assets/images/success/image3.jpeg"
import SectionTitle from '../(shared)/SectionTitle/SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SuccessStory: React.FC = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className=' w-[80%] mx-auto my-4'>
            <SectionTitle heading="Success Story" subHeading="Success Story: EduMentor's Impact and Growth"></SectionTitle>
            <div data-aos="fade-up" ref={sliderRef} className="keen-slider lg:h-[300px] md:h-[400px] sm:h-[400px] ">
                <div className="keen-slider__slide number-slide bg-gradient-to-br from-teal-300 to-teal-400 rounded-lg lg:flex ">

                    <Image className='h-[250px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-l-full rounded-t-full' src={manImage1} alt='' placeholder='blur' width={"200"} />
                    <div className="w-[60%] mx-auto">
                        <h1 className='my-6 text-xl font-bold'> Name: Esoheran</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nesciunt maxime aperiam nihil dolores consectetur, itaque nobis laborum, doloribus non quas, fugiat id magnam. Soluta rerum quidem expedita provident autem.</p>
                        {/* <Rating
                            style={{ maxWidth: 180 }}
                            value={3}
                            readOnly
                        /> */}
                    </div>
                </div>
                <div className="keen-slider__slide number-slide bg-gradient-to-br from-teal-300 to-teal-400 rounded-lg lg:flex ">

                    <Image className='h-[250px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-l-full rounded-t-full' src={womenImage1} alt='' placeholder='blur' width={"200"} />
                    <div className="w-[60%] mx-auto">
                        <h1 className='my-6 text-xl font-bold'> Name: Mahiya</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nesciunt maxime aperiam nihil dolores consectetur, itaque nobis laborum, doloribus non quas, fugiat id magnam. Soluta rerum quidem expedita provident autem.</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide bg-gradient-to-br from-teal-300 to-teal-400 rounded-lg lg:flex ">

                    <Image className='h-[250px] max-sm:mx-auto max-md:mx-auto mx-4 my-4 rounded-l-full rounded-t-full' src={manImage2} alt='' placeholder='blur' width={"200"} />
                    <div className="w-[60%] mx-auto">
                        <h1 className='my-6 text-xl font-bold'> Name: Frigodin</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nesciunt maxime aperiam nihil dolores consectetur, itaque nobis laborum, doloribus non quas, fugiat id magnam. Soluta rerum quidem expedita provident autem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStory;