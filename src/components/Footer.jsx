import React from 'react'
import { Github, Linkedin, Youtube, Instagram, Soundcloud } from '@icons-pack/react-simple-icons';

export const Footer = () => {

    const socialMedia = [
        {
            id: 1,
            name: 'LinkdIn',
            url: 'https://www.linkedin.com/in/daniel-mateu-pardo/',
            img: <Linkedin title='My title' size={24} />

        },
        {
            id: 2,
            name: 'Github',
            url: 'https://github.com/danielmateu',
            img: <Github title='My title' size={24} />
        },
        {
            id: 3,
            name: 'Youtube',
            url: 'https://www.youtube.com/channel/UCuMqJQML3SF0qz2sjKc2T8g',
            img: <Youtube title='My title' size={24} />
        },
        {
            id: 4,
            name: 'Instragram',
            url: 'https://www.instagram.com/danimateu86/',
            img: <Instagram title='My title' size={24} />
        },
        {
            id: 5,
            name: 'Soundcloud',
            url: 'https://soundcloud.com/danielmateupardo',
            img: <Soundcloud title='My title' size={24} />
        }
    ]

    return (
        <footer className='flex flex-col justify-center items-center py-6 px-4 bg-gray-800 bg-transparent' >
            <ul className='flex text-center gap-4'>
                {
                    socialMedia.map((socialMedia) => (
                        <li
                            key={socialMedia.id}
                            href="#"
                            className="p-2 cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all w-10"
                            alt={socialMedia.name}>
                            {/* <a href={socialMedia.url} target='_blank' rel='author' >{socialMedia.name}{socialMedia.img}</a> */}
                            <a href={socialMedia.url} target='_blank'>{socialMedia.img}</a>

                        </li>
                    ))
                }
            </ul>
            
            <p className='text-gray-400'>{new Date().getFullYear()} danidevdevops - designed by Daniel Mateu ®</p>
        </footer>
    )
}
