import React from 'react'


export const Header = () => {

    const navOptions = [
        {
            id: 1,
            name: 'About me',

        },
        {
            id: 2,
            name: 'My works',
        },
        {
            id: 3,
            name: 'Contact me',
        }
    ]

    return (
        <nav className='flex flex-col sm:flex-row justify-between items-center py-6 px-4' >
            <a href='/' className="flex justify-between items-center text-4xl  text-gray-400 relative shadow-sm font-mono" role="navigation">DM</a>
            {/* Navegador con aboutme my-works contact-me */}
            <ul className='flex'>
                {navOptions.map(navOption => (
                    <li key={navOption.id} href="#" className="p-2 cursor-pointer text-gray-400 hover:text-gray-200 transition-all">{navOption.name}</li>
                ))}
            </ul>
        </nav>
    )
}
