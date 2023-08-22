import { cache } from 'react';
import { getSinglePopularTutorData} from '@/services/popularTutors.service'
import "server-only"

const getSingleTutor = cache((id) => {
    
   return getSinglePopularTutorData(id)

})


export default getSingleTutor;