"use client"
import React, { useState } from 'react';
import CommonBanner from '@/components/(shared)/CommonHeader/CommonBanner';
import Lottie from 'lottie-react';
import ContactUsLottie from '@/assets/lottie/contact-us.json';
import { BsSend } from 'react-icons/bs';

const Contact = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [data, setData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const sendEmail = async () => {
    // console.log('Name:', data.name);
    // console.log('subject:', data.subject);
    // console.log('Email:', data.email);
    // console.log('Message:', data.message);


    // You can proceed to send the email here.
    const emailData = {
      to: data.email, 
      from: process.env.NODEMAILER_EMAIL, 
      subject: data.subject,
      message: data.message,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Email sending failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    
  };

  return (
    <div>
      {/* Contact Banner */}
      <CommonBanner bannerHeading="Contact Us" />

      {/* Google Map */}
      {/* ... (your Google Map code) ... */}

      <div className="mt-16 md:mt-24">
        <header>
          <h2 className="content-title text-center">Get in Touch with Us</h2>
        </header>
        <p className="content-description text-center">
          We will get back to you as soon as we can.
        </p>
      </div>
      <section className="flex flex-col md:flex-row gap-4 md:gap-16 items-center max-w-7xl mx-auto mt-4 md:mt-8 p-4">
        <div>
          <Lottie className="max-w-xl mx-auto" animationData={ContactUsLottie} loop={true} />
        </div>

        <div className="flex max-w-xl card card-compact w-full bg-base-100 px-0 md:px-4 py-2 md:py-7 box-shadow-custom">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="!px-6 md:!px-8 !pt-2 card-body">
              <div className="form-control">
                <label className="label pl-0" htmlFor="name">
                  <span className="label-text text-md md:text-[16px]">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered focus:outline-teal-500 focus:border-teal-200 focus:ring-teal-400 input-sm py-5 text-[14px]"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="form-control">
                <label className="label pl-0" htmlFor="subject">
                  <span className="label-text text-md md:text-[16px]">Subject</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Email subject"
                  className="input input-bordered focus:outline-teal-500 focus:border-teal-200 focus:ring-teal-400 input-sm py-5 text-[14px]"
                  onChange={(e) => setData({ ...data, subject: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="email">
                  <span className="label-text text-md md:text-[16px]">Email</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="input input-bordered focus:outline-teal-500 focus:border-teal-200 focus:ring-teal-400 input-sm py-5 text-[14px]"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label pl-0" htmlFor="message">
                  <span className="label-text text-md md:text-[16px]">Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="input input-bordered focus:outline-teal-500 focus:border-teal-200 focus:ring-teal-400 text-[14px] h-auto"
                  placeholder="Enter your message"
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                ></textarea>
              </div>

              <div className="form-control mt-3">
                <button
                  className="relative flex w-100 items-center justify-center p-0.5 overflow-hidden text-lg font-semibold text-teal-700 rounded-lg group bg-gradient-to-br from-teal-600 to-teal-500 group-hover:from-teal-600 group-hover:to-teal-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800"
                  onClick={sendEmail}
                >
                  <span className="flex items-center justify-center w-full px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <BsSend className="mr-2 self-center" /> Send Message
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
