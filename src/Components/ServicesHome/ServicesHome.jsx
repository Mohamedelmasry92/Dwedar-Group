import React from 'react'
import styles from './ServicesHome.module.css'
import service1 from '../../assets/service-1.jpg'
import service2 from '../../assets/service-2.jpg'
import service3 from '../../assets/service-3.jpg'
import service5 from '../../assets/service-5.jpg'
import service6 from '../../assets/tax2.jpg'
import training from '../../assets/training3.png'
import { Link } from 'react-router-dom'



export default function ServicesHome() {
  return <>
    



    <div className="mt-5 title pb-3 text-center">
              <p className='fw-bold  text-main'>ما نقدمه</p>
              <h2 className='fw-bolder mt-0'>خدماتنا</h2>
              <div className="line translate-middle"></div>
              {/* <p className='mt-4 fw-bold'>نحن ندعوك لتجربة خبرة والتزام مجموعة دويدار للخدمات المهنية</p> */}
    </div>



    <div className="container-fluid px-lg-5 px-md-auto px-sm-auto mb-5">
  <div className="row ">



    <div className="col-md-12 ">


    <ul className="nav nav-pills fw-bolder justify-content-center p-0 mb-3" id="pills-tab" role="tablist">
        <li className="nav-item ms-1 li-w-100-small " role="presentation">
          <button className="nav-link active" id="pills-service1-tab" data-bs-toggle="pill" data-bs-target="#pills-service1" type="button" role="tab" aria-controls="pills-service1" aria-selected="true">الاستشارات</button>
        </li>
        <li className="nav-item ms-1 li-w-100-small" role="presentation">
          <button className="nav-link " id="pills-service2-tab" data-bs-toggle="pill" data-bs-target="#pills-service2" type="button" role="tab" aria-controls="pills-service2" aria-selected="false"> المراجعة والفحص المحدود</button>
        </li>
        <li className="nav-item ms-1 li-w-100-small" role="presentation">
          <button className="nav-link" id="pills-service3-tab" data-bs-toggle="pill" data-bs-target="#pills-service3" type="button" role="tab" aria-controls="pills-service3" aria-selected="false">الخدمات المؤسسية</button>
        </li>
        <li className="nav-item ms-1 li-w-100-small" role="presentation">
          <button className="nav-link" id="pills-service4-tab" data-bs-toggle="pill" data-bs-target="#pills-service4" type="button" role="tab" aria-controls="pills-service4" aria-selected="false">الخدمات الضريبية</button>
        </li>
        <li className="nav-item ms-1 li-w-100-small" role="presentation">
          <button className="nav-link" id="pills-service5-tab" data-bs-toggle="pill" data-bs-target="#pills-service5" type="button" role="tab" aria-controls="pills-service5" aria-selected="false">النزاعات التجارية</button>
        </li>
        <li className="nav-item ms-1 li-w-100-small" role="presentation">
          <button className="nav-link" id="pills-service6-tab" data-bs-toggle="pill" data-bs-target="#pills-service6" type="button" role="tab" aria-controls="pills-service6" aria-selected="false">تنمية الموارد البشرية</button>
        </li>
        
  </ul>


  <div className="col-md-12 text-center">
                  <div className=' bg-custom-father-white'>
                    <div className='bg-custom-blue'>
                      <p className='fs-3 fw-bold text-white p-4'>نحن ندعوك لتجربة خبرة والتزام مجموعة دويدار للخدمات المهنية</p>     
                    </div>
                  </div>
    </div>





  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-service1" role="tabpanel" aria-labelledby="pills-service1-tab" tabIndex="0">
      
    <div className="col-md-12 hover-sec mt-4">

<div className='bg-custom-father-white'>
  <div className='bg-custom-blue'>

  <div className="row m-auto align-items-center w-100  ">
      <div className="col-md-4 position-relative">
        <div className=' hover-sec overflow-hidden'>
          <img src={service1} className="w-100" alt=""/>
        </div>
      <div className="px-3 py-2 bg-white w-75 translate-middle position-absolute  text-center text-black mb-5 fs-6 fw-bolder outside-image">الاستشارات
          </div>
      </div>
      <div className="col-md-8  text-center">
          
          <p className="fs-6 fw-bolder text-white pt-2">تسعى مجموعة دويدار للخدمات المهنية الى تقديم الاستشارات المتعمقة التي تضيف قيمة لعملائنا، فهي تساعد مجموعة متنوعة من العملاء في العديد من المجالات وذوي الاحتياجات المختلفة، وتوفر ممارساتنا الاستشارية مجموعة واسعة من استشارات الحوكمة وإدارة المخاطر والمراجعة الداخلية، استشارات الصفقات، الاستشارات المالية والادارية.</p>
          <p className="mt-2 lead text-white  ">يأتي المتخصصون لدينا من خلفيات وتخصصات مختلفة، مما يسمح لنا بتقديم حلول عملية ومبتكرة لعملائنا، كل في منطقته(مجاله). </p>
          
          <Link to='../service-1' className='text-dark fw-bolder w-100 mb-1 btn btn-light  text-decoration-underline'>للمزيد عن الاستشارات</Link>
      </div>
             </div>
      
  
  </div>
  </div>
    </div>   


    </div>

    <div className="tab-pane fade" id="pills-service2" role="tabpanel" aria-labelledby="pills-service2-tab" tabIndex="0">
      <div className="col-md-12 mt-4 hover-sec">

<div className='bg-custom-father-white'>
  <div className='bg-custom-blue'>

  <div className="row m-auto align-items-center w-100  ">
      <div className="col-md-4 position-relative">
        <div className=' hover-sec overflow-hidden'>
          <img src={service3} className="w-100" alt=""/>
        </div>
      <div className="px-3 py-2 bg-white w-75 translate-middle position-absolute  text-center text-black mb-5 fs-6 fw-bolder outside-image">خدمات المراجعة والفحص المحدود
          </div>
      </div>
      <div className="col-md-8  text-center">
          
          <p className="fs-6 fw-bolder text-white pt-2">نحن نقدم خدمات المراجعة والفحص المحدود للتأكد من دقة ونزاهة القوائم المالية، مما يساعد عملائنا على اكتساب المزيد من الثقة في تقاريرهم المالية.</p>
          <p className="mt-2 lead text-white"> مما يساعد عملائنا على اكتساب المزيد من الثقة في تقاريرهم المالية</p>
          
          <Link to='../service-2' className=' w-100  mb-1 btn btn-light text-dark fw-bolder text-decoration-underline'>للمزيد عن خدمات المراجعة والفحص المحدود</Link>
      </div>
             </div>
      
  
  </div>
  </div>
    </div> 
    </div>
    
    <div className="tab-pane fade" id="pills-service3" role="tabpanel" aria-labelledby="pills-service3-tab" tabIndex="0">
      <div className="col-md-12 mt-4 hover-sec">

<div className='bg-custom-father-white'>
  <div className='bg-custom-blue'>

  <div className="row m-auto align-items-center  w-100  ">
      <div className="col-md-4 position-relative">
        <div className=' hover-sec overflow-hidden'>
          <img src={service2} className="w-100" alt=""/>
        </div>
      <div className="px-3 py-2 bg-white w-75 translate-middle position-absolute  text-center text-black mb-5 fs-6 fw-bolder outside-image">الخدمات المؤسسية
          </div>
      </div>
      <div className="col-md-8  text-center">
          
          <p className="fs-6 fw-bolder text-white pt-2">نساعد عملائنا بتقديم حلول الأعمال التجارية المتخصصة والاستشارات المالية.</p>
          <p className="mt-2 lead text-white">ولدينا الكوادر المؤهلة للقيام بذلك</p>
          
          <Link to='../service-3' className='w-100  mb-1 btn btn-light  text-dark fw-bolder text-decoration-underline'>للمزيد عن الخدمات المؤسسية</Link>
      </div>
             </div>
      
  
  </div>
  </div>
    </div> 

    </div>
    

    <div className="tab-pane fade" id="pills-service4" role="tabpanel" aria-labelledby="pills-service4-tab" tabIndex="0">
      <div className="col-md-12 mt-4 hover-sec">

<div className='bg-custom-father-white'>
  <div className='bg-custom-blue'>

  <div className="row m-auto align-items-center w-100  ">
      <div className="col-md-4 position-relative">
        <div className=' hover-sec overflow-hidden'>
          <img src={service6} className="w-100" alt=""/>
        </div>
      <div className="px-3 py-2 bg-white w-75 translate-middle position-absolute  text-center text-black mb-5 fs-6 fw-bolder outside-image">الخدمات الضريبية
          </div>
      </div>
      <div className="col-md-8  text-center">
          
          <p className="fs-6 fw-bolder text-white pt-2">نحن نقدم خدمات ضريبية متخصصة، بما في ذلك ضريبة القيمة المضافة وضرائب الدخل، لضمان الامتثال للقوانين واللوائح الضريبية المحلية. </p>
          <p className="mt-2 lead text-white">سيساعدك فريقنا ذو الخبرة في إدارة التزاماتك الضريبية بكفاءة عالية، وتعظيم المزايا وتقليل المخاطر الضريبية التي يمكن أن تتعرض لها</p>
          
          <Link to='../service-4' className='w-100  mb-1 btn btn-light text-dark fw-bolder text-decoration-underline'>للمزيد عن الخدمات الضريبية</Link>
      </div>
             </div>
      
  
  </div>
  </div>
    </div> 
    
    </div>
    

    <div className="tab-pane fade" id="pills-service5" role="tabpanel" aria-labelledby="pills-service5-tab" tabIndex="0">
      <div className="col-md-12 mt-4 hover-sec">

<div className='bg-custom-father-white'>
  <div className='bg-custom-blue'>

  <div className="row m-auto align-items-center  w-100  ">
      <div className="col-md-4 position-relative">
        <div className=' hover-sec overflow-hidden'>
          <img src={service5} className="w-100" alt=""/>
        </div>
      <div className="px-3 py-2 bg-white w-75 translate-middle position-absolute  text-center text-black mb-5 fs-6 fw-bolder outside-image">النزاعات التجارية
          </div>
      </div>
      <div className="col-md-8  text-center">
          
          <p className="fs-6 fw-bolder text-white pt-2">ينتمي لمجموعة دويدار مجموعة من خبراء التحكيم التجاري، </p>
          <p className="mt-2 lead text-white">لذلك يمكن أن نقدم لعملائنا بجانب المراجعة، الاستشارات المساعدة على حل النزاعات التجارية .</p>
          
          <Link to='../service-5' className='w-100  mb-1 btn btn-light text-dark fw-bolder text-decoration-underline'>للمزيد عن النزاعات التجارية (التحكيم التجاري)</Link>
      </div>
             </div>
      
  
  </div>
  </div>
    </div> 
    
    </div>
    
    
    <div className="tab-pane fade" id="pills-service6" role="tabpanel" aria-labelledby="pills-service6-tab" tabIndex="0">
      <div className="col-md-12 mt-4 hover-sec">

<div className='bg-custom-father-white'>
  <div className='bg-custom-blue'>

  <div className="row m-auto align-items-center  w-100  ">
      <div className="col-md-4 position-relative">
        <div className=' hover-sec overflow-hidden'>
          <img src={training} className="w-100" alt=""/>
        </div>
      <div className="px-3 py-2 bg-white w-75 translate-middle position-absolute  text-center text-black mb-5 fs-6 fw-bolder outside-image">تنمية الموارد البشرية
          </div>
      </div>
      <div className="col-md-8  text-center">
          
          <p className="fs-6 fw-bolder text-white pt-2">يعد الاستثمار في التطوير المهني لموظفيك أمراً بالغ الأهمية لنجاح شركتك. نحن نقدم برامج تدريبية للشركات مصممة لتلبية الاحتياجات والمتطلبات المحددة لمؤسستك.</p>
          <p className="mt-2 lead text-white  ">نعمل على تقديم برامج تدريبية للشركات مصممة لتطوير معارف ومهارات العاملين ورفع مستوى الأداء، وتغطي مجالات مثل الإدارة المالية، والمعايير المحاسبية، والقوانين واللوائح الضريبية، والمحاسبة الإدارية، والمراجعة الداخلية، والحوكمة، وغيرها من الموضوعات.</p>
          
          <Link to='../service-6' className='w-100  mb-1 btn btn-light text-dark fw-bolder text-decoration-underline'>للمزيد عن تنمية الموارد البشرية</Link>
      </div>
             </div>
      
  
  </div>
  </div>
    </div> 
    
    </div>

  </div>    


  </div>








  </div>
    </div>

  


  </>
}
