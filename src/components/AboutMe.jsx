import React from 'react'
import { Layout } from './Layout/Layout'

const Aboutme = () => {
    return (
        <>
            <div className="flex flex-col gap-2 px-10 py-40 min-h-screen" id='about_me'>
                <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>Sobre Mi</h3>

                <p className='text-gray-800 dark:text-gray-400 px-20 selection:bg-sky-300 selection:text-sky-900'>
                    Tengo una experiencia de dos años como programador. Me especializo en el desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas y de vanguardia.<br /><br />

                    En el front end, utilizo ReactJS, NextJS y Tailwind para crear interfaces de usuario interactivas y dinámicas. Con estas herramientas, puedo construir sitios web de alta calidad y aplicaciones móviles que son altamente receptivas y fáciles de usar.<br /><br />

                    En el backend, utilizo NodeJS, Express y MongoDB para crear soluciones escalables y eficientes que permiten a los usuarios interactuar con los datos de su sitio web. Con estas tecnologías, puedo construir aplicaciones robustas y escalables que pueden manejar grandes volúmenes de datos y transacciones complejas.<br /><br />

                    Me enorgullece presentar algunos de los proyectos en los que he trabajado, desde un ecommerce completo hasta un juego de Tic Tac Toe, y muchos más. Estos proyectos demuestran mi capacidad para crear aplicaciones innovadoras y atractivas que satisfacen las necesidades de los usuarios y las empresas por igual.<br /><br />

                    Estoy siempre buscando nuevos desafíos y oportunidades para aprender y mejorar mis habilidades como desarrollador. Si tienes un proyecto interesante que te gustaría discutir, no dudes en contactarme. Me encantaría hablar contigo acerca de cómo podemos trabajar juntos para crear algo genial!
                </p>
            </div>
        </>

        // <Layout>
        //     <h1 className='text-4xl text-center text-gray-400'>About Me</h1>

        //     <p className='text-gray-800 dark:text-gray-400'>
        //         Hola, mi nombre es [tu nombre], y soy un programador con experiencia de dos años. Me especializo en el desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas y de vanguardia.

        //         En el front end, utilizo ReactJS, NextJS y Tailwind para crear interfaces de usuario interactivas y dinámicas. Con estas herramientas, puedo construir sitios web de alta calidad y aplicaciones móviles que son altamente receptivas y fáciles de usar.

        //         En el backend, utilizo NodeJS, Express y MongoDB para crear soluciones escalables y eficientes que permiten a los usuarios interactuar con los datos de su sitio web. Con estas tecnologías, puedo construir aplicaciones robustas y escalables que pueden manejar grandes volúmenes de datos y transacciones complejas.

        //         Me enorgullece presentar algunos de los proyectos en los que he trabajado, desde un ecommerce completo hasta un juego de Tic Tac Toe, y muchos más. Estos proyectos demuestran mi capacidad para crear aplicaciones innovadoras y atractivas que satisfacen las necesidades de los usuarios y las empresas por igual.

        //         Estoy siempre buscando nuevos desafíos y oportunidades para aprender y mejorar mis habilidades como desarrollador. Si tienes un proyecto interesante que te gustaría discutir, no dudes en contactarme. Me encantaría hablar contigo acerca de cómo podemos trabajar juntos para crear algo genial!</p>
        // </Layout>


    )
}

export default Aboutme