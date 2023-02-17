import React from 'react'
import { Link } from 'react-scroll'

export const FirstTitle = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-music bg-fixed bg-cover bg-center bg-no-repeat" id='hero'>
            <h2 className='text-4xl text-center text-gray-200 bg-gray-600  bg-opacity-40 dark:bg-black dark:bg-opacity-40 transition-all p-96 w-full'>
                Soy el <Link to='dani' className='hover:text-blue-200 transition-colors cursor-pointer' spy={true} smooth={true} offset={0} duration={500} >Frontend Developer</Link>
            </h2>
        </div>
    )
}
