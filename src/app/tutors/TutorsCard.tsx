
'use client'
import { Tutor } from '@/typeScript/tutorType';
import Image from 'next/image';
import Link from 'next/link';

interface PopularCardProps {
tutorData: Tutor
}

const TestForButton = (id: (number | string)) => {
// console.log('test for button')
}

const TutorsCard: React.FC<PopularCardProps> = ({tutorData}) => {
  // console.log(tutorData)
  const {name, _id, image_url, education, education_qualification} = tutorData || {};
  
    return (
        <div className='my-4 mx-auto relative w-full'>
            <div className="card card-compact h-full  bg-base-100 shadow-xl hover:shadow-2xl border transition ease-in-out delay-150 hover:-translate-y-2 mx-auto  hover:border-cyan-500  hover:shadow-cyan-500/50 rounded ">
              <div className='mx-auto p-10 '>
              <Image
              className=' mx-auto rounded outline outline-1 hover:outline-cyan-500 shadow-lg hover:shadow-cyan-500/50'
               width={512}height={512} src={image_url} alt="tutorImage" />

              </div>
  <div className="card-body h-64 text-center">
    <h2 className=" font-bold card-title justify-center">{name}</h2>
    <p>
      {
      education_qualification?.map((value, index) => 
        (<span key={index}>{value.institution}</span>)
      )
      }
    </p>
    <p className='font-bold'>{education}</p>
    {/* TODO: Top 'use client' is use for button.  */}
    <div className=" w-full">
      <Link href={`/tutors/${_id}`}>
      <button onClick={()=>TestForButton(_id)} className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default TutorsCard;