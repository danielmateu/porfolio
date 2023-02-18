import React from 'react'
import { iconDataBack, iconDataBack2, iconDataBack3 } from '../mockData'

export const BackEnd = () => {
    return (
        <>
            <h4 className='text-3xl text-gray-700 dark:text-gray-400  justify-start '>Backend</h4>
            <div className="flex flex-col gap-2 min-h-screen items-center" >

                <div >
                    <p className="text-gray-600 dark:text-gray-400 text-justify">
                        Como backend developer, he estado utilizando una variedad de tecnologías para crear aplicaciones y servicios web escalables y seguros. Estas tecnologías incluyen NodeJS, Express, MongoDB, MySQL, GraphQL, Firebase, y Mongoose.

                        NodeJS es la plataforma de JavaScript para el desarrollo de aplicaciones del lado del servidor. Permite utilizar el mismo lenguaje de programación tanto en el frontend como en el backend, lo que simplifica el proceso de desarrollo. Además, NodeJS es muy rápido y escalable, lo que lo hace adecuado para aplicaciones de alto tráfico.
                    </p>

                    <li className="flex justify-around py-6">

                        {
                            iconDataBack.map(icon => (
                                <img key={icon.id} src={icon.src} alt={icon.info} className='hover:-rotate-12 transition-all h-10 dark:bg-white rounded ' />
                            ))
                        }


                    </li>

                    <p className="text-gray-600 dark:text-gray-400 text-justify">
                        Express es un framework de NodeJS que proporciona un conjunto de herramientas para crear servidores web. Permite el enrutamiento de solicitudes, el manejo de errores y la definición de middleware para la manipulación de solicitudes y respuestas HTTP.

                        Mongoose es una biblioteca de NodeJS que proporciona una forma sencilla de interactuar con MongoDB. Mongoose permite definir modelos de datos, esquemas y validaciones de datos para la base de datos. También proporciona una API para realizar operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos.<br />

                        MongoDB es una base de datos NoSQL que utiliza documentos JSON para almacenar datos. Es muy flexible y escalable, lo que la hace ideal para aplicaciones web modernas. MongoDB se integra muy bien con NodeJS y Express, lo que permite el acceso a la base de datos mediante una API RESTful.
                    </p>

                    {/* En cuarto lugar, MySQL es una base de datos relacional que utiliza SQL para la manipulación de datos. Es muy utilizado en aplicaciones empresariales debido a su capacidad de escalabilidad y rendimiento. MySQL también se integra muy bien con NodeJS y Express, lo que permite el acceso a la base de datos mediante una API RESTful.<br /><br /> */}

                    <li className="flex justify-around py-6">

                        {
                            iconDataBack2.map(icon => (
                                <img key={icon.id} src={icon.src} alt={icon.info} className='hover:rotate-12 transition-all h-10' />
                            ))
                        }


                    </li>

                    {/* GraphQL es un lenguaje de consulta para APIs que permite a los clientes solicitar datos de forma flexible y eficiente. Permite a los clientes especificar exactamente qué datos necesitan y cómo quieren que se devuelvan, lo que puede mejorar significativamente la eficiencia de la transferencia de datos. */}

                    <p className='text-gray-600 dark:text-gray-400 text-justify'>
                        Firebase es una plataforma de Google que proporciona una amplia gama de servicios backend para aplicaciones web y móviles. Entre estos servicios se incluyen la autenticación de usuarios, el almacenamiento de archivos, la base de datos en tiempo real y el hosting. Firebase se integra muy bien con NodeJS y permite el acceso a los servicios mediante una API RESTful.<br /><br />


                        En resumen, estas tecnologías son fundamentales para cualquier backend developer que busque crear servicios web escalables y seguros. Desde la plataforma de NodeJS hasta las bases de datos MongoDB y MySQL, estas herramientas permiten la creación de servicios web rápidos y eficientes. El conocimiento y dominio de estas tecnologías es esencial para el éxito en el mundo del desarrollo backend.
                    </p>

                    <div className="flex justify-around py-6">

                        {
                            iconDataBack3.map(icon => (
                                <img key={icon.id} src={icon.src} alt={icon.info} className='hover:-rotate-12 transition-all h-10 ' />
                            ))
                        }

                    </div>
                </div>

            </div>
        </>
    )
}
