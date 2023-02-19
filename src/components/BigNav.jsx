import React from 'react'
import { Link } from 'react-scroll'
import { Links } from '../mockData'
import { Mode } from './ui/Mode'

export const BigNav = () => {

    

    return (
        <nav className="hidden w-full sm:flex flex-col gap-2 sm:flex-row justify-between items-center  px-4 sticky top-0 bg-opacity-95 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-80 shadow-lg">

            <Link to='hero' spy={true} smooth={true} offset={50} duration={500} className={" absolute left-8 cursor-pointer  hover:text-gray-600 dark:hover:text-gray-200 transition-all dark:text-gray-400"} >DM</Link>

            <ul className={` w-full flex flex-col items-center justify-end py-4 gap-6  sm:flex-row sm:flex`}>
                {
                    Links.map(link => (
                        <li key={link.id}>
                            <Link to={link.to} spy={true} smooth={true} offset={0} duration={500} alt={link.data}
                                className='cursor-pointer dark:text-gray-400  hover:text-gray-600 dark:hover:text-gray-200 transition-all' >
                                {link.data}
                            </Link>
                        </li>
                    ))
                }
                <Mode />
            </ul>
        </nav>
    )
}
