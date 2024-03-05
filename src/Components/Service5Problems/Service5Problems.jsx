import React, { useEffect } from 'react'
import styles from './Service5Problems.module.css'
import { Link } from 'react-router-dom'
import 'animate.css';



export default function Service5Problems() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    
    <div className='bg-custom-father'>
  <div className="container-fluid text-white bg-custom-dark   p-5">
    <div className="row justify-content-center align-items-center  p-0 m-auto">


    <div className="col-md-6 animate__animated animate__zoomInRight">
        <div>
          <p className='fw-bolder text-white  fs-1 '> النزاعات التجارية (التحكيم التجاري) </p>
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


<div className='container-fluid bg-custom-father-body px-lg-5 px-sm-0 my-5' >
  <div className='row g-0'>

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

    <div className='col-md-8 bg-white  shadow-lg '>
        <h3 className='fw-bolder p-1 text-center text-white bg-main'> النزاعات التجارية (التحكيم التجاري) : </h3>
        <p className='px-lg-5 px-sm-0 py-2 text-main fs-5 mt-3 fw-bold'> ينتمي لمجموعة دويدار مجموعة من خبراء التحكيم التجاري،  </p>
        <p className='px-lg-5 px-sm-0 py-2 text-main fs-5 mt-3 fw-bold'> لذلك يمكن أن نقدم لعملائنا بجانب المراجعة ، الاستشارات المساعدة على حل النزاعات التجارية.</p>
        <p className='px-lg-5 px-sm-0 py-2 text-main fs-5 mt-3 fw-bold'>  من خلال علاقتنا الواسعة مع الشركاء، نستطيع أن نقدم لك مستشاراً قانونياً لتمثيلك بشكل صحيح.</p>
        <p className='px-lg-5 px-sm-0 py-2 text-main fs-5 mt-3 fw-bold'> لدينا المهنيين الذين يقومون بتحليل البيانات المحاسبية المقدمة من الأطراف المعنية ونقوم بالتحقق من تلك البيانات من أجل الكشف عن الخسائر أو أي علامات احتيال، ثم نقوم بتقديم كل ما حصلنا عليه من نتائج للجهات المعنية. </p>
           

    </div>
 
  </div>
</div>




    <div className='container-fluid px-lg-5 px-sm-0  mb-5 mt-5 bg-custom-father-body '>

    <div className=" title py-3 text-center ">
              <p className='fw-bolder fs-5 bg-white text-main mt-5 mb-1 '>  وتشمل خدماتنا الرئيسية ما يلي: </p>
              <div className="line translate-middle "></div>
     </div>
            
        <div className='row justify-content-center align-items-center text-center g-3 '>

               <div className="col-md-6  mt-5 ">
                 <div className='overflow-hidden rounded trasition-smoothy'>
                   <div className='p-5 rounded bg-third hover-on-main '>
                       <i className="fa-solid fa-chart-line text-white fs-1 mb-3"></i>
                       <h3 className='fw-bolder text-white '> التحقق والتحليل.</h3>
                   </div>
                 </div>
               </div>

               <div className="col-md-6  mt-5 ">
                 <div className='overflow-hidden rounded trasition-smoothy'>
                   <div className='p-5 rounded bg-main hover-on-main '>
                       <i className="fa-solid fa-calculator text-white fs-1 mb-3"></i>       
                       <h3 className='fw-bolder text-white'>   تقييم الأضرار.</h3>
                   </div>
                 </div>
               </div>
               
               <div className="col-md-6  mt-4 ">
                 <div className='overflow-hidden rounded trasition-smoothy'>
                   <div className='p-5 rounded bg-main hover-on-main '>
                       <i className="fa-solid fa-pen-to-square text-white fs-1 mb-3"></i>      
                       <h3 className='fw-bolder text-white'>  تقييم الالتزامات.</h3>
                   </div>
                 </div>
               </div>
               
               <div className="col-md-6  mt-4 ">
                 <div className='overflow-hidden rounded trasition-smoothy'>
                   <div className='p-5 rounded bg-third hover-on-main '>
                       <i className="fa-solid fa-handshake-slash text-white fs-1 mb-3"></i>
                       <h3 className='fw-bolder text-white'> النزاعات التعاقدية.</h3>
                   </div>
                 </div>
               </div>
          
        </div>
    </div>

  
  </>
}
