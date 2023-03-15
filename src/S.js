import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { BsEmojiHeartEyesFill } from 'react-icons/bs';
import { FaTachometerAlt, FaWrench, FaChartArea } from 'react-icons/fa';
import { IoIosArrowForward, IoMdSettings, IoIosArrowDropleftCircle } from 'react-icons/io';
import { AiFillFolder } from 'react-icons/ai';
import { HiTable } from 'react-icons/hi';

const S = () => {
    const { collapseSidebar } = useProSidebar();

    return (

        <Sidebar backgroundColor='#4e73df' style={{ height: "235vh", color: '#fff' }}>
            <Menu >
                <MenuItem className='px-4 py-2' icon={<h1><BsEmojiHeartEyesFill /></h1>}>{" "}<h6>SB ADMIN <sup>    2</sup></h6></MenuItem>
                <hr class="sidebar-divider mt-0"></hr>
                <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
                <hr class="sidebar-divider mt-0"></hr>
                <MenuItem>INTERFACE</MenuItem>

                <MenuItem data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" icon={<IoMdSettings />}>Components{<IoIosArrowForward />}</MenuItem>
                <div class="row px-4">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="accordion-body">
                            <div className="card card-body">
                                <h6 style={{ opacity: '0.7', fontSize: 'small', color: '#babacf' }}>CUSTOM COMPONENTS:</h6>
                                <p className="dropdown-item px-2 customHover" style={{ fontSize: 'small', color: 'black' }}>Buttons</p>
                                <p className="dropdown-item px-2 mb-1 customHover" style={{ fontSize: 'small', color: 'black' }}>Cards</p>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuItem data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2" icon={<FaWrench />}>Utilities{<IoIosArrowForward />}</MenuItem>
                <div class="row px-4">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="card card-body">
                            <h6 className='mb-2 px-2' style={{ fontSize: 'small', color: '#babacf' }}>CUSTOM UTILITIES:</h6>
                            <li className="dropdown-item px-2 mb-2 customHover" type="button" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Colors</li>
                            <li className="dropdown-item px-2 mb-2 customHover" type="button" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Borders</li>
                            <li className="dropdown-item px-2 mb-2 customHover" type="button" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Animations</li>
                            <li className="dropdown-item px-2 mb-2 customHover" type="button" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Other</li>
                        </div>
                    </div>
                </div>

                <hr class="sidebar-divider mt-0"></hr>
                <MenuItem>CUSTOM UTILITIES:</MenuItem>
                <MenuItem data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" icon={<AiFillFolder />}>Pages{<IoIosArrowForward />}</MenuItem>
                <div class="collapse multi-collapse px-4" id="collapseExample">
                    <div className="card card-body">
                        <h6 style={{ fontSize: 'small', color: '#babacf' }}>LOGIN SCREENS:</h6>
                        <p className="dropdown-item px-2 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Login</p>
                        <p className="dropdown-item px-2 mb-1 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Register</p>
                        <p className="dropdown-item px-2 mb-1 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Forgot Password</p>
                        <h6 style={{ fontSize: 'small', color: '#babacf' }}>OTHER PAGES:</h6>
                        <p className="dropdown-item px-2 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>404 Page</p>
                        <p className="dropdown-item px-2 mb-1 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Blank Page</p>
                    </div>
                </div>

                <MenuItem icon={<FaChartArea />}>Charts</MenuItem>
                <MenuItem icon={<HiTable />}>Tables</MenuItem>
                <MenuItem icon={<h1><IoIosArrowDropleftCircle backgroundColor='#4e73df' /></h1>}
                    onClick={() => {
                        collapseSidebar();
                    }}
                    style={{ textAlign: "center" }}
                ></MenuItem>
            </Menu>
        </Sidebar>

    )
}

export default S