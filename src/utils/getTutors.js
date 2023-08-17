import React from 'react';
import { getPopularTutorFromDb} from '@/services/popularTutors.service'
import {cache} from 'react'

const getTutors = () =>{
    return getPopularTutorFromDb()
}

export default getTutors;