import React, { useEffect } from 'react'
import styles from './Contact.module.css'
import ContactForm from '../ContactForm/ContactForm'
import 'animate.css';


export default function Contact() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    

    <div className='bg-custom-father'>
      <div className="container-fluid text-white bg-custom-dark   p-5">
        <div className="row justify-content-center align-items-center  p-0 m-auto">


        <div className="col-md-6 animate__animated animate__zoomInRight">
            <div>
              <p className='fw-bolder text-white me-5 fs-1 p-3'> اتصل بنا  </p>
            </div>        
        </div>

        <div className="col-md-6 animate__animated animate__zoomInLeft">
        <div className=" ">
          
            
            <div className="card mb-3 m-auto card-div-father">
              <div className="row g-0">
                {/* <div className="col-md-4">
                  <img src={about} className="w-100 rounded h-100 m-0 p-0 " alt="..."/> 
                </div> */}
                <div className="col-md-12">
                  <div className="card-body">
                    
                    <p className="card-text fw-bolder">في مجموعة دويدار للخدمات المهنية، نفخر بكوننا من أفضل وأكفأ وأسرع مقدمي الخدمات المهنية في مصر. </p>
                    <p className="card-text text-start"><small className="text-body-secondary">At Dwedar Professional Services Group, we pride ourselves on being the best, easiest, cheapest and fastest service provider within Egypt.</small></p>
                  </div>
              </div>
            </div>
  
            
            
  
        </div>
  
      </div>
  
        </div>


        </div>
      </div>
    </div>


    
    <div className="col-md-12 text-center mt-5">
        <div className=' bg-custom-father-white'>
          <div className='bg-custom-blue'>
            <p className='fs-3 fw-bold text-white p-4'> كيف يمكننا أن نساعدك ؟ </p>     
          </div>
        </div>
    </div>


    <div className="mt-3 title mb-0 py-3 text-center ">
          <p className='fw-bold  text-main mt-3 mb-1 '> تواصل معنا  </p>
          <div className="line translate-middle "></div>
    </div>

    
    <div className='container-fluid px-lg-5 px-md-auto px-sm-auto  mb-5 mt-3 '>
        <div className='row justify-content-center align-items-center '>


          <div className='col-md-4 bg-dark text-white p-4'>
                    <h3 className='mb-4'> مجموعة دويدار للخدمات المهنية</h3>
                    < hr />
                    <p className='text-start fw-bold mb-0'> Office Hours : Sat-Thur: 9:00am - 6:00pm </p>
                    <p className='text-start fw-bold mt-0'> Fri : Closed </p>
                    < hr />
                    <p className='fw-bolder fs-5'> العنوان : <a className='btn bg-main text-white fw-bolder button-hover-white w-100' href='https://maps.app.goo.gl/TNwso231RCKsPcbe7' target="_blank" rel="noopener noreferrer" > Dwedar Group، 85 King Faisal Street, Middle East Building، El-Maryotia </a> </p>
                    
          </div>

          <div className='col-md-4 bg-main p-5 text-white '>

            <ContactForm />

          </div>
          
          <div className='col-md-4 bg-dark text-white py-5 px-4'>
                <h3>تواصل معنا عن طريق الايميل الخاص بنا : </h3>
                 <a className='btn bg-main text-white fw-bolder button-hover-white w-100' href="mailto:contact@dwedargroup.com">contact@dwedargroup.com</a>
                 <hr/>
                <h3>أو الاتصال على رقمنا :</h3>
                 <a className='btn bg-main text-white fw-bolder button-hover-white w-100' href="tel:+0201001971254">01001971254</a>
          
          </div>
        
        </div>
    </div>



  
  </>
}
