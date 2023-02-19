import React from 'react'
import { iconDataBack, iconDataBack2, iconDataBack3 } from '../mockData'

export const BackEnd = () => {
    return (
        <>
            <h4 className='text-3xl text-gray-700 dark:text-gray-400  justify-start '>Backend</h4>
            <div className="flex flex-col gap-2 min-h-screen items-center" >

                <div >
                    <p className="text-gray-600 dark:text-gray-400 text-justify">
                        Como backend developer, he estado utilizando una variedad de tecnologías para crear aplicaciones y servicios web escalables y seguros. Estas tecnologías incluyen <strong>NodeJS, Express, MongoDB, MySQL, GraphQL, Firebase</strong> y <strong>Mongoose</strong>.

                        <strong>NodeJS</strong> la plataforma de <strong>JavaScript</strong> para el desarrollo de aplicaciones del lado del servidor. Permite utilizar el mismo lenguaje de programación tanto en el frontend como en el backend, lo que simplifica el proceso de desarrollo. Además, <strong>NodeJS</strong> es muy rápido y escalable, lo que lo hace adecuado para aplicaciones de alto tráfico.
                    </p>

                    <ul>
                        <li className="flex justify-around py-6">

                            {
                                iconDataBack.map(icon => (
                                    <img key={icon.id} src={icon.src} alt={icon.info} className='hover:-rotate-12 transition-all h-10 dark:bg-white rounded ' height={40} width={40} />
                                ))
                            }
                        </li>
                    </ul>

                    <p className="text-gray-600 dark:text-gray-400 text-justify">
                        <strong>Express</strong> es un framework de <strong>NodeJS</strong> que proporciona un conjunto de herramientas para crear servidores web. Permite el enrutamiento de solicitudes, el manejo de errores y la definición de middleware para la manipulación de solicitudes y respuestas <strong>HTTP</strong>.

                        <strong>Mongoose</strong> es una biblioteca de <strong>NodeJS</strong> que proporciona una forma sencilla de interactuar con <strong>MongoDB</strong>. <strong>Mongoose</strong> permite definir modelos de datos, esquemas y validaciones de datos para la base de datos. También proporciona una API para realizar operaciones de <strong>CRUD</strong> (Crear, Leer, Actualizar, Eliminar) en la base de datos.<br />

                        <strong>MongoDB</strong> es una base de datos NoSQL que utiliza documentos JSON para almacenar datos. Es muy flexible y escalable, lo que la hace ideal para aplicaciones web modernas. MongoDB se integra muy bien con <strong>NodeJS</strong> y <strong>Express</strong>, lo que permite el acceso a la base de datos mediante una <strong> API RESTful</strong>.
                    </p>

                    <ul>
                        <li className="flex justify-around py-6">

                            {
                                iconDataBack2.map(icon => (
                                    <img key={icon.id} src={icon.src} alt={icon.info} height={40} width={40} className='hover:rotate-12 transition-all h-10' />
                                ))
                            }
                        </li>
                    </ul>

                    <p className='text-gray-600 dark:text-gray-400 text-justify'>
                        <strong>Firebase</strong> es una plataforma de Google que proporciona una amplia gama de servicios backend para aplicaciones web y móviles. Entre estos servicios se incluyen la autenticación de usuarios, el almacenamiento de archivos, la base de datos en tiempo real y el hosting. <strong>Firebase</strong> se integra muy bien con <strong>NodeJS</strong> y permite el acceso a los servicios mediante una API RESTful.<br /><br />

                        En resumen, estas tecnologías son fundamentales para cualquier backend developer que busque crear servicios web escalables y seguros. Desde la plataforma de <strong>NodeJS</strong> hasta las bases de datos <strong>MongoDB</strong> y <strong>MySQL</strong>, estas herramientas permiten la creación de servicios web rápidos y eficientes. El conocimiento y dominio de estas tecnologías es esencial para el éxito en el mundo del desarrollo backend.
                    </p>

                    <div className="flex justify-around py-6">

                        {
                            iconDataBack3.map(icon => (
                                <img key={icon.id} src={icon.src} alt={icon.info} height={40} width={40} className='hover:-rotate-12 transition-all h-10 ' />
                            ))
                        }

                    </div>
                </div>

            </div>
        </>
    )
}
