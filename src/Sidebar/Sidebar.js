import React from 'react'
import { BsEmojiHeartEyesFill } from 'react-icons/bs';
import { FaTachometerAlt, FaWrench, FaChartArea } from 'react-icons/fa';
import { IoIosArrowForward, IoMdSettings, } from 'react-icons/io';
import { AiFillFolder } from 'react-icons/ai';
import { HiTable } from 'react-icons/hi';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleSidebarClose = () => {
    setIsOpen(!isOpen)
  }

  return (


    <div className={` px-4 ${isOpen ? "sidebarWidth" : "active"}`} style={{ backgroundColor: '#4e73df', color: '#fff' }}>
      {/* Emoji */}
      {isOpen ?
        (<>
          <div className='d-flex py-2 justify-content-center '>
            <h3> <BsEmojiHeartEyesFill /></h3>
            <p className='ms-3 align-self-center' style={{ fontWeight: 'bold' }}>SB ADMIN <sup>2</sup></p>
          </div>
          <hr class="sidebar-divider mt-0"></hr>
        </>) :
        (
          <>
            <div className='d-flex justify-content-center py-2'>
              <h2 > <BsEmojiHeartEyesFill /></h2>
            </div>

            <hr class="sidebar-divider mt-0"></hr></>
        )}

      {/* Dashboard */}
      {isOpen ?
        (<>
          <div className='d-flex pointer'>
            <FaTachometerAlt className=' mt-1' style={{ opacity: '0.7' }} />
            <Link to='' style={{ color: 'white', textDecoration: 'none' }}><p className='ms-2' style={{ fontSize: 'small' }}>Dashboard</p></Link>
          </div>
          <hr class="sidebar-divider mt-0"></hr>

          {/* INTERFACE */}

          <div>
            <h6 style={{ opacity: '0.7', fontSize: 'small' }}>INTERFACE</h6>
            <div className="dropdown py-3 width">
              <p data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                <IoMdSettings /><span>Components</span><IoIosArrowForward />

              </p>
              <div class="row">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                  <div className="card card-body">
                    <h6 style={{ opacity: '0.7', fontSize: 'small', color: '#babacf' }}>CUSTOM COMPONENTS:</h6>
                    <Link to='/button' style={{ textDecoration: 'none' }}>  <p className="dropdown-item px-2 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Buttons</p></Link>
                    <Link to='/cardpage' style={{ textDecoration: 'none' }}>  <p className="dropdown-item px-2 mb-1 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Cards</p></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown pointer ">
              <p className="" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <FaWrench /> <span className=''>Utilities</span> <IoIosArrowForward />
              </p>
              <div class="row">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                  <div className="card card-body">
                    <h6 className='mb-2 px-2' style={{ opacity: '', fontSize: 'small', color: '#babacf' }}>CUSTOM UTILITIES:</h6>
                    <Link to='/colorpage' style={{ textDecoration: 'none' }}> <li className="dropdown-item px-2 mb-2 customHover" type="button" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Colors</li></Link>
                    <Link to='/borderpage' style={{ textDecoration: 'none' }}>  <li className="dropdown-item px-2 mb-2 customHover" type="button" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Borders</li></Link>
                    <Link to='/animationpage' style={{ textDecoration: 'none' }}> <li className="dropdown-item px-2 mb-2 customHover" type="button" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Animations</li></Link>
                    <Link to='/otherpage' style={{ textDecoration: 'none' }}>   <li className="dropdown-item px-2 mb-2 customHover" type="button" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Other</li></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="sidebar-divider mt-0"></hr>

          {/* ADDONS */}

          <div>
            <h6 style={{ opacity: '0.7', fontSize: 'small' }}>ADDONS</h6>

            <div className="dropdown py-3 ">
              <p class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <AiFillFolder /> <span className=''>Pages</span> <IoIosArrowForward />
              </p>

              <div class="collapse multi-collapse" id="collapseExample">
                <div className="card card-body">
                  <h6 style={{ opacity: '0.7', fontSize: 'small', color: '#babacf' }}>LOGIN SCREENS:</h6>
                  <Link to='/Login' style={{ textDecoration: 'none' }} > <p className="dropdown-item px-2 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Login</p></Link>
                  <Link to='/Register' style={{ textDecoration: 'none' }} >   <p className="dropdown-item px-2 mb-1 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Register</p></Link>
                  <Link to='/Forget_password' style={{ textDecoration: 'none' }} >  <p className="dropdown-item px-2 mb-1 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Forgot Password</p></Link>
                  <h6 style={{ opacity: '0.7', fontSize: 'small', color: '#babacf' }}>OTHER PAGES:</h6>
                  <Link to='/404_Page' style={{ textDecoration: 'none' }}><p className="dropdown-item px-2 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>404 Page</p></Link>
                  <Link to='/blankpage' style={{ textDecoration: 'none' }}>  <p className="dropdown-item px-2 mb-1 customHover" style={{ opacity: '0.8', fontSize: 'small', color: 'black' }}>Blank Page</p></Link>
                </div>
              </div>
            </div>
            <div className='d-flex hover pointer '>
              <FaChartArea className=' mt-1' style={{ opacity: '0.7' }} />
              <Link to='/chartpage' style={{ textDecoration: 'none', color: 'white' }}><p className='ms-2'>Charts</p></Link>
            </div>
            <div className='d-flex hover pointer '>
              <HiTable className=' mt-1' style={{ opacity: '0.7' }} />
              <p className='ms-2 ' style={{ fontSize: '' }}>Tables</p>
            </div>
          </div>
          <hr class="sidebar-divider mt-0"></hr>
        </>) :
        (<>
          {/* Dashboard */}
          <div className='d-flex  flex-column pointer'>
            <div className='d-flex justify-content-center'><FaTachometerAlt className=' ' style={{ opacity: '0.7' }} /></div>
            <Link to='' style={{ color: 'white', textDecoration: 'none' }}>  <p className='text-center' style={{ fontSize: '70%' }}>Dashboard</p></Link>
          </div>

          <hr className="sidebar-divider mt-0"></hr>

          {/* INTERFACE */}
          <div className='d-flex justify-content-center'>
            <h6 style={{ opacity: '0.7', fontSize: '75%' }}>INTERFACE</h6>
          </div>
          <div className='py-3'>
            <div className="btn-group dropend pointer" >
              <p data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#fff' }}>
                <span className='d-flex justify-content-center '> <IoMdSettings /></span><span style={{ opacity: '0.7', fontSize: '70%' }} >Components</span>
              </p>
              <ul className="dropdown-menu" style={{ fontSize: '80%', color: '#babacf' }}>
                <p className='ms-3 fw-bold mb-0' style={{ opacity: '0.7', color: '#babacf' }}>CUSTOM COMPONENTS:</p>
                <Link to='/button' style={{ textDecoration: 'none' }}> <li><a className="dropdown-item customHover" href="#">Buttons</a></li></Link>
                <li><a className="dropdown-item customHover" href="#">Cards</a></li>
              </ul>
            </div>
            <div className='py-3 text-center'>
              <div className="btn-group dropend  pointer" >
                <p data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#fff' }}>
                  <span > <FaWrench /></span> <span className='d-flex justify-content-center' style={{ opacity: '0.7', fontSize: '75%' }}>Utilities</span>
                </p>
                <ul className="dropdown-menu" style={{ fontSize: '80%', color: '#babacf' }}>
                  <p className='ms-3 fw-bold mb-0' style={{ opacity: '0.7', color: '#babacf' }}>CUSTOM UTILITIES:</p>
                  <Link to='/colorpage' style={{ textDecoration: 'none' }}>  <li><a className="dropdown-item customHover" href="#">Colors</a></li></Link>
                  <Link to='/borderpage' style={{ textDecoration: 'none' }}> <li><a className="dropdown-item customHover" href="#">Borders</a></li></Link>
                  <Link to='/animationpage' style={{ textDecoration: 'none' }}> <li><a className="dropdown-item customHover" href="#">Animations</a></li></Link>
                  <Link to='/otherpage' style={{ textDecoration: 'none' }}>   <li><a className="dropdown-item customHover" href="#">Other</a></li></Link>
                </ul>
              </div>
            </div>
            <hr class="sidebar-divider mt-0"></hr>

            {/* ADDONS */}

            <div className='d-flex justify-content-center'>
              <h6 style={{ opacity: '0.7', fontSize: '75%' }}>ADDONS</h6>
            </div>

            <div className='py-3 text-center'>
              <div className="btn-group dropend  pointer" >
                <p data-bs-toggle="dropdown" aria-expanded="false" style={{ color: '#fff' }}>
                  <span > <AiFillFolder /></span> <span className='d-flex justify-content-center' style={{ opacity: '0.7', fontSize: '75%' }}>Pages</span>
                </p>
                <ul className="dropdown-menu ms-2" style={{ fontSize: '80%', color: '#babacf' }}>
                  <p className='ms-3 fw-bold mb-0' style={{ opacity: '0.7', color: '#babacf' }}>LOGIN SCREENS:</p>
                  <Link to='/Login' style={{ textDecoration: 'none' }} >  <li><a className="dropdown-item customHover" href="#">Login</a></li></Link>
                  <Link to='/Register' style={{ textDecoration: 'none' }} >  <li><a className="dropdown-item customHover" href="#">Register</a></li></Link>
                  <Link to='/Forget_password' style={{ textDecoration: 'none' }} >  <li><a className="dropdown-item customHover" href="#">Forgot Password</a></li></Link>
                  <p className='ms-3 fw-bold mb-0' style={{ opacity: '0.7', color: '#babacf' }}>OTHER PAGES:</p>
                  <Link to='/404_Page' style={{ textDecoration: 'none' }}>   <li><a className="dropdown-item customHover" href="#">404 Page</a></li></Link>
                  <Link to='/blankpage' style={{ textDecoration: 'none' }}> <li><a className="dropdown-item customHover" href="#">Blank Page</a></li></Link>
                </ul>
              </div>
            </div>
            <div className='d-flex  flex-column mt-4 pointer'>
              <div className='d-flex justify-content-center'><FaChartArea /></div>
              <Link to='/chartpage' style={{ textDecoration: 'none' }}>  <p className='text-center' style={{ opacity: '0.7', fontSize: '75%' }}>Charts</p></Link>
            </div>
            <div className='d-flex  flex-column mt-4 pointer'>
              <div className='d-flex justify-content-center'><HiTable /></div>
              <p className='text-center' style={{ opacity: '0.7', fontSize: '75%' }}>Tables</p>
            </div>
            <hr class="sidebar-divider mt-0"></hr>
          </div>
        </>)}
      {isOpen ? (<div>
        <div class="container-fluid mt-3 d-flex justify-content-center">
          <p class="" type="button" >
            <h1 ><IoIosArrowDropleftCircle onClick={handleSidebarClose} /></h1>
          </p>
        </div>
      </div>)
        :
        (<div class="container-fluid mt-3 d-flex justify-content-center">
          <p class="navbar-toggler hover" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"  >
            <h1 ><IoIosArrowDroprightCircle onClick={handleSidebarClose} /></h1>
          </p>
        </div>)}
    </div>

  )
}

export default Sidebar;