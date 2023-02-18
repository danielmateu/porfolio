import React, { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'

export const Mode = () => {

    const [darkModeEnabled, setDarkModeEnabled] = useState(localStorage.getItem('darkModeEnabled') === 'true');
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body');
        if (darkModeEnabled) {
            body.classList.add('dark');
            localStorage.setItem('darkModeEnabled', 'true');
        } else {
            body.classList.remove('dark');
            localStorage.setItem('darkModeEnabled', 'false');
        }
    }, [darkModeEnabled]);

    return (
        <>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                onClick={() => setDarkModeEnabled(!darkModeEnabled)}
                className={`${
                    enabled ? 'bg-sky-600' : 'bg-gray-600'
                } relative inline-flex items-center h-6 rounded-full w-11`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    className={`${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                />
            </Switch>
            {/* <button
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all"
                onClick={() => setDarkModeEnabled(!darkModeEnabled)}
            >
                {
                    darkModeEnabled ? (
                        <p className='bg-sky-600 rounded-full p-1 hover:bg-sky-400 transition-all'>☀️</p>
                        
                    ) : (
                        <p className='bg-gray-600 hover:bg-gray-800 rounded-full p-1 transition-all'>🌙</p>
                        
                    )
                }
            </button> */}
        </>
    )
}
