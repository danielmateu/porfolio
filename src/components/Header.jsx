import { Mode } from './ui/Mode'
import { Link } from 'react-scroll'
import { useState } from 'react'


export const Header = () => {

    const Links = [
        {
            id: 1,
            to: 'dani',
            data: 'Hi'
        },
        {
            id: 2,
            to: 'about_me',
            data: 'About me'
        },
        {
            id: 3,
            to: 'my_works',
            data: 'My projects'
        },
        {
            id: 4,
            to: 'tecnologias',
            data: 'Tech I use'
        },
        {
            id: 5,
            to: 'contact',
            data: 'Contact'
        }

    ]

    const [open, setOpen] = useState(false)


    // TODO Nav para pantallas pequeñas
    return (

        <nav className="flex flex-col gap-2 sm:flex-row justify-between items-center py-4 px-4 sticky top-0 bg-opacity-80 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-75'">
            <div className='flex justify-center items-center'>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-gray-400 text-3xl absolute right-8 pt-2 transition-all sm:hidden"
                >
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <Link to='hero' spy={true} smooth={true} offset={50} duration={500} className={"absolute left-8 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all "} >DM</Link>
            </div>
            <ul className={`bg-gray-200 dark:bg-gray-800 w-full ease-in-out transition-all absolute flex flex-col items-center py-6  gap-6 md:gap-4 sm:flex-row md:z-auto z-[-1] md:w-auto ${open ? 'top-0': 'top-[-490px]'}`}>
                {
                    Links.map(link => (
                        <li key={link.id}>
                            <Link to={link.to} spy={true} smooth={true} offset={0} duration={500}
                                className='cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all' >
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
