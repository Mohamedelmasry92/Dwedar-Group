import React, { useEffect } from 'react'
import styles from './Services.module.css'
import ServicesHome from '../ServicesHome/ServicesHome'
import Stages from '../Stages/Stages'
import AccuracyInHomePage from '../AccuracyInHomePage/AccuracyInHomePage'
import 'animate.css';



export default function Services() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    


    
    <div className='bg-custom-father'>
      <div className="container-fluid text-white bg-custom-dark   p-5">
        <div className="row justify-content-center align-items-center  p-0 m-auto">


        <div className="col-md-6 animate__animated animate__zoomInRight">
            <div>
              <p className='fw-bolder text-white me-5 fs-1 p-3'>خدماتنا : <span className='fs-3'> ما نقدمه </span></p>
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




  <ServicesHome />
  

  <div className="mt-5 title py-3 text-center draw-displaying-on">
              <p className='fw-bold  text-main mt-5 mb-1 draw-displaying-on'>مراحل الخدمات المهنية</p>
              <div className="line translate-middle "></div>
              {/* <p className='fw-bolder fs-5 w-50 text-center m-auto mt-4 mb-2 draw-displaying-on'>بشكل عام، تشكل هذه الخطوات الأربع - التشاور الأولي، والاقتراح والاتفاق، والتنفيذ وإعداد التقارير، والدعم والتحسين المستمر - أساس منهجنا لتقديم خدمات مهنية استثنائية لعملائنا.</p> */}
                
              <div className="col-md-12 text-center shadow-lg mt-4">
                  <div className=' bg-custom-father-lines'>
                    <div className='bg-custom-blue'>
                      <p className='fs-4 fw-bolder text-white p-2'>بشكل عام، تشكل هذه الخطوات الأربع - التشاور الأولي، والاقتراح والاتفاق، والتنفيذ وإعداد التقارير، والدعم والتحسين المستمر - أساس منهجنا لتقديم خدمات مهنية استثنائية لعملائنا.</p>     
                    </div>
                  </div>
                </div>

  </div>
  <Stages />



  <div className="mt-5 title mb-0 py-3 text-center ">
              <p className='fw-bold  text-main mt-5 mb-1 '>مجموعة دويدار</p>
              <div className="line translate-middle "></div>
                
              <div className="col-md-12 text-center shadow-lg mt-4">
                  <div className=' bg-custom-father-white'>
                    <div className='bg-custom-blue'>
                      <p className='fs-4 fw-bolder text-white p-2 mb-0'>يلتزم فريقنا بالحفاظ على أعلى معايير الجودة والدقة في جميع أعمالنا، مما يضمن أن عملائنا يمكنهم اتخاذ قرارات مستنيرة بناءً على بيانات جديرة بالثقة</p>     
                    </div>
                  </div>
                </div>
  </div>
  <AccuracyInHomePage />
  
  </>
}
