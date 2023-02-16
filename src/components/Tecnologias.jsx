import React from 'react'
import { iconDataBack, iconDataFront } from '../mockData'


export const Tecnologias = () => {
    return (
        <div className="flex flex-col gap-2 px-10 pt-40 min-h-screen" id='tecnologias'>
            <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>Tecnologias usadas</h3>

            <h4 className='text-gray-800 dark:text-gray-400 px-20 selection:bg-sky-300 selection:text-sky-900'>Frontend</h4>
            <div className='flex gap-6'>
                <div className="w-1/6 grid gap-4">
                    {
                        iconDataFront.map((icon) => (
                            <img key={icon.id} src={icon.src} alt={icon.info}/>
                        ))
                    }
                    
                </div>

                <div className="w-5/6">

                    <p>
                        Como front end developer, he estado utilizando una variedad de tecnologías para crear aplicaciones y sitios web interactivos y atractivos. Estas tecnologías incluyen HTML, CSS, JavaScript, SASS, Tailwind, Material UI, ReactJS y NextJS. <br /><br />

                        En primer lugar, HTML es el lenguaje de marcado utilizado para crear la estructura y el contenido de una página web. La base de cualquier sitio web, ya que proporciona la estructura y la organización de los elementos de la página, como encabezados, párrafos, imágenes y enlaces.<br /><br />

                        En segundo lugar, CSS se utiliza para dar estilo y diseño a una página web.<br /><br />

                        En tercer lugar, JavaScript es el lenguaje de programación utilizado para hacer que nuestras páginas sean dinámica e interactiva. Se utiliza para agregar comportamientos a los elementos de la página, como eventos de clic, animaciones y validación de formularios.<br /><br />

                        SASS (Syntactically Awesome Style Sheets) es una extensión de CSS que agrega características adicionales, como variables, funciones y anidamiento de estilos, lo que hace que el código sea más modular y fácil de mantener.<br /><br />

                        En quinto lugar, Tailwind es un framework de CSS que proporciona clases predefinidas para estilos comunes, lo que hace que el desarrollo sea más rápido y eficiente. También permite personalizar fácilmente los estilos a través de la configuración de variables.

                        En sexto lugar, Material UI es un framework de diseño que proporciona componentes predefinidos para crear interfaces de usuario basadas en los principios de diseño de Material Design de Google. Estos componentes incluyen botones, tarjetas, formularios y más.

                        En séptimo lugar, ReactJS es una biblioteca de JavaScript utilizada para crear interfaces de usuario dinámicas y escalables. Permite la creación de componentes reutilizables y proporciona un estado de aplicación manejado de forma eficiente para una actualización rápida y fluida de la interfaz de usuario.

                        Finalmente, NextJS es un framework de React que proporciona una serie de características adicionales, como el enrutamiento automático, la generación de páginas estáticas y la renderización del lado del servidor. Esto hace que el desarrollo sea más rápido y eficiente y mejora el rendimiento de la aplicación.

                        En conclusión, estas tecnologías son fundamentales para cualquier front end developer que busque crear sitios web atractivos y funcionales. Desde la estructura básica de HTML hasta las bibliotecas avanzadas de ReactJS y NextJS, estas herramientas permiten la creación de aplicaciones web dinámicas y escalables. El dominio de estas tecnologías es esencial para el éxito en el mundo del desarrollo web.</p>
                </div>
            </div>
            <h4 className='text-gray-800 dark:text-gray-400 px-20 selection:bg-sky-300 selection:text-sky-900'>Backend</h4>

            <div className='flex gap-6'>
                <div className="w-1/6 grid gap-4">

                    {
                        iconDataBack.map(icon => (
                            <img src={icon.src} alt={icon.info} />
                        ))
                    }

                    
                </div>

                <div className="w-5/6">
                    Como backend developer, has estado utilizando una variedad de tecnologías para crear aplicaciones y servicios web escalables y seguros. Estas tecnologías incluyen NodeJS, Express, MongoDB, MySQL, GraphQL, Firebase, y Mongoose. A continuación, se describen cada una de estas tecnologías y cómo se utilizan en el desarrollo backend.

                    En primer lugar, NodeJS es una plataforma de JavaScript para el desarrollo de aplicaciones del lado del servidor. Permite utilizar el mismo lenguaje de programación tanto en el frontend como en el backend, lo que simplifica el proceso de desarrollo. Además, NodeJS es muy rápido y escalable, lo que lo hace adecuado para aplicaciones de alto tráfico.

                    En segundo lugar, Express es un framework de NodeJS que proporciona un conjunto de herramientas para crear servidores web. Permite el enrutamiento de solicitudes, el manejo de errores y la definición de middleware para la manipulación de solicitudes y respuestas HTTP.

                    En tercer lugar, MongoDB es una base de datos NoSQL que utiliza documentos JSON para almacenar datos. Es muy flexible y escalable, lo que la hace ideal para aplicaciones web modernas. MongoDB se integra muy bien con NodeJS y Express, lo que permite el acceso a la base de datos mediante una API RESTful.

                    En cuarto lugar, MySQL es una base de datos relacional que utiliza SQL para la manipulación de datos. Es muy utilizado en aplicaciones empresariales debido a su capacidad de escalabilidad y rendimiento. MySQL también se integra muy bien con NodeJS y Express, lo que permite el acceso a la base de datos mediante una API RESTful.

                    En quinto lugar, GraphQL es un lenguaje de consulta para APIs que permite a los clientes solicitar datos de forma flexible y eficiente. Permite a los clientes especificar exactamente qué datos necesitan y cómo quieren que se devuelvan, lo que puede mejorar significativamente la eficiencia de la transferencia de datos.

                    En sexto lugar, Firebase es una plataforma de Google que proporciona una amplia gama de servicios backend para aplicaciones web y móviles. Entre estos servicios se incluyen la autenticación de usuarios, el almacenamiento de archivos, la base de datos en tiempo real y el hosting. Firebase se integra muy bien con NodeJS y permite el acceso a los servicios mediante una API RESTful.

                    Por último, Mongoose es una biblioteca de NodeJS que proporciona una forma sencilla de interactuar con MongoDB. Mongoose permite definir modelos de datos, esquemas y validaciones de datos para la base de datos. También proporciona una API para realizar operaciones de CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos.

                    En resumen, estas tecnologías son fundamentales para cualquier backend developer que busque crear servicios web escalables y seguros. Desde la plataforma de NodeJS hasta las bases de datos MongoDB y MySQL, estas herramientas permiten la creación de servicios web rápidos y eficientes. El conocimiento y dominio de estas tecnologías es esencial para el éxito en el mundo del desarrollo backend.
                </div>
            </div>

        </div>
    )
}
