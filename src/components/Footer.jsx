import React from 'react'
import { Github, Linkedin, Youtube, Instagram, Soundcloud } from '@icons-pack/react-simple-icons';

export const Footer = () => {

    const socialMedia = [
        {
            id: 1,
            name: 'LinkdIn',
            url: 'https://www.linkedin.com/in/daniel-mateu-pardo/',
            
            img: <Linkedin title='My title'  size={24} />

        },
        {
            id: 2,
            name: 'Github',
            url: 'https://github.com/danielmateu',
            img: <Github title='My title'  size={24} />
        },
        {
            id: 3,
            name: 'Youtube',
            url: 'https://www.youtube.com/channel/UCuMqJQML3SF0qz2sjKc2T8g',
            img: <Youtube title='My title'  size={24} />
        },
        {
            id: 4,
            name: 'Instragram',
            url: 'https://www.instagram.com/danimateu86/',
            img: <Instagram title='My title'  size={24} />
        },
        {
            id: 5,
            name: 'Soundcloud',
            url: 'https://soundcloud.com/danielmateupardo',
            img: <Soundcloud title='My title'  size={24} />
        }
    ]




    return (
        <footer className='flex flex-col sm:flex-row justify-between items-center py-6 px-4' >

            <ul className='flex flex-col sm:flex-row text-center mx-auto gap-4'>
                {
                    socialMedia.map((socialMedia) => (
                        <li key={socialMedia.id} href="#" className="p-2 cursor-pointer text-gray-400 hover:text-gray-200 transition-all w-10">
                            {/* <a href={socialMedia.url} target='_blank' rel='author' >{socialMedia.name}{socialMedia.img}</a> */}
                            <a href={socialMedia.url}>{socialMedia.img}</a>

                        </li>
                    ))
                }
            </ul>
        </footer>
    )
}
