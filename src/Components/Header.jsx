import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {





  return (
    <>

      <div className="parent">
        <div className="container container-parent">


          {/* tabbar */}
          <div className="headerwp clearfix">
            <div className="container min-nav">
              <div className="row align-items-center ">
                <div className="col-lg-4 number-tapbar col-md-6 col-12 col-sm-4">
                  <div className="loc-heder">
                    <p>
                      <i className="fas fa-mobile-alt"></i>
                      <span className='fw-bolder'>
                        966565821156+
                      </span>					</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6 col-sm-4">
                  <div className="desktoplogo clearfix">
                    <NavLink to="/"><img src="./images/WhatsApp_Image_2022-10-30_at_12.35.47_AM-removebg-preview.png" alt="" /></NavLink>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6 col-sm-4">
                  <div className="social-media">
                    <ul>
                      <li><a href="https://www.facebook.com/profile.php?id=100087437136721" target='_blanck'><i className="fab fa-facebook-f"></i> </a></li>
                      <li><a href="https://twitter.com/home" target='_blanck'><i className="fab fa-twitter"></i> </a></li>
                      <li><NavLink to="#"><i className="fab fa-youtube"></i> </NavLink></li>
                      <li><NavLink to="#"><i className="fab fa-instagram"></i> </NavLink></li>
                      <li><NavLink to="#"><i className="fas fa-language"></i> </NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* navbar */}

          <div className="navbars">
            <div className="top-navbar">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                  <NavLink className="navbar-brand" to="#"><img src="./images/WhatsApp_Image_2022-10-30_at_12.35.47_AM-removebg-preview.png" className='image-navbar-reponsive' alt="" /></NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                      <li className="nav-item">
                        <NavLink className="nav-link links-header" to="/"><i className="fa-solid fa-house ms-2"></i>????????????????</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link links-header" to="/about"><i className="fa-regular fa-address-book ps-2"></i>???? ??????</NavLink>
                      </li>




                      <li className="nav-item">
                        <NavLink className="nav-link" to="/services" >
                          <i className="fa-solid fa-bars"></i>    ??????????????
                        </NavLink>
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="#">???????????? ????????????</NavLink>
                <NavLink className="dropdown-item" to="#">???????????? ??????????????</NavLink>
                <NavLink className="dropdown-item" to="#"> ???????????? ??????????????</NavLink>
                <NavLink className="dropdown-item" to="#"> ???????????? ???????????? </NavLink>
                <NavLink className="dropdown-item" to="#"> ???????????? ??????????????</NavLink>
              </ul> */}
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="#"><i className="fa-regular fa-address-book ps-2"></i>??????????????</NavLink>
                      </li>

                      <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa-solid fa-bars"></i>    ??????????????
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <NavLink className="dropdown-item" to="#"> ?????????? ??????????</NavLink>
                          <NavLink className="dropdown-item" to="#"> ??????????  ???????????? </NavLink>
                          <NavLink className="dropdown-item" to="#">??????????  ???????????? </NavLink>
                          <NavLink className="dropdown-item" to="#">??????????  ???????????? </NavLink>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact"><i className="fa-brands fa-telegram ms-2"></i>?????????????? ????????</NavLink>
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>
            </div>

          </div>



          {/* icons whatsapp */}
          <div className="icons-whatsapp">
            <a href='https://wa.me/+966565821156' target='_blank'>
              <i class="fa-brands fa-whatsapp text-success"></i>            </a>
          </div>

          <div className="icons-facbook">
            <a href='https://www.facebook.com/people/The_Black_Horse/100087437136721/' target='_blank'>
              <i class="fa-brands fa-facebook "></i>            </a>
          </div>

          <div className="icons-twitter">
            <a href='https://twitter.com/i/flow/login' target='_blank'>
              <i class="fa-brands fa-twitter text-white"></i>            </a>
          </div>






        </div>
      </div>


    </>
  )
}

export default Header