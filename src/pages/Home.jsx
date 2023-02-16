import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Link } from 'react-scroll'
import { Hi } from '../components/Hi'
import AboutMe from '../components/AboutMe'
import { MyWorks } from '../components/MyWorks'
import { Form } from '../components/Form'
import { NavLink } from 'react-router-dom'




const Home = () => {

    // const navOptions = [
    //     {
    //         id: 1,
    //         name: 'About me',
    //         url: 'about_me'
    //     },
    //     {
    //         id: 2,
    //         name: 'My works',
    //         url: 'my_works'
    //     },
    //     {
    //         id: 3,
    //         name: 'Contact me',
    //         url: 'contact'
    //     }
    // ]


    return (
        <Layout>

            <div className="min-h-screen flex flex-col justify-center items-center bg-music bg-fixed bg-cover bg-center bg-no-repeat" id='hero'>
                
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>
                    Soy el <Link to='dani' className='hover:text-blue-200 transition-colors cursor-pointer' spy={true} smooth={true} offset={0} duration={500} >Frontend Developer</Link>
                </h2>
            </div>

            <Hi/>

            <div className="min-h-screen flex flex-col justify-center items-center bg-stairs bg-fixed bg-cover bg-center bg-no-repeat ">
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>Siempre hay que <Link to='about_me' className='hover:text-blue-200 transition-colors cursor-pointer' spy={true} smooth={true} offset={0} duration={500} >aspirar a lo mejor</Link></h2>
            </div>

            <AboutMe/>

            <div className="min-h-screen flex flex-col justify-center items-center bg-develop bg-fixed bg-cover bg-center bg-no-repeat ">
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>Tengo claro que<Link to='my_works' className='hover:text-blue-200 transition-colors cursor-pointer' spy={true} smooth={true} offset={0} duration={500} > lo voy a conseguir</Link></h2>
            </div>

            <MyWorks/>

            <Form/>
        </Layout>
    )
}

export default Home