import React, { useState , useEffect } from 'react';
import styles from './Navbar.module.css'
import logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
 

  const [activeLink, setActiveLink] = useState(0);

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
 return <>
    

    <div className=" container-fluid bg-main mb-0 pb-0 dont-display">
      <div className='d-flex  justify-content-between align-items-center'>
        <div className='d-flex'>
            <p className='text-white mb-0 ' >مجموعة دويدار | Dwedar Group</p>
        </div>
        <div className='d-flex '>
          <div className='d-flex text-white'>
            <a href='tel:+0201001971254' className='text-white ms-1'>01001971254</a>
            <i className="fa-solid fa-phone-volume pt-1"></i>
          </div>
          <div className='d-flex text-white me-3'>
            <a href='mailto:contact@dwedargroup.com' className='text-white ms-1'>contact@dwedargroup.com</a>
            <i className="fa-solid fa-envelope pt-1 "></i>
        </div>
        </div>
      </div>
    </div>


    <nav
      className={`navbar navbar-expand-lg ${isScrolled ? styles['navbar-fixed'] : ''}`}
    >
      <div className="container text-center">
        <Link className="navbar-brand" to="/">
          <img src={logo} className='logo' alt="logo" />
          <span className='fw-bold'>مجموعة دويدار</span>
        </Link>
        <button
          className="navbar-toggler d-lg-none bigger-z-index"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row " id="collapsibleNavId">
          
        <ul className="col-md-8 col-sm-12 navbar-nav ms-auto mt-2 g-5 mt-lg-0">
      <li className={`nav-item me-2`}>
        <Link className={`nav-link fs-6 fw-bold rounded ${activeLink === 0 ? 'active  bg-main rounded text-white' : ''}`} to="/" onClick={() => handleNavLinkClick(0)}>
          الرئيسية<span className="visually-hidden">(current)</span>
        </Link>
      </li>
      <li className={`nav-item me-2`}>
        <Link className={`nav-link rounded fs-6 fw-bold ${activeLink === 1 ? 'active  bg-main rounded text-white' : ''}`} to="about" onClick={() => handleNavLinkClick(1)}>
          من نحن
        </Link>
      </li>
      <li className={`nav-item me-2`}>
        <Link className={`nav-link rounded fs-6 fw-bold ${activeLink === 2 ? ' active bg-main rounded text-white' : ''}`} to="services" onClick={() => handleNavLinkClick(2)}>
          خدماتنا
        </Link>
      </li>
      <li className={`nav-item me-2`}>
        <Link className={`nav-link rounded fs-6 fw-bold ${activeLink === 3 ? 'active  bg-main rounded text-white' : ''}`} to="team" onClick={() => handleNavLinkClick(3)}>
          فريقنا
        </Link>
      </li>
      <li className={`nav-item me-2`}>
        <Link className={`nav-link rounded fs-6 fw-bold ${activeLink === 4 ? 'active  bg-main rounded text-white' : ''}`} to="contact" onClick={() => handleNavLinkClick(4)}>
          اتصل بنا
        </Link>
      </li>
    </ul>

          <div className="col-md-4 col-sm-12 mt-2">

            <ul className=" d-flex justify-content-center list-unstyled align-items-center">
                        <li >
                            <a className="icon d-flex me-2 justify-content-center align-items-center rounded-circle" href="https://www.facebook.com/ali.dwedar.71" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-square-facebook fs-5"></i>
                            </a>
                        </li>
                        <li >
                            <a className="icon d-flex me-2 justify-content-center align-items-center rounded-circle" href="https://wa.me/01001971254" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-square-whatsapp fs-5 "></i>  
                            </a>
                        </li>
                        <li >
                            <a className="icon d-flex me-2 justify-content-center align-items-center rounded-circle" href="https://www.instagram.com/ali.dwedar.71/" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-square-instagram fs-5"></i>
                            </a>
                        </li>
                        <li >
                            <a className="icon d-flex me-2 justify-content-center align-items-center rounded-circle" href="https://www.linkedin.com/in/dr-ali-dwedar-ca-dba-fessa-1042a0120/" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin fs-5 "></i>
                            </a>
                        </li>
            </ul>

          </div>



 
        </div>
      </div>
    </nav>
    

  </>
}
