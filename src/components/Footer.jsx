import React from 'react'

export const Footer = () => {

    const socialMedia = [
        {
            id: 1,
            name: 'LinkdIn',
            url: 'https://www.linkedin.com/in/daniel-mateu-pardo/'

        },
        {
            id: 2,
            name: 'Github',
            url: 'https://github.com/danielmateu'
        },
        {
            id: 3,
            name: 'Youtube',
            url: 'https://www.youtube.com/channel/UCuMqJQML3SF0qz2sjKc2T8g'
        },
        {
            id: 4,
            name: 'Instragram',
            url: 'https://www.instagram.com/danimateu86/'
        },
        {
            id: 5,
            name: 'Soundcloud',
            url: 'https://soundcloud.com/danielmateupardo'
        }
    ]

    


    return (
        <footer className='flex flex-col sm:flex-row justify-between items-center py-6 px-4' >

            <ul className='flex flex-col sm:flex-row text-center mx-auto'>
                {
                    socialMedia.map((socialMedia) => (
                        <li key={socialMedia.id} href="#" className="p-2 cursor-pointer text-gray-400 hover:text-gray-200 transition-all">
                            <a href={socialMedia.url} target='_blank' rel='author'>{socialMedia.name}</a>
                        </li>
                    ))
                }
            </ul>
        </footer>
    )
}
