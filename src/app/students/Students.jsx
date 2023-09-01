import CommonBanner from "../../components/CommonBanner";
import SectionTitle from '../../components/SectionTitle';
import { useContext, useEffect } from "react";
import Aos from "aos";
import { AuthContext } from "../../providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import StudentCard from "./StudentCard";

const Tutors = () => {


  const { user, setUserRole, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  // const { data: allInstructors = [], refetch } = useQuery({
  //   queryKey: ["allInstructors", user?.email],
  //   enabled: !loading,
  //   queryFn: async () => {
  //     const res = await axios.get(`${import.meta.env.VITE_API_URL}/tutors`);
  //     setLoading(false);
  //     console.log(res?.data);
  //     return res?.data;
  //   },
  // });

  return (
    <div>
      {/* Instructors Page Banner */}
      <CommonBanner bannerHeading="Instructors"></CommonBanner>
      
      <section className="max-w-7xl mx-auto mt-4 lg:mt-8 p-4 md:px-0">

        <SectionTitle heading="Instructors" subHeading="Meet Our Exceptional Language Instructors"></SectionTitle>

        <div>
          <h1 className="text-2xl font-bold text-teal-600 underline underline-offset-8 text-center mb-6">Total Instructors: {allInstructors?.length}</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-8">
          {
            allStudents?.map((studentData) => <StudentCard key={studentData._id} instructorData={studentData}></StudentCard>)
          }
        </div>
      </section>
    </div>
  );
};

export default Tutors;