import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Link } from 'react-scroll'

import { Hi } from '../components/Hi'
import AboutMe from '../components/AboutMe'
import { MyWorks } from '../components/MyWorks'
import { Form } from '../components/Form'




const Home = () => {

    


    return (
        <Layout>

            <div className="min-h-screen flex flex-col justify-center items-center bg-music bg-fixed bg-cover bg-center bg-no-repeat" id='hero'>
                {/* <img src={imgmusic} alt="no music no life" className='w-full'  /> */}
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>
                    Soy el <Link to='/about_me' className='hover:text-blue-200 transition-colors cursor-pointer' >Frontend Developer</Link></h2>
            </div>

            <Hi/>

            <div className="min-h-screen flex flex-col justify-center items-center bg-stairs bg-fixed bg-cover bg-center bg-no-repeat ">
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>Siempre hay que <Link to='/my_works' className='hover:text-blue-200 transition-colors cursor-pointer' >aspirar a lo mejor</Link></h2>
            </div>

            <AboutMe/>

            <div className="min-h-screen flex flex-col justify-center items-center bg-develop bg-fixed bg-cover bg-center bg-no-repeat ">
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>Tengo claro que<Link to='/contact' className='hover:text-blue-200 transition-colors cursor-pointer' > lo voy a conseguir</Link></h2>
            </div>

            <MyWorks/>

            <Form/>
        </Layout>
    )
}

export default Home