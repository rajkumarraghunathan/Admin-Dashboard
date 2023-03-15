import React from 'react'
import Cards from '../Section Cards/Cards'
import { FaDownload } from "react-icons/fa"
import PieChart from './PieChart'
import DonoughtChart from './DonoughtChart'
import ProjectCard from './ProjectCard';
import Color from './Color';
import Illustrations from './Illustrations';
import Approach from './Approach';


const Section = () => {
    return (
        <div className='py-1 small' >
            <div className=' d-flex justify-content-between p-3  small ' >
                <div className='' style={{ fontSize: '190%', color: '#625c69' }}>
                    Dashboard
                </div>
                <div className='gap'>
                    <a className='btn btn-primary' href="#"><FaDownload className='me-1' />Generate Report</a>
                </div>

            </div>
            <div className='d-flex justify-content-md-around cardDesign-small-screen '>
                <Cards />
            </div>
            <div className='row mx-0 my-4'>
                <div className='col-xl-8 col-lg-7 col-md-10'>   <PieChart /> </div>
                <div className='col-xl-4 col-lg-5 col-md-2' >   <DonoughtChart /> </div>
            </div>
            <div className='row mx-2'>
                <div className='col-lg-6 mb-4'>
                    <ProjectCard />
                    <Color />
                </div>
                <div class="col-lg-6 mb-4">
                    <Illustrations />
                    <Approach />
                </div>
            </div>
        </div>

    )
}

export default Section