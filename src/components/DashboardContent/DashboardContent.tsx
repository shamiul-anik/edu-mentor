"use client"
import Lottie from "lottie-react";
import DashboardImage from '@/assets/lottie/dashboard.json';
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {

  return (
    <div className="min-h-[calc(100dvh-40px)] grid place-content-center">
      <header>
        <h1 className="text-4xl text-teal-700 font-bold text-center flex flex-col md:flex-row gap-4">
          <Fade duration={100} triggerOnce={true} cascade>Welcome to</Fade>
          <Fade duration={100} triggerOnce={true} cascade>Edu Mentor</Fade>
          <Fade duration={100} triggerOnce={true} cascade>Dashboard</Fade>
        </h1>
      </header>
      <Lottie className="max-w-3xl mx-auto w-full" animationData={DashboardImage} loop={true} />
    </div>
  );
};

export default Dashboard;