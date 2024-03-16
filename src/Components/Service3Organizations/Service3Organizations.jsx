import React, { useEffect } from 'react'
import styles from './Service3Organizations.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo2.png'
import 'animate.css';



export default function Service3Organizations() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    


    <div className='bg-custom-father'>
  <div className="container-fluid text-white bg-custom-dark   p-5">
    <div className="row justify-content-center align-items-center  p-0 m-auto">


    <div className="col-md-6 animate__animated animate__zoomInRight">
        <div>
          <p className='fw-bolder text-white  fs-1 '> الخدمات المؤسسية </p>
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


    <div className='container-fluid bg-custom-father-body px-lg-5 px-md-auto px-sm-auto my-5' >
  <div className='row g-0 '>

    <div className='col-md-4 '>
             <h3 className='text-center bg-main p-1 text-white fw-bolder mb-0' >  الخدمات الأخرى <i className="fa-solid fa-circle-down"></i> </h3>
        <div className='bg-third p-3 text-white mt-0'>
            <Link className='btn bg-light fw-bold w-100 button-hover ' to='../service-1'> خدمات الاستشارات</Link>
           <hr/>
            <Link className='btn bg-light fw-bold w-100 button-hover' to='../service-2'>خدمات المراجعة والفحص المحدود</Link>
           <hr/>
            <Link className='btn bg-light fw-bold w-100 button-hover' to='../service-3'>الخدمات المؤسسية</Link>
           <hr/>
            <Link className='btn bg-light fw-bold w-100 button-hover' to='../service-4'>خدمات الضرائب </Link>
           <hr/>
            <Link className='btn bg-light fw-bold w-100 button-hover' to='../service-5'>النزاعات التجارية</Link>
           <hr/>
            <Link className='btn bg-light fw-bold w-100 button-hover' to='../service-6'>تنمية الموارد البشرية</Link>

        </div>
    </div>

    <div className='col-md-8 bg-white  shadow-lg text-center'>
        <h3 className='fw-bolder p-1 text-center text-white bg-main '> الخدمات المؤسسية : </h3>
        <p className='px-lg-5 px-md-auto px-sm-auto py-2 text-main fs-5 mt-3 fw-bold p-5'> نساعد عملائنا بتقديم حلول الأعمال التجارية المتخصصة والاستشارات المالية،  </p>
        <p className='px-lg-5 px-md-auto px-sm-auto py-2 text-main fs-5 mt-3 fw-bold p-5'> ولدينا الكوادر المؤهلة للقيام بذلك.</p>
        
        <div className="col-md-4 m-auto">
          <img src={logo} className='w-100' alt="" />
        </div>


    </div>
 
  </div>
    </div>


    <div className='container-fluid px-lg-5 px-md-auto px-sm-auto  mb-5 mt-5 bg-custom-father-body '>

<div className=" title py-3 text-center ">
          <p className='fw-bolder fs-5 bg-white text-main mt-5 mb-1 '>  وتشمل خدماتنا الرئيسية ما يلي: </p>
          <div className="line translate-middle "></div>
 </div>
        
    <div className='row justify-content-center align-items-center text-center g-3 mt-3'>

        
        <div className="col-md-4  mt-4 ">
          <div className='overflow-hidden rounded trasition-smoothy'>
            <div className='p-5 rounded bg-main hover-on-main '>
              <i className="fa-brands fa-connectdevelop text-white fs-1 mb-3 "></i>        
              <h3 className='fw-bolder text-white'>   إعادة هيكلة السيولة والشركات المتعثرة.</h3>
            </div>
          </div>
        </div>
        
        <div className="col-md-4  mt-4">
          <div className='overflow-hidden rounded trasition-smoothy'>
            <div className='p-5 rounded bg-third hover-on-main '>
              <i className="fa-solid fa-building-circle-check text-white fs-1 mb-3"></i>    
              <h3 className='fw-bolder text-white'>  اتحاد مقاولي التشييد والبناء.</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4  mt-4">
          <div className='overflow-hidden rounded trasition-smoothy'>
            <div className='p-5 rounded bg-main hover-on-main '>
              <i className="fa-solid fa-money-bill-trend-up text-white fs-1 mb-3"></i>
              <h3 className='fw-bolder text-white'> إعادة جدولة، واسترداد، وتحويل وتحصيل الديون.</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4  mt-4">
          <div className='overflow-hidden rounded trasition-smoothy'>
            <div className='p-5 rounded bg-third hover-on-main '>
              <i className="fa-solid fa-arrow-up-right-dots text-white fs-1 mb-3"></i>
              <h3 className='fw-bolder text-white'> تأسيس الشركات.</h3>
            </div>
          </div>
        </div>
        
        <div className="col-md-4  mt-4">
          <div className='overflow-hidden rounded trasition-smoothy'>
            <div className='p-5 rounded bg-main hover-on-main '>
              <i className="fa-solid fa-id-card text-white fs-1 mb-3"></i>
              <h3 className='fw-bolder text-white'> التراخيص.</h3>
            </div>
          </div>
        </div>
        
        <div className="col-md-4  mt-4">
          <div className='overflow-hidden rounded trasition-smoothy'>
            <div className='p-5 rounded bg-third hover-on-main '>
              <i className="fa-solid fa-person-circle-xmark text-white fs-1 mb-3"></i>
              <h3 className='fw-bolder text-white'> تصفية الشركات.</h3>
            </div>
          </div>
        </div>
        
        <div className="col-md-12  mt-4">
          <div className='overflow-hidden rounded trasition-smoothy'>
            <div className='p-5 rounded bg-third hover-on-main '>
              <i className="fa-solid fa-compass text-white fs-1 mb-3"></i>
              <h3 className='fw-bolder text-white '>  تقدم المشورة بشأن هيكلة الأعمال وتحسين الأداء. </h3>              
            </div>
          </div>
        </div>
      
    </div>
    </div>


  
  </>
}
