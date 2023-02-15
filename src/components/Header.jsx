import React, { useState } from 'react'
import { Link } from 'react-router-dom'




export const Header = () => {

    const [modeOption, setModeOption] = useState(false)


    const navOptions = [
        {
            id: 1,
            name: 'About me',
            url: 'about-me'
        },
        {
            id: 2,
            name: 'My works',
            url: 'my-works'
        },
        {
            id: 3,
            name: 'Contact me',
            url: 'contact'
        }
    ]


    return (
        <nav className='flex flex-col sm:flex-row justify-between items-center py-6 px-4' >
            <a href='/' className="flex justify-between items-center text-2xl  text-gray-400 relative shadow-sm font-mono" role="navigation">DM</a>
            {/* Navegador con aboutme my-works contact-me */}

            <div className="flex gap-4">
                <ul className='flex'>
                    {navOptions.map(navOption => (
                        <li key={navOption.id} className="p-2 cursor-pointer text-gray-400 hover:text-gray-200 transition-all">
                            {/* <Link to={navOption.url} >{navOption.name}</Link> */}
                            <a href={`/${navOption.url}`} >{navOption.name}</a>
                        </li>
                    ))}
                </ul>
                {/* Mode options button */}
                <button
                    className="text-gray-400 hover:text-gray-200 transition-all hover:rotate-180"
                    //Onclick to change the modeOption
                    onClick={() => setModeOption(!modeOption)}
                >
                    {
                        modeOption ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            </>
                        )
                    }
                </button>
            </div>
        </nav>
    )
}