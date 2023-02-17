import React from 'react'
import { iconDataBack, iconDataBack2, iconDataBack3, iconDataFront, iconDataFront2, iconDataFront3 } from '../mockData'

export const FrontEnd = () => {
    return (
        <>
            <h3 className='mb-4 text-4xl text-gray-800 dark:text-gray-800 font-semibold'>Tecnologias usadas</h3>
            <h4 className='text-3xl text-gray-400 dark:text-gray-400 justify-start '>Frontend</h4>

            <p className='text-gray-300 dark:text-gray-400 text-justify'>
                Como frontend developer, he estado utilizando una variedad de tecnologías para crear aplicaciones y sitios web interactivos y atractivos. Estas tecnologías incluyen HTML, CSS, JavaScript, SASS, Tailwind, Material UI, ReactJS y NextJS.
            </p>

            <p className='text-gray-300 dark:text-gray-400 text-justify'>
                En primer lugar HTML, el lenguaje de marcado utilizado para crear la estructura y el contenido de una página web. La base de cualquier sitio web, ya que proporciona la estructura y la organización de los elementos de la página, como encabezados, párrafos, imágenes y enlaces que junto al CSS, conseguimos aportar diseño a nuestra app.

                Con JavaScript hacemos que nuestras páginas sean dinámicas e interactivas. Se utiliza para agregar comportamientos a los elementos de la página, como eventos de clic, animaciones y validación de formularios.
            </p>



            <li className="flex justify-around py-6">
                {
                    iconDataFront.map((icon) => (
                        <img key={icon.id} src={icon.src} alt={icon.info} className='hover:rotate-12 transition-all h-10' />
                    ))
                }
            </li>

            <p className='text-gray-300 dark:text-gray-400 text-justify'>
                Tailwind es un framework de CSS que proporciona clases predefinidas para estilos comunes, lo que hace que el desarrollo sea más rápido y eficiente. También permite personalizar fácilmente los estilos a través de la configuración de variables.<br /><br />

                Material UI por su lado, es un framework de diseño que proporciona componentes predefinidos para crear interfaces de usuario basadas en los principios de diseño de Material Design de Google. Estos componentes incluyen botones, tarjetas, formularios y más.<br /><br />

                ReactJS es la biblioteca de JavaScript utilizada para crear interfaces de usuario dinámicas y escalables. Permite la creación de componentes reutilizables y proporciona un estado de aplicación manejado de forma eficiente para una actualización rápida y fluida de la interfaz de usuario.
            </p>




            <li className="flex justify-around py-6">
                {
                    iconDataFront2.map((icon) => (
                        <img key={icon.id} src={icon.src} alt={icon.info} className='hover:-rotate-12 transition-all h-10' />
                    ))
                }
            </li>

            <p className='text-gray-300 dark:text-gray-400 text-justify'>
                Finalmente, NextJS es un framework de React que proporciona una serie de características adicionales, como el enrutamiento automático, la generación de páginas estáticas y la renderización del lado del servidor. Esto hace que el desarrollo sea más rápido y eficiente y mejora el rendimiento de la aplicación.<br /><br />

                Estas tecnologías son fundamentales para cualquier front end developer que busque crear sitios web atractivos y funcionales. Desde la estructura básica de HTML hasta las bibliotecas avanzadas de ReactJS y NextJS, estas herramientas permiten la creación de aplicaciones web dinámicas y escalables. El dominio de estas tecnologías es esencial para el éxito en el mundo del desarrollo web.
            </p>



            <li className="flex justify-around py-6">
                {
                    iconDataFront3.map((icon) => (
                        <img key={icon.id} src={icon.src} alt={icon.info} className='hover:rotate-12 transition-all h-10' />
                    ))
                }
            </li>
        </>
    )
}
