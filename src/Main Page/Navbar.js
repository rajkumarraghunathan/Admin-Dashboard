import { IoMdNotifications } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { MdLogout } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import MediaQuery from 'react-responsive';
import { useState } from "react";
import SidebarClose from "../Sidebar/SidebarClose";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const showSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-light topbar static-top  py-0 " style={{ boxShadow: ' 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1)' }}>
            <div className="container-fluid">
                <MediaQuery minWidth={500}>
                    <form class=" ">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 " placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <AiOutlineSearch class="fas fa-search fa-sm" />
                                </button>
                            </div>
                        </div>
                    </form>
                    <ul className="d-flex">
                        <li className="nav-item mt-2">
                            <button type="button" className="position-relative me-2" style={{ border: "none", backgroundColor: "transparent" }}>
                                < IoMdNotifications style={{ color: 'rgb(209,211,226)', fontSize: '130%' }} />
                                <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{ fontSize: "45%" }}>
                                    3+
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </li>
                        <li className="nav-item mt-2">
                            <button type="button" className="position-relative me-2" style={{ border: "none", backgroundColor: "transparent" }}>
                                < IoMailSharp style={{ color: 'rgb(209,211,226)' }} />
                                <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{ fontSize: "50%" }}>
                                    7
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </button>
                        </li >
                        <div className="topbar-divider d-none d-sm-block "></div>
                        <li className="nav-item dropdown mt-2 mx-3">
                            <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <img class="img-profile rounded-circle" src="img/undraw_profile.svg" style={{ height: '2rem' }} />
                            </a>

                            <ul className="dropdown-menu mt-4" style={{ border: 'none', boxShadow: ' 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3)', fontSize: 'smaller' }} >
                                <li><a className="dropdown-item" href="#" ><FaUser className="me-2" style={{ color: 'gray', opacity: '0.5' }} />Profile</a></li>
                                <li><a className="dropdown-item" href="#" ><MdSettingsSuggest className="me-2" style={{ color: 'gray', opacity: '0.5' }} />Settings</a></li>
                                <li><a className="dropdown-item" href="#" ><RxActivityLog className="me-2" style={{ color: 'gray', opacity: '0.5' }} />Activity Log</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#" ><MdLogout className="me-2" style={{ color: 'gray', opacity: '0.5' }} />Logout</a></li>
                            </ul>
                        </li>


                    </ul>

                </MediaQuery>
                <MediaQuery maxWidth={500}>
                    <div className="container d-flex justify-content-between">
                        <div className="d-flex align-items-center" style={{ color: 'blue' }} >  <FaBars /></div>
                        <div className="d-flex">
                            <div class="dropdown">
                                <button class="btn mx-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaSearch onClick={showSidebar} style={{ color: 'rgb(209,211,226)' }} />
                                </button>
                                <div class="dropdown-menu dropdown-menu-right px-3 shadow animated--grow-in show" aria-labelledby="searchDropdown">
                                    <form class="form-inline mr-auto w-100 navbar-search">
                                        <div class="input-group">
                                            <input type="text" class="form-control bg-light border-0" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" style={{ width: '' }} />
                                            <div class="input-group-append">
                                                <button class="btn btn-primary" type="button">
                                                    <AiOutlineSearch class="fas fa-search fa-sm" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='mx-1'>
                                <button type="button" className="position-relative me-2" style={{ border: "none", backgroundColor: "transparent" }}>
                                    < IoMdNotifications style={{ color: 'rgb(209,211,226)' }} />
                                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger " style={{ fontSize: '40%' }}>
                                        3+
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div>
                            <div className="mx-1">
                                <button type="button" className="position-relative me-2" style={{ border: "none", backgroundColor: "transparent" }}>
                                    < IoMailSharp style={{ color: 'rgb(209,211,226)' }} />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '40%' }}>
                                        7
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </div >
                            <div className="dropdown mx-1">
                                <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="img-profile rounded-circle" src="img/undraw_profile.svg" style={{ height: '1.5rem' }} />
                                </a>

                                <ul className="dropdown-menu mt-4" style={{ border: 'none', boxShadow: ' 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.3)', backgroundColor: 'white' }} >
                                    <li><a className="dropdown-item" href="#" ><FaUser className="me-2" style={{ color: 'gray', opacity: '0.5' }} />Profile</a></li>
                                    <li><a className="dropdown-item" href="#" ><MdSettingsSuggest className="me-2" style={{ color: 'gray', opacity: '0.5' }} />Setting</a></li>
                                    <li><a className="dropdown-item" href="#" ><RxActivityLog className="me-2" style={{ color: 'gray', opacity: '0.5' }} />Activity Log</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#" ><MdLogout className="me-2" style={{ color: 'gray', opacity: '0.5' }} />Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </MediaQuery>

            </div>

        </nav >
    )
}



export default Navbar;