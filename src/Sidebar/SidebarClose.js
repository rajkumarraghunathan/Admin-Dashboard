import { BsEmojiHeartEyesFill } from 'react-icons/bs';
import { FaTachometerAlt, FaWrench, FaChartArea } from 'react-icons/fa';
import { IoIosArrowForward, IoMdSettings, } from 'react-icons/io';
import { AiFillFolder } from 'react-icons/ai';
import { HiTable } from 'react-icons/hi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { useState } from 'react';


const SidebarClose = ({ }) => {

    const [isClose, setIsClose] = useState(false);

    const handleSidebarOpen = () => {
        setIsClose(!isClose)
    }

    return (
        <>


            <div className="container" style={{ backgroundColor: '#4e73df', color: '#fff', width: '8%' }}>
                <div className='d-flex justify-content-center py-2'>
                    <h1 > <BsEmojiHeartEyesFill /></h1>
                </div>

                <hr class="sidebar-divider mt-0"></hr>

                {/* Dashboard */}
                <div className='d-flex  flex-column pointer'>
                    <div className='d-flex justify-content-center'><FaTachometerAlt className=' ' style={{ opacity: '0.7' }} /></div>
                    <p className='text-center' style={{ fontSize: 'small' }}>Dashboard</p>
                </div>

                <hr className="sidebar-divider mt-0"></hr>

                {/* INTERFACE */}
                <div className='d-flex justify-content-center'>
                    <h6 style={{ opacity: '0.7', fontSize: 'small' }}>INTERFACE</h6>
                </div>
                <div className='py-3'>
                    <div className="btn-group dropend  pointer" >
                        <p data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#fff' }}>
                            <span className='d-flex justify-content-center'> <IoMdSettings /></span>   Components
                        </p>
                        <ul className="dropdown-menu text-center">
                            <h6 style={{ opacity: '0.7', fontSize: 'small', color: '#babacf' }}>CUSTOM COMPONENTS:</h6>
                            <li><a className="dropdown-item customHover" href="#">Buttons</a></li>
                            <li><a className="dropdown-item customHover" href="#">Cards</a></li>
                        </ul>
                    </div>
                    <div className='py-3 text-center'>
                        <div className="btn-group dropend  pointer" >
                            <p data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#fff' }}>
                                <span > <FaWrench /></span> <span className='d-flex justify-content-center'>Utilities</span>
                            </p>
                            <ul className="dropdown-menu text-center">
                                <h6 style={{ opacity: '0.7', fontSize: 'small', color: '#babacf' }}>CUSTOM UTILITIES:</h6>
                                <li><a className="dropdown-item customHover" href="#">Colors</a></li>
                                <li><a className="dropdown-item customHover" href="#">Borders</a></li>
                                <li><a className="dropdown-item customHover" href="#">Animations</a></li>
                                <li><a className="dropdown-item customHover" href="#">Other</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr class="sidebar-divider mt-0"></hr>

                    {/* ADDONS */}

                    <div className='d-flex justify-content-center'>
                        <h6 style={{ opacity: '0.7', fontSize: 'small' }}>ADDONS</h6>
                    </div>

                    <div className='py-3 text-center'>
                        <div className="btn-group dropend  pointer" >
                            <p data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#fff' }}>
                                <span > <AiFillFolder /></span> <span className='d-flex justify-content-center'>Pages</span>
                            </p>
                            <ul className="dropdown-menu ms-2">
                                <h6 className='ms-3' style={{ opacity: '0.7', fontSize: 'small', color: '#babacf' }}>LOGIN SCREENS:</h6>
                                <li><a className="dropdown-item customHover" href="#">Login</a></li>
                                <li><a className="dropdown-item customHover" href="#">Register</a></li>
                                <li><a className="dropdown-item customHover" href="#">Forgot Password</a></li>
                                <h6 className='ms-3' style={{ opacity: '0.7', fontSize: 'small', color: '#babacf' }}>OTHER PAGES:</h6>
                                <li><a className="dropdown-item customHover" href="#">404 Page</a></li>
                                <li><a className="dropdown-item customHover" href="#">Blank Page</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex  flex-column mt-4 pointer'>
                        <div className='d-flex justify-content-center'><FaChartArea /></div>
                        <p className='text-center' style={{ fontSize: 'small' }}>Charts</p>
                    </div>
                    <div className='d-flex  flex-column mt-4 pointer'>
                        <div className='d-flex justify-content-center'><HiTable /></div>
                        <p className='text-center' style={{ fontSize: 'small' }}>Tables</p>
                    </div>
                    <hr class="sidebar-divider mt-0"></hr>
                    <div class="container-fluid mt-3 d-flex justify-content-center">
                        <p class="navbar-toggler hover" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"  >
                            <h1 ><IoIosArrowDroprightCircle onClick={handleSidebarOpen} /></h1>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarClose;