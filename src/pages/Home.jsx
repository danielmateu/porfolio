import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { Link } from 'react-scroll'



const Home = () => {
    return (
        <Layout>

            <div className="min-h-screen flex flex-col justify-center items-center bg-music bg-fixed bg-cover bg-center bg-no-repeat" id='hero'>
                {/* <img src={imgmusic} alt="no music no life" className='w-full'  /> */}
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>
                    Soy el <Link to='/about_me' className='hover:text-blue-200 transition-colors cursor-pointer' >Frontend Developer</Link></h2>
            </div>

            <div className="flex flex-col gap-2 px-10 py-40 min-h-screen" id='dani'>
                <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>Soy Daniel Mateu</h3>

                <p className='text-gray-800 dark:text-gray-400 px-20 '>
                    Desde principios del 2020, sentí la necesidad de realizar cambios en mi vida, tanto personal como profesional. El mundo cambia constantemente y sentí que debía hacer lo mísmo.<br /><br />
                    Me introduje en este mundo aprendiendo los fundamentos de la programación en el campus de la <a href="#">IT Academy</a> perteneciente a <strong>Barcelona Activa</strong> en Marzo de 2021 y a partir de ahí, no he parado de investigar, aprender y aprovechar las tecnologías necesarias para continuar creciendo como programador frontend, sin dejar atrás el backend. Sin uno, el otro no tiene razón de ser.<br /><br />
                    A modo personal, amo la música... a los 9 años aprendí a tocar el piano, luego seguí con la batería y de forma autodidacta, seguí con la guitarra, el bajo y el canto. Para mi, escribir de música y crear soluciones para ayudar a la gente que tengo cerca siempre ha sido una motivación muy importante y poco a poco con los proyectos que voy realizando a diario veo fluye al crear cosas buenas! 😊
                </p>
            </div>

            <div className="min-h-screen flex flex-col justify-center items-center bg-stairs bg-fixed bg-cover bg-center bg-no-repeat ">
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>Siempre hay que <Link to='/my_works' className='hover:text-blue-200 transition-colors cursor-pointer' >aspirar a lo mejor</Link></h2>
            </div>

            <div className="flex flex-col gap-2 px-10 py-40 min-h-screen" id='about_me'>
                <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>Sobre Mi</h3>

                <p className='text-gray-800 dark:text-gray-400 px-20 '>
                    Tengo una experiencia de dos años como programador. Me especializo en el desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas y de vanguardia.<br /><br />

                    En el front end, utilizo ReactJS, NextJS y Tailwind para crear interfaces de usuario interactivas y dinámicas. Con estas herramientas, puedo construir sitios web de alta calidad y aplicaciones móviles que son altamente receptivas y fáciles de usar.<br /><br />

                    En el backend, utilizo NodeJS, Express y MongoDB para crear soluciones escalables y eficientes que permiten a los usuarios interactuar con los datos de su sitio web. Con estas tecnologías, puedo construir aplicaciones robustas y escalables que pueden manejar grandes volúmenes de datos y transacciones complejas.<br /><br />

                    Me enorgullece presentar algunos de los proyectos en los que he trabajado, desde un ecommerce completo hasta un juego de Tic Tac Toe, y muchos más. Estos proyectos demuestran mi capacidad para crear aplicaciones innovadoras y atractivas que satisfacen las necesidades de los usuarios y las empresas por igual.<br /><br />

                    Estoy siempre buscando nuevos desafíos y oportunidades para aprender y mejorar mis habilidades como desarrollador. Si tienes un proyecto interesante que te gustaría discutir, no dudes en contactarme. Me encantaría hablar contigo acerca de cómo podemos trabajar juntos para crear algo genial!
                </p>
            </div>

            <div className="min-h-screen flex flex-col justify-center items-center bg-develop bg-fixed bg-cover bg-center bg-no-repeat ">
                <h2 className='text-4xl text-center text-gray-200 bg-blue-600 bg-opacity-50 dark:bg-black dark:bg-opacity-75 transition-all px-56 py-10 rounded-3xl'>Tengo claro que<Link to='/contact' className='hover:text-blue-200 transition-colors cursor-pointer' > lo voy a conseguir</Link></h2>
            </div>

            <div className="flex flex-col gap-2 px-10 py-40 min-h-screen" id='my_works'>
                <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>Mis proyectos</h3>

                <p className='text-gray-800 dark:text-gray-400 px-20 '>
                    Tengo una experiencia de dos años como programador. Me especializo en el desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas y de vanguardia.<br /><br />

                    En el front end, utilizo ReactJS, NextJS y Tailwind para crear interfaces de usuario interactivas y dinámicas. Con estas herramientas, puedo construir sitios web de alta calidad y aplicaciones móviles que son altamente receptivas y fáciles de usar.<br /><br />

                    En el backend, utilizo NodeJS, Express y MongoDB para crear soluciones escalables y eficientes que permiten a los usuarios interactuar con los datos de su sitio web. Con estas tecnologías, puedo construir aplicaciones robustas y escalables que pueden manejar grandes volúmenes de datos y transacciones complejas.<br /><br />

                    Me enorgullece presentar algunos de los proyectos en los que he trabajado, desde un ecommerce completo hasta un juego de Tic Tac Toe, y muchos más. Estos proyectos demuestran mi capacidad para crear aplicaciones innovadoras y atractivas que satisfacen las necesidades de los usuarios y las empresas por igual.<br /><br />

                    Estoy siempre buscando nuevos desafíos y oportunidades para aprender y mejorar mis habilidades como desarrollador. Si tienes un proyecto interesante que te gustaría discutir, no dudes en contactarme. Me encantaría hablar contigo acerca de cómo podemos trabajar juntos para crear algo genial!
                </p>
            </div>

            <div className="flex flex-col gap-2 px-10 py-40 min-h-screen" id='contact'>
                <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>¿Quieres contactar?</h3>

                <p className='text-gray-800 dark:text-gray-400 px-20 '>
                    Tengo una experiencia de dos años como programador. Me especializo en el desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas y de vanguardia.<br /><br />

                    En el front end, utilizo ReactJS, NextJS y Tailwind para crear interfaces de usuario interactivas y dinámicas. Con estas herramientas, puedo construir sitios web de alta calidad y aplicaciones móviles que son altamente receptivas y fáciles de usar.<br /><br />

                    En el backend, utilizo NodeJS, Express y MongoDB para crear soluciones escalables y eficientes que permiten a los usuarios interactuar con los datos de su sitio web. Con estas tecnologías, puedo construir aplicaciones robustas y escalables que pueden manejar grandes volúmenes de datos y transacciones complejas.<br /><br />

                    Me enorgullece presentar algunos de los proyectos en los que he trabajado, desde un ecommerce completo hasta un juego de Tic Tac Toe, y muchos más. Estos proyectos demuestran mi capacidad para crear aplicaciones innovadoras y atractivas que satisfacen las necesidades de los usuarios y las empresas por igual.<br /><br />

                    Estoy siempre buscando nuevos desafíos y oportunidades para aprender y mejorar mis habilidades como desarrollador. Si tienes un proyecto interesante que te gustaría discutir, no dudes en contactarme. Me encantaría hablar contigo acerca de cómo podemos trabajar juntos para crear algo genial!
                </p>
            </div>
        </Layout>
    )
}

export default Home