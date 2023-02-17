import { Mode } from './ui/Mode'
import { Link } from 'react-scroll'


export const Header = () => {

    return (
        <>
            {/* Navegador con aboutme my-works contact-me */}
            <nav className="flex flex-col gap-2 sm:flex-row justify-between items-center py-4 px-4 sticky top-0 bg-opacity-80 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-80'">
                <Link to='hero' spy={true} smooth={true} offset={50} duration={500} className={"cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all"} >DM</Link>
                <ul className='flex flex-col text-center gap-4 sm:flex-row'>
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
                        <Link to="tecnologias" spy={true} smooth={true} offset={0} duration={500}
                            className='cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all'>
                            Tecnologías
                        </Link>

                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}
                            className='cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all'>
                            Contact
                        </Link>

                    </li>
                <Mode />
                </ul>
            </nav>
        </>
        
    )
}
