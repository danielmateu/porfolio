import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Mode } from './ui/Mode'
import { Link } from 'react-scroll'




export const Header = () => {

    const navOptions = [
        {
            id: 1,
            name: 'About me',
            url: 'about_me'
        },
        {
            id: 2,
            name: 'My works',
            url: 'my_works'
        },
        {
            id: 3,
            name: 'Contact me',
            url: 'contact'
        }
    ]



    return (
        <nav className='flex flex-col sm:flex-row justify-between items-center py-6 px-4 sticky top-0 bg-opacity-80 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-90' >
            <Link to='hero' spy={true} smooth={true} offset={50} duration={500} className={"p-2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all"} >DM</Link>
            {/* Navegador con aboutme my-works contact-me */}

            <div className="flex gap-4">
                {/* <ul className='flex'>
                    {navOptions.map(navOption => (
                        <li key={navOption.id} >

                            <NavLink
                                to={`/${navOption.url}`}
                                // activeclassname="active"
                                className={"p-2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all"}

                            >
                                {navOption.name}
                            </NavLink>

                        </li>
                    ))}
                </ul> */}

                <ul className='flex gap-4'>
                    <li>
                        <Link to="dani" spy={true} smooth={true} offset={0} duration={500} 
                        className='cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all' >
                            Hi there!
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="about_me" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all' >
                            About me
                        </Link>
                        
                    </li>
                    <li>
                        <Link to="my_works" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all'>
                            My works
                        </Link>

                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500} 
                        className='cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all'>
                            Contact
                        </Link>
                        
                    </li>
                </ul>

                <Mode />

            </div>
        </nav>
    )
}
