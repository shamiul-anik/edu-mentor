import React from 'react';
import { getPopularTutorFromDb} from '@/services/popularTutors.service'
import {cache} from 'react'
import "server-only"

const getTutors = cache(() =>{
    return getPopularTutorFromDb()
})

export default getTutors;