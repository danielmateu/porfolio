import React, { useEffect, useState } from 'react'

export const Mode = () => {

    // const toggleDarkMode = () => {

    //     const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    //     const body = document.querySelector('body');
    //     if (darkModeEnabled) {
    //         body.classList.remove('dark');
    //         localStorage.setItem('darkModeEnabled', 'false');
    //     } else {
    //         body.classList.add('dark');
    //         localStorage.setItem('darkModeEnabled', 'true');
    //     }

    // }

    const [darkModeEnabled, setDarkModeEnabled] = useState(localStorage.getItem('darkModeEnabled') === 'true');

    // const body = document.querySelector('body');
    // if (darkModeEnabled) {
    //     body.classList.remove('dark');
    //     localStorage.setItem('darkModeEnabled', 'false');
    // } else {
    //     body.classList.add('dark');
    //     localStorage.setItem('darkModeEnabled', 'true');
    // }


    useEffect(() => {
        const body = document.querySelector('body');
        if (darkModeEnabled) {
            body.classList.add('dark');
            localStorage.setItem('darkModeEnabled', 'false');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('darkModeEnabled', 'true');
        }
    }, [darkModeEnabled]);

    return (
        <>
            {/* Mode options button */}
            <button
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all"
                //Onclick to change the modeOption
                // onClick={() => setModeOption(!modeOption)}
                // onClick={toggleDarkMode}
                onClick={() => setDarkModeEnabled(!darkModeEnabled)}
            >
                {
                    darkModeEnabled ? (
                        <p className='bg-sky-600 rounded-full p-1 hover:bg-sky-400 transition-all'>☀️</p>
                        // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        //     <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        // </svg>
                    ) : (
                        <p className='bg-gray-600 hover:bg-gray-800 rounded-full p-1 transition-all'>🌙</p>
                        // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        //     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        // </svg>
                    )
                }
            </button>
        </>
    )
}
