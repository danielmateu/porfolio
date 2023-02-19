import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Links } from '../mockData'
import { Mode } from './ui/Mode'

export const SmallNav = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav className="flex flex-col gap-2 sm:hidden justify-between items-center py-4 px-4 sticky top-0 bg-opacity-95 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-95 shadow-lg">
            <div className='flex justify-center items-center py-4'>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-gray-800 dark:text-gray-400 hover:text-gray-400 hover:rotate-90  text-2xl hover:text-base absolute right-8 pt-2 transition-all sm:hidden"
                >
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    {/* Down */}
                </div>

                <Link to='hero' spy={true} smooth={true} offset={50} duration={500} className={"absolute left-8 cursor-pointer text-gray-800 dark:text-gray-400  hover:text-gray-600 dark:hover:text-gray-200 transition-all "} >DM</Link>
            </div>
            <ul className={`flex flex-col items-center pt-10 pb-6 bg-gray-100  dark:bg-gray-800 w-full transition-all duration-500 absolute ease-in  gap-4  z-[-1]  ${open ? 'top-0' : 'top-[-40vh]'}`}>
                {
                    Links.map(link => (
                        <li key={link.id}>
                            <Link to={link.to} spy={true} smooth={true} offset={0} duration={500} alt={link.data}
                                className='cursor-pointer text-gray-800 hover:text-gray-600 dark:hover:text-gray-200 transition-all dark:text-gray-400' >
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
