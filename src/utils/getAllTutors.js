import React from 'react';
import { tutorsAllData} from '@/services/popularTutors.service'
import {cache} from 'react'
import "server-only"

const getAllTutors = () =>{
    return tutorsAllData()
}

export default getAllTutors;