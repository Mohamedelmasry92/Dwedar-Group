import React from 'react'
import styles from './Footer.module.css'
import home from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import SubscripeForm from '../SubscripeForm/SubscripeForm'



export default function Footer() {
  return <>
    
    

    <div className='bg-custom-father'>

    <div className="container-fluid text-white bg-custom-dark  mt-5 pt-5 pb-2">

        <div className="row justify-content-center  p-0 m-auto">

        <div className="col-lg-3 col-md-6 mt-0 border border-top-0 border-bottom-0 border-end-0">
                <div >
                    <img src={home} className='mt-0 p-0 mb-0 pb-0 w-100' alt=""/>
                    
                </div>
            </div>


            <div className="col-lg-3 col-md-6">
                <div >
                    <h3 className='mb-3'> مجموعة دويدار للخدمات المهنية</h3>
                    <hr/>
                    <p className='fw-bolder fs-5'> العنوان : <a className='btn bg-main text-white fw-bolder button-hover-white w-100' href='https://maps.app.goo.gl/TNwso231RCKsPcbe7' target="_blank" rel="noopener noreferrer"> Dwedar Group، 85 King Faisal Street, Middle East Building، El-Maryotia </a> </p>
                    
                    <hr/>
                    
                    <SubscripeForm />
                


                  
                </div>
            </div>



            <div className="col-lg-3 col-md-6 border border-top-0 border-bottom-0">

              <div className="d-flex justify-content-between">

                
                <div >    
                    <div className=' '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded ' to="/"> دويدار جروب</Link>
                    </div>
                    <div className='mt-4 '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="/"> الرئيسية</Link>
                    </div>
                    <div className='mt-4 '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="about"> من نحن </Link>
                    </div>
                    
                    <div className='mt-4 '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="services"> خدماتنا </Link>
                    </div>
                    
                    <div className='mt-4 '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="team"> فريقنا </Link>
                    </div>
                    
                    <div className='mt-4 '>
                    <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="contact"> اتصل بنا </Link>
                    </div> 
                </div>
                <div className='text-start'>    
                    <div className=' '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="/"> Dwedar Group</Link>
                    </div>
                    <div className=' mt-4'>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="/"> Home</Link>
                    </div>
                    <div className='mt-4 '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="about"> About </Link>
                    </div>
                    
                    <div className='mt-4 '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="services"> Services </Link>
                    </div>
                    
                    <div className='mt-4 '>
                      <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="team"> Our Team </Link>
                    </div>
                    
                    <div className='mt-4 '>
                    <Link className='text-white fs-5 text-decoration-underline button-hover-white rounded' to="contact"> Contact Us </Link>
                    </div> 
                </div>
                
              </div>

            </div>



            <div className="col-lg-3 col-md-6">
                <div >
                <h3>تواصل معنا عن طريق الايميل الخاص بنا : </h3>
                 <a className='btn bg-main text-white fw-bolder button-hover-white w-100' href="mailto:contact@dwedargroup.com">contact@dwedargroup.com</a>
                 <hr/>
                <h3>أو الاتصال على رقمنا :</h3>
                 <a className='btn bg-main text-white fw-bolder button-hover-white w-100' href="tel:+0201001971254">01001971254</a>
                  
                 <hr/>

                <div className=" d-flex justify-content-center align-items-center">
                              <a className="icon d-flex me-2 justify-content-center align-items-center rounded-circle" href="https://www.facebook.com/ali.dwedar.71" target='_blank' rel="noopener noreferrer">
                                  <i className="fa-brands fa-square-facebook fs-5"></i>
                              </a>
                          
                              <a className="icon d-flex me-2 justify-content-center align-items-center rounded-circle"  href="https://wa.me/01001971254" target='_blank' rel="noopener noreferrer">
                                  <i className="fa-brands fa-square-whatsapp fs-5 "></i>  
                              </a>
                         
                          
                              <a className="icon d-flex me-2 justify-content-center align-items-center rounded-circle" href="https://www.linkedin.com/in/dr-ali-dwedar-ca-dba-fessa-1042a0120/" target='_blank' rel="noopener noreferrer">
                                  <i className="fa-brands fa-linkedin fs-5 "></i>
                              </a>
                         
                          
                              <a className="icon d-flex me-2 justify-content-center align-items-center rounded-circle" href="https://www.instagram.com/ali.dwedar.71/" target='_blank' rel="noopener noreferrer">
                                  <i className="fa-brands fa-square-instagram fs-5"></i>
                              </a>
                         
              </div>

                </div>
            </div>

            
        </div>


          <div className=" bg-dark mt-3">
              
              <h6 className='text-center'>Copyright © 2024 <Link to='/' className=' text-white fw-bolder text-decoration-underline button-hover-white rounded' >Dwedar Group</Link>, All rights reserved. Powered by <a href='https://www.linkedin.com/in/mohamed-elmasry-344707219/' target="_blank" rel="noopener noreferrer"  className=' text-white fw-bolder text-decoration-underline button-hover-white rounded' >Mohamed Elmasry</a>.</h6>

          </div>


        

    </div>
  
    </div>



  
  </>
}
