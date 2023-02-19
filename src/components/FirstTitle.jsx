import React from 'react'
import { Link } from 'react-scroll'

export const FirstTitle = () => {
    return (
        <div className="flex justify-center items-center  min-h-screen bg-music bg-fixed bg-cover bg-center bg-no-repeat" id='hero'>
            <h2 className='py-96 text-4xl text-center justify-center text-sky-200  bg-gray-600  bg-opacity-40 dark:bg-black dark:bg-opacity-40 transition-all w-full'>
                Soy el <Link to='dani' className='hover:text-sky-400 transition-colors cursor-pointer' spy={true} smooth={true} offset={0} duration={500} alt='Go to hi component' >Frontend Developer</Link>
            </h2>
        </div>
    )
}
