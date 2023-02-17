import React from 'react'
import { Layout } from './Layout/Layout'
import { Link } from 'react-scroll'
import { Hi } from './Hi'
import AboutMe from './AboutMe'
import { MyWorks } from './MyWorks'
import { Form } from './Form'
import { Tecnologias } from './Tecnologias'
import { FirstTitle } from './FirstTitle'
import { SecondTitle } from './SecondTitle'
import { ThirdTitle } from './ThirdTitle'




const Home = () => {


    return (
        <Layout>
            <FirstTitle />

            <Hi />

            <SecondTitle />

            <AboutMe />

            <ThirdTitle />

            <MyWorks />

            <Tecnologias />

            <Form />
        </Layout>
    )
}

export default Home