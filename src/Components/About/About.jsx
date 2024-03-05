import React, { useEffect } from 'react'
import styles from './About.module.css'
import AccuracyInHomePage from '../AccuracyInHomePage/AccuracyInHomePage'
import ValuesInHomePage from '../ValuesInHomePage/ValuesInHomePage'

import finance from '../../assets/finance.jpg'
import finance2 from '../../assets/finance2.jpg'
import { Link } from 'react-router-dom'
import 'animate.css';



export default function About() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    

    <div className='bg-custom-father'>
      <div className="container-fluid text-white bg-custom-dark   p-5">
        <div className="row justify-content-center align-items-center  p-0 m-auto">


        <div className="col-lg-6 col-md-12 animate__animated animate__zoomInRight">
            <div>
              <p className='fw-bolder text-white me-5 fs-1 p-3'>من نحن : <span className='fs-3'>نبذة عن مجموعة دويدار</span></p>
            </div>        
        </div>

        <div className="col-lg-6 col-md-12 animate__animated animate__zoomInLeft">
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



    <div className="mt-3 title mb-0 py-3 text-center ">
          <p className='fw-bold  text-main mt-5 mb-1 '>نبذة عن المجموعة</p>
          <div className="line translate-middle "></div>
    </div>



    <div className='container-fluid px-lg-5 px-sm-0 mt-3'>
      <div className='row '>

        <div className='col-md-6 bg-custom-father-white p-0 '>
          <div className='bg-custom-blue-lines py-5 px-4'>
            <p className='text-dark fw-bolder py-1 bg-light fs-4'> نحن مؤسسة استشارات وخدمات مهنية مقرها في مصر </p>     
            
            <p className='text-white lead py-4'> يلتزم فريقنا بتقديم حلول مبتكرة تتوافق مع احتياجات عملائنا، مع تطبيق مستوى عالي من المعايير المهنية والمهارات الفنية. </p>

            <p className='text-white fw-bolder mb-0 pb-0  fs-4'> نحن نفخر بتقديم الحلول في الوقت المناسب لاحتياجات عملائنا. </p>     
            
          </div>
        </div>
        
        <div className='col-md-6 p-0'>
            <img src={finance2} className='w-100 ' alt="image_about"/>
        </div>
      
      </div>
    </div>



    <div className='container-fluid px-lg-5 px-sm-0 mt-5'>
      <div className='row '>

        <div className='col-md-6 p-0'>
            <img src={finance} className='w-100 ' alt=""/>  
        </div>

        <div className='col-md-6 bg-custom-father-lines p-0 '>
          <div className='bg-custom-blue-lines p-3'>
            <p className='text-dark fw-bolder py-1 mt-4 bg-light fs-4'> نحن ملتزمون بأن نكون مؤسسة مهنية متخصصة مفضلة في الاستشارات والتدريب والمراجعة والمحاسبة والضرائب، والعديد من الخدمات المهنية التي تحتاج إليها منشآت الأعمال.</p>     
            
            <p className='text-white lead mt-4'> باعتبارنا مستشارين موثوقين لعملائنا، فإننا نقدم مجموعة شاملة من الخدمات في العديد من الصناعات( المجالات )، وفي جميع مراحل تطور المنشآت. هدفنا هو تقديم حلول أسرع وأبسط وأعلى جودة.</p>

            
          </div>
        </div>
        
        
      
      </div>
    </div>



    <div className="mt-5 title mb-0 py-3 text-center ">
              <p className='fw-bold  text-main mt-3 mb-1 '>مجموعة دويدار</p>
              <div className="line translate-middle "></div>
                
              <div className="col-md-12 text-center shadow-lg mt-4">
                  <div className=' bg-custom-father-white'>
                    <div className='bg-custom-blue'>
                      <p className='fs-4 fw-bolder text-white p-2 mb-0'>يلتزم فريقنا بالحفاظ على أعلى معايير الجودة والدقة في جميع أعمالنا، مما يضمن أن عملائنا يمكنهم اتخاذ قرارات مستنيرة بناءً على تقارير جديرة بالثقة</p>     
                    </div>
                  </div>
                </div>
    </div>
    <AccuracyInHomePage />



    <ValuesInHomePage />
    
    <div className="mt-5 title mb-0 py-3 text-center ">
              <p className='fw-bold  text-main mt-5 mb-1 '>مجموعة دويدار</p>
              <div className="line translate-middle "></div>
                
              <div className="col-md-12 text-center shadow-lg mt-4">
                  <div className=' bg-custom-father-white'>
                    <div className='bg-custom-blue'>
                      <p className='fs-4 fw-bolder text-white p-2  mb-0'> تواصل معنا ليصلك كل ما هو جديد لدينا : 
                      <Link to='../contact' className='btn bg-light me-3 px-5 text-black fw-bold   fs-5 '> تواصل معنا </Link>
                      </p>     

                    </div>
                  </div>
                </div>
    </div>


      

  </>
}
