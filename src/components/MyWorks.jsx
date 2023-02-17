import React from 'react'
import { Card } from './Card'

export const MyWorks = () => {
    return (
        <>
            <div className="flex flex-col gap-2  px-10 sm:px-20 pt-80 sm:pt-20 min-h-screen" id='my_works'>
                <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>Mis proyectos</h3>

                <Card />

            </div>
            
        </>
    )
}
