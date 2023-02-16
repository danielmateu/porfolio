import React from 'react'
import { Layout } from '../components/Layout/Layout'

const Aboutme = () => {
    return (
        <Layout>
            <div className="min-h-screen flex flex-col justify-center items-center bg-music bg-fixed bg-cover bg-center bg-no-repeat" id='hero'>
                <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>Soy Daniel Mateu</h3>

                <p className='text-gray-800 dark:text-gray-400 px-20 selection:bg-sky-300 selection:text-sky-900'>
                    Desde principios del 2020, sentí la necesidad de realizar cambios en mi vida, tanto personal como profesional. El mundo cambia constantemente y sentí que debía hacer lo mísmo.<br /><br />
                    Me introduje en este mundo aprendiendo los fundamentos de la programación en el campus de la <a href="#">IT Academy</a> perteneciente a <strong>Barcelona Activa</strong> en Marzo de 2021 y a partir de ahí, no he dejado de investigar, aprender y aprovechar las tecnologías necesarias para continuar creciendo como programador frontend, sin dejar atrás el backend ya que sin uno, el otro no tiene razón de ser.<br /><br />
                    A modo personal, amo la música... a los 9 años aprendí a tocar el piano, luego seguí con la batería y de forma autodidacta, seguí con la guitarra, el bajo y el canto. Para mi, escribir de música y crear soluciones para ayudar a la gente que tengo cerca siempre ha sido una motivación muy importante y poco a poco con los proyectos que voy realizando a diario veo fluye al crear cosas buenas! 😊
                </p>
            </div>
        </Layout>
    )
}

export default Aboutme