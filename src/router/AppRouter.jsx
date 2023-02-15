

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Aboutme from '../pages/AboutMe'
import ContactMe from '../pages/contact'
import Home from '../pages/Home'
import MyWorks from '../pages/myworks'



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='about-me' element={<Aboutme />} />
                <Route path='my-works' element={<MyWorks />} />
                <Route path='contact' element={<ContactMe />} />
                <Route path='/*' element={<Navigate to='/home' />} />
            </Routes>
        </>
    )
}