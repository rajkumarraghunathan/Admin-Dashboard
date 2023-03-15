import React from 'react'
import Navbar from './Navbar'
import Section from './Section'
import Footer from './Footer'
import Button from '../ButtonPage'
import { Routes, Route } from "react-router-dom";
import CardPage from '../card'
import ColorPage from '../ColorPage'
import BorderPage from '../BorderPage'
import AnimationPage from '../AnimationPage'
import OtherPage from '../OtherPage'
import ErrorPage from '../404_Page'
import BlankPage from '../BlankPage'
import ChartPage from '../ChartPage'




const MainPage = () => {

    return (

        <div className='mainPageWidth'>
            <Navbar />
            <Routes>
                <Route path='' element={<Section />} />
                <Route path='/button' element={<Button />} exact />
                <Route path='/cardpage' element={<CardPage />} />
                <Route path='/colorpage' element={<ColorPage />} />
                <Route path='/borderpage' element={<BorderPage />} />
                <Route path='/animationpage' element={<AnimationPage />} />
                <Route path='/otherpage' element={<OtherPage />} />
                <Route path='/404_Page' element={<ErrorPage />} />
                <Route path='/blankpage' element={<BlankPage />} />
                <Route path='/chartpage' element={<ChartPage />} />


            </Routes>
            <Footer />

        </div>

    )
}

export default MainPage