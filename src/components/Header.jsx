import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Mode } from './ui/Mode'




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
        <nav className='flex flex-col sm:flex-row justify-between items-center py-6 px-4' >
            <NavLink to='/home' className="flex justify-between items-center text-2xl  text-gray-400 hover:text-gray-600 relative shadow-sm font-mono transition-all" role="navigation">DM</NavLink>
            {/* Navegador con aboutme my-works contact-me */}

            <div className="flex gap-4">
                <ul className='flex'>
                    {navOptions.map(navOption => (
                        <li key={navOption.id} >
                            {/* <Link to={navOption.url} >{navOption.name}</Link> */}
                            <NavLink
                                to={`/${navOption.url}`}
                                // activeclassname="active"
                                className={"p-2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all"}
                                
                            >
                                {navOption.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <Mode/>
                
            </div>
        </nav>
    )
}
