import React from 'react'
import { iconDataFront, iconDataFront2, iconDataFront3 } from '../mockData'
// import { Html5, CssThree, Javascript, ReactJs} from '@icons-pack/react-simple-icons';

export const FrontEnd = () => {

    // const iconDataFront = [
    //     {
    //         id: 1,
    //         name: 'LinkdIn',
    //         img: <Html5 title='My title' size={24} />

    //     },
    //     {
    //         id: 2,
    //         name: 'Github',
    //         // url: 'https://github.com/danielmateu',
    //         img: <CssThree title='My title' size={24} />
    //     },
    //     {
    //         id: 3,
    //         name: 'Youtube',
    //         // url: 'https://www.youtube.com/channel/UCuMqJQML3SF0qz2sjKc2T8g',
    //         img: <Javascript title='My title' size={24} />
    //     },
    //     {
    //         id: 4,
    //         name: 'Instragram',
    //         url: 'https://www.instagram.com/danimateu86/',
    //         // img: <Instagram title='My title' size={24} />
    //     },
    //     {
    //         id: 5,
    //         name: 'Soundcloud',
    //         url: 'https://soundcloud.com/danielmateupardo',
    //         // img: <Soundcloud title='My title' size={24} />
    //     }
    // ]

    return (
        <>
            <h3 className='mb-4 text-4xl text-gray-800 dark:text-gray-800 font-semibold'>Tecnologias usadas</h3>
            <h4 className='text-3xl text-gray-700 dark:text-gray-400 justify-start '>Frontend</h4>

            <p className='text-gray-600 dark:text-gray-400 text-justify'>
                Como frontend developer, he estado utilizando una variedad de tecnologías para crear aplicaciones y sitios web interactivos y atractivos. Estas tecnologías incluyen <strong>HTML, CSS, JavaScript, SASS, Tailwind, Material UI, ReactJS</strong> y <strong>NextJS</strong> .
            </p>

            <p className='text-gray-600 dark:text-gray-400 text-justify'>
                En primer lugar <strong>HTML</strong>, el lenguaje de marcado utilizado para crear la estructura y el contenido de una página web. La base de cualquier sitio web, ya que proporciona la estructura y la organización de los elementos de la página, como encabezados, párrafos, imágenes y enlaces que junto al <strong>CSS</strong>, conseguimos aportar diseño a nuestra app.

                Con <strong>JavaScript</strong> hacemos que nuestras páginas sean dinámicas e interactivas. Se utiliza para agregar comportamientos a los elementos de la página, como eventos de clic, animaciones y validación de formularios.
            </p>


            <ul>
                <li className="flex justify-around py-6">
                    {
                        iconDataFront.map((icon) => (
                            <img key={icon.id} src={icon.src} alt={icon.info} height={40} width={40} className='hover:rotate-12 transition-all h-10' />
                        ))
                    }
                </li>
            </ul>

            <p className='text-gray-600 dark:text-gray-400 text-justify'>
                <strong>Tailwind</strong> es un framework de CSS que proporciona clases predefinidas para estilos comunes, lo que hace que el desarrollo sea más rápido y eficiente. También permite personalizar fácilmente los estilos a través de la configuración de variables.<br /><br />

                <strong>Material UI</strong> por su lado, es un framework de diseño que proporciona componentes predefinidos para crear interfaces de usuario basadas en los principios de diseño de <strong>Material Design</strong> de Google. Estos componentes incluyen botones, tarjetas, formularios y más.<br /><br />

                <strong>ReactJS</strong> es la biblioteca de <strong>JavaScript</strong> utilizada para crear interfaces de usuario dinámicas y escalables. Permite la creación de componentes reutilizables y proporciona un estado de aplicación manejado de forma eficiente para una actualización rápida y fluida de la interfaz de usuario.
            </p>



            <ul>
                <li className="flex justify-around py-6">
                    {
                        iconDataFront2.map((icon) => (
                            <img key={icon.id} src={icon.src} alt={icon.info} height={40} width={40} className='hover:-rotate-12 transition-all h-10' />
                        ))
                    }
                </li>
            </ul>

            <p className='text-gray-600 dark:text-gray-400 text-justify'>
                Finalmente, <strong>NextJS</strong> es un framework de <strong>React</strong> que proporciona una serie de características adicionales, como el enrutamiento automático, la generación de páginas estáticas y la renderización del lado del servidor. Esto hace que el desarrollo sea más rápido y eficiente y mejora el rendimiento de la aplicación.<br /><br />

                Estas tecnologías son fundamentales para cualquier front end developer que busque crear sitios web atractivos y funcionales. Desde la estructura básica de <strong>HTML</strong> hasta las bibliotecas avanzadas de <strong>ReactJS</strong> y <strong>NextJS</strong>, estas herramientas permiten la creación de aplicaciones web dinámicas y escalables. El dominio de estas tecnologías es esencial para el éxito en el mundo del desarrollo web.
            </p>


            <ul>
                <li className="flex justify-around py-6">
                    {
                        iconDataFront3.map((icon) => (
                            <img key={icon.id} src={icon.src} alt={icon.info} height={40} width={40} className='hover:rotate-12 transition-all h-10' />
                        ))
                    }
                </li>
            </ul>
        </>
    )
}
