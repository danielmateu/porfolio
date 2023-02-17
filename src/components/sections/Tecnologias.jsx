import React from 'react'
import { BackEnd } from '../BackEnd'

import { FrontEnd } from '../FrontEnd'


export const Tecnologias = () => {
    return (
        <div className='flex flex-col gap-2  px-10 sm:px-52 pt-80 sm:pt-20  min-h-screen' id='tecnologias'>
            <FrontEnd/>
            <BackEnd/>

            
        </div>



    )
}
