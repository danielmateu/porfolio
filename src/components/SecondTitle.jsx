import React from 'react'
import { Link } from 'react-scroll'

export const SecondTitle = () => {
    return (
        <div className="flex justify-center items-center  min-h-screen bg-stairs bg-fixed bg-cover bg-center bg-no-repeat ">
            <h2 className='px-10 py-96 text-4xl text-center justify-center text-gray-200 bg-gray-600  bg-opacity-40 dark:bg-black dark:bg-opacity-40 transition-all w-full'>Siempre hay que <Link to='about_me' className='hover:text-blue-200 transition-colors cursor-pointer' spy={true} smooth={true} offset={0} duration={500} >aspirar a lo mejor</Link></h2>
        </div>
    )
}
