import React from 'react'
import { Link } from 'react-scroll'
import { Layout } from './Layout/Layout'

const Aboutme = () => {
    return (

        <div className="flex flex-col gap-2  px-10 sm:px-20 py-80 sm:py-20 min-h-screen" id='about_me'>
            <h3 className='mb-4 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>Sobre Mi</h3>

            <p
                className='text-gray-800 dark:text-gray-400 text-justify '
            >
                Tengo una experiencia de dos años como programador. Me especializo en el desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas y de vanguardia.<br /><br />
                En el front end, utilizo ReactJS, NextJS y Tailwind para crear interfaces de usuario interactivas y dinámicas. Con estas herramientas, puedo construir sitios web de alta calidad y aplicaciones móviles que son altamente receptivas y fáciles de usar.<br /><br />
                En el backend, utilizo NodeJS, Express y MongoDB para crear soluciones escalables y eficientes que permiten a los usuarios interactuar con los datos de su sitio web. Con estas tecnologías, puedo construir aplicaciones robustas y escalables que pueden manejar grandes volúmenes de datos y transacciones complejas.<br /><br />
                Me enorgullece presentar algunos de los proyectos en los que he trabajado, desde un ecommerce completo hasta un juego de Tic Tac Toe, y muchos más. Estos proyectos demuestran mi capacidad para crear aplicaciones innovadoras y atractivas que satisfacen las necesidades de los usuarios y las empresas por igual.<br /><br />
                Estoy siempre buscando nuevos desafíos y oportunidades para aprender y mejorar mis habilidades como desarrollador. Si tienes un proyecto interesante que te gustaría discutir, no dudes en <strong><Link className='cursor-pointer' to="contact" spy={true} smooth={true} offset={0} duration={500}>contactarme</Link></strong>. Me encantaría hablar contigo acerca de cómo podemos trabajar juntos para crear algo genial!
            </p>
        </div>




    )
}

export default Aboutme