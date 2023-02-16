

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Aboutme from '../pages/Aboutme'
import ContactMe from '../pages/contact'
import Home from '../pages/Home'
import MyWorks from '../pages/myworks'



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='about_me' element={<Aboutme />} />
                <Route path='my_works' element={<MyWorks />} />
                <Route path='contact' element={<ContactMe />} />
                <Route path='/*' element={<Navigate to='/home' />} />
            </Routes>
        </>
    )
}
