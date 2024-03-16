import React, { useEffect } from 'react'
import styles from './Service4Taxing.module.css'
import { Link } from 'react-router-dom'
import service1 from '../../assets/000827410.jpg'
import service2 from '../../assets/237523486.jpg'
import service3 from '../../assets/AdobeStock_10224613.jpeg'
import service4 from '../../assets/service-4.jpeg'
import service5 from '../../assets/agenda-analysis-business-990818-1.jpg'
import service6 from '../../assets/bigstock-Image-of-eyeglasses-and-financ-60459065.jpg'
import service7 from '../../assets/bookkeeping-1.jpg'
import service8 from '../../assets/iStock-521993278.jpg'
import service9 from '../../assets/seminar-registration-2022-12-16-01-23-25-utc.jpg'

import 'animate.css';


export default function Service4Taxing() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    
    <div className='bg-custom-father'>
      <div className="container-fluid text-white bg-custom-dark   p-5">
        <div className="row justify-content-center align-items-center  p-0 m-auto">


        <div className="col-md-6 animate__animated animate__zoomInRight">
            <div>
              <p className='fw-bolder text-white me-5 fs-1 p-3'> خدمات الضرائب </p>
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
      <div className='row g-0'>

        <div className='col-md-4 '>
            <h3 className='text-center bg-main p-1 text-white fw-bolder mb-0'>الخدمات الأخرى <i className="fa-solid fa-circle-down"></i> </h3>
            <div className='bg-third p-3 text-white '>
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

        <div className='col-md-8 bg-white shadow-lg '>
            <h3 className='fw-bold p-1 bg-main text-white text-center'>الخدمات الضريبية:</h3>
            <p className='px-3 fs-5 mt-3 fw-medium'>نحن نقدم خدمات ضريبية متخصصة، بما في ذلك ضريبة القيمة المضافة وضرائب الدخل، لضمان الامتثال للقوانين واللوائح الضريبية المحلية. سيساعدك فريقنا ذو الخبرة في إدارة التزاماتك الضريبية بكفاءة عالية، وتعظيم المزايا وتقليل المخاطر الضريبية التي يمكن أن تتعرض لها.</p>
             
             <ul className='ul-edited mt-5' >
              <p className='fw-bold fs-5 px-1'>وتشمل مجالات خدمات الضرائب ما يلي:</p>
              <div className="row fw-medium fs-5 justify-content-center align-items-center m-auto">

              <div className='col-md-6'>

                <li>التخطيط الضريبي للشركات</li>
                <li>التسجيل الضريبي للشركات</li>
                <li>إلغاء تسجيل ضريبة الشركات</li>

              </div>
              <div className='col-md-6'>
                <li>مراجعة ضريبة الشركات</li>
                <li>استرداد ضريبة الشركات</li>
                <li>تسوية المنازعات الضريبية</li>
              </div>
              <div className='col-md-6 m-auto mt-3'>
                <li>الامتثال لتسعير التحويل</li>
                <li>استشارات الامتثال الضريبي</li>
              </div>
              </div>
             </ul>   

        </div>
     
      </div>
    </div>
  

    <div className='container-fluid bg-custom-father-body px-3 my-5' >
      <div className='row'>

        <div className='col-md-4'>
            
            <div className='bg-second text-white text-center py-4 button-hover-white shadow-lg border border-5'>
              <i className="fa-solid fa-layer-group fs-1 mb-4  p-3"></i>
              <h4 className='fw-bold mb-3'>التخطيط الضريبي للشركات</h4>
              <p className='lead fw-medium  '> نحن نقدم خدمات التخطيط الضريبي الاستراتيجي للمساعدة في تقليل المسؤولية الضريبية لشركتك وتحسين وضعك الضريبي. يقوم خبراؤنا بتحليل هيكل عملك وتعاملاتك وعملياتك لتحديد فرص توفير الضرائب.</p>
            </div>
        
        </div>
        
        <div className='col-md-4'>

            <div className='bg-light text-dark text-center py-4 px-5 button-hover-second shadow-lg border border-5'>
              <i className="fa-solid fa-building fs-1 mb-4  p-3"></i>
              <h4 className='fw-bold mt-4 mb-5'>التسجيل الضريبي للشركات</h4>
              <p className='lead fw-medium  '> نحن نساعدك في عملية التسجيل لضريبة الشركات، مع ضمان الالتزام لجميع المتطلبات القانونية. </p>
            </div>
        
        </div>

        <div className='col-md-4'>

            <div className='bg-second text-white text-center py-4 px-5 button-hover-white shadow-lg border border-5'>
              <i className="fa-regular fa-rectangle-xmark fs-1 mb-4  p-3"></i>
              <h4 className='fw-bold mb-5'>إلغاء التسجيل الضريبي للشركات</h4>
              <p className='lead fw-medium  '> إذا لزم الأمر، فإننا نتولى عملية إلغاء التسجيل في ضريبة الشركات، مما يضمن انتقالًا سلساً لشركتك.</p>
            </div>
        
        </div>

        <div className='col-md-4 mt-5'>
            
            <div className='bg-light text-dark text-center py-4 px-4 button-hover-second shadow-lg border border-5'>
              <i className="fa-solid fa-coins fs-1 mb-4  p-3"></i>
              <h4 className='fw-bold mb-3'> مراجعة الضرائب على الشركات </h4>
              <p className='lead fw-medium  '> يقوم مستشارو الضرائب لدينا بمراجعة سجلاتك المالية وإعداد إقرارات ضريبية دقيقة، مما يضمن الامتثال للقوانين واللوائح الضريبية.</p>
            </div>
        
        </div>

        <div className='col-md-4 mt-5'>

            <div className='bg-second text-white text-center py-4 px-3 button-hover-white shadow-lg border border-5'>
              <i className="fa-solid fa-money-bill-trend-up fs-1 mb-5  p-3"></i>
              <h4 className='fw-bold mb-4'> استرداد ضريبة الشركات</h4>
              <p className='lead fw-medium  '> نحن نساعدك على تحديد المبالغ القابلة للاسترداد ضريبياّ ونساعدك في عملية تقديم الطلب لضمان استرداد  تلك المبالغ. </p>
            </div>
        
        </div>

        <div className='col-md-4 mt-5'>

            <div className='bg-light text-dark text-center py-4 px-4 button-hover-second shadow-lg border border-5'>
              <i className="fa-solid fa-scale-balanced fs-1 mb-4  p-3"></i>
              <h4 className='fw-bold mb-3'> حل المنازعات الضريبية</h4>
              <p className='lead fw-medium  '> في حالة وجود نزاعات ضريبية أو خلافات مع السلطات الضريبية، يقدم خبراؤنا خدمات احترافية ويساعدون في حل المشكلات بكفاءة.</p>
            </div>
        
        </div>

        
     
      </div>
    </div>
  
    
    <div className='bg-custom-father-body mt-5'>
      <div className=''>
    <div className="container-fluid  px-3 my-5  ">



    <div className=" title py-3 text-center ">
              <p className='fw-bolder fs-5 bg-white text-main mt-5 mb-1 '>خدمات ضريبة القيمة المضافة</p>
              <div className="line translate-middle "></div>
              {/* <p className='fw-bolder fs-5 w-50 text-center m-auto mt-4 mb-2 '>بشكل عام، تشكل هذه الخطوات الأربع - التشاور الأولي، والاقتراح والاتفاق، والتنفيذ وإعداد التقارير، والدعم والتحسين المستمر - أساس منهجنا لتقديم خدمات مهنية استثنائية لعملائنا.</p> */}
                
              <div className="col-md-12 text-center shadow-lg mt-4">
                  <div className=' bg-custom-father-white'>
                    <div className='bg-custom-blue'>
                      <p className='fs-4 fw-bold text-white p-2 mb-0'>نحن نقدم خدمات شاملة لضريبة القيمة المضافة لضمان امتثال أعمالك لقوانين ولوائح ضريبة القيمة المضافة. يساعدك مستشارو ضريبة القيمة المضافة ذوي الخبرة لدينا في التغلب على تعقيدات ضريبة القيمة المضافة.</p>     
                      <p className='fs-4 fw-bold text-white  mt-0'>وتشمل خدمات ضريبة القيمة المضافة : </p>     
                    </div>
                  </div>
                </div>

     </div>

      <div className="row ">

        <div className="col-md-12 p-2 ">

            <div className="row">
              <div className="col-md-4 col-sm-12 mt-3 h-100">
                <div id="list-example" className="list-group">
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-1"> 1)  التسجيل في ضريبة القيمة المضافة</a>
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-2"> 2) تقديم إقرار ضريبة القيمة المضافة</a>
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-3"> 3) الإفصاح الطوعي عن ضريبة القيمة المضافة</a>
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-4"> 4) إلغاء التسجيل في ضريبة القيمة المضافة</a>
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-5"> 5) مراجعة الامتثال لضريبة القيمة المضافة </a>
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-6"> 6) التدريب على ضريبة القيمة المضافة </a>
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-7"> 7) إعادة النظر في ضريبة القيمة المضافة وحل النزاعات </a>
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-8"> 8)  دعم فحص ضريبة القيمة المضافة </a>
                  <a className="list-group-item list-group-item-action fw-bold  py-4 px-2" href="#list-item-9"> 9) استشارات ضريبة القيمة المضافة </a>
                </div>

                

              </div>
              <div className="col-md-8 col-sm-12 text-center mt-0">
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example p-3" tabIndex="0">
                  
                  
                  <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg ">
                    <div className="col-md-4">
                      <img src={service1} className='mt-0 w-100 h-100' alt="" />
                    </div>
                    <div className="col-md-8">
                        <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder ' id="list-item-1"> 1) التسجيل في ضريبة القيمة المضافة</h4>
                        <p className='fw-bold bg-white p-3 '> نحن نرشدك خلال عملية التسجيل في ضريبة القيمة المضافة، ونضمن استيفاء جميع المتطلبات اللازمة </p>

                    </div>
                  </div>
                   <hr />
                    
                    <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg">
                      <div className="col-md-4">
                        <img src={service2} className='w-100 h-100 mt-0' alt="" />
                      </div>
                      <div className="col-md-8">
                    
                      <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder' id="list-item-2"> 2) تقديم إقرار ضريبة القيمة المضافة</h4>
                      <p className='fw-bold bg-white p-2'>يقوم خبراؤنا بإعداد وتقديم إقرارات ضريبة القيمة المضافة الدقيقة نيابةً عنك، مما يضمن الامتثال لالتزامات إعداد التقارير. نحن نتعامل مع جميع جوانب إعداد إقرارات ضريبة القيمة المضافة، بما في ذلك جمع البيانات ومطابقتها وتقديمها.</p>
                    </div>

                      </div>
                    <hr />
                 
                 <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg">
                  <div className="col-md-4">
                    <img src={service3} className='w-100 h-100 mt-0' alt="" />
                  </div>
                  <div className="col-md-8">
                  
                    <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder' id="list-item-3"> 3) الإفصاح الطوعي عن ضريبة القيمة المضافة</h4>
                    <p className='fw-bold bg-white p-2'>إذا كان هناك أي أخطاء أو سهو في إقرارات ضريبة القيمة المضافة السابقة، فإننا نساعدك في تقديم الإفصاحات الطوعية لتصحيح الوضع وتقليل العقوبات.</p>
                  </div>

                  </div>
                  <hr />
                  
                  <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg">
                    <div className="col-md-4">
                      <img src={service4} className='w-100 h-100 mt-0' alt="" />
                    </div>
                    <div className="col-md-8">
                    <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder' id="list-item-4"> 4) إلغاء التسجيل في ضريبة القيمة المضافة</h4>
                    <p className='fw-bold bg-white p-2'>إذا لم تعد شركتك تستوفي متطلبات التسجيل في ضريبة القيمة المضافة، فإننا نتعامل مع عملية إلغاء التسجيل بكفاءة.</p>
                  </div>
                  </div>
                  <hr />
                  

                  <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg">
                    <div className="col-md-4">
                      <img src={service5} className='w-100 h-100 mt-0' alt="" />
                    </div>
                    <div className="col-md-8">
                                      <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder' id="list-item-5"> 5) مراجعة الامتثال لضريبة القيمة المضافة</h4>
                                      <p className='fw-bold bg-white p-2'>يجري فريقنا مراجعات شاملة لعملياتك ومعاملاتك التجارية لتقييم مدى امتثالك لضريبة القيمة المضافة. نحن نحدد المخاطر المحتملة، ونقدم توصيات للتحسين، ونساعدك على تنفيذ إجراءات قوية لمراقبة ضريبة القيمة المضافة.</p>
                                    </div>
                  </div>
                  <hr />
                  

                  <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg">
                    <div className="col-md-4">
                      <img src={service6} className='w-100 h-100 mt-0' alt="" />
                    </div>
                    <div className="col-md-8">
                                      <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder' id="list-item-6"> 6) التدريب على ضريبة القيمة المضافة </h4>
                                      <p className='fw-bold bg-white p-2'> نحن نقدم برامج تدريبية مخصصة لتعزيز فهمك للوائح ضريبة القيمة المضافة، مما يضمن أنك وفريقك مطلعون جيدًا وقادرون على إدارة الأنشطة المتعلقة بضريبة القيمة المضافة بشكل فعال. </p>
                                    </div>
                    </div>
                  <hr />
                  
                  
                  <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg">
                    <div className="col-md-4">
                      <img src={service7} className='w-100 h-100 mt-0' alt="" />
                    </div>
                    <div className="col-md-8">
                    <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder' id="list-item-7"> 7) إعادة النظر في ضريبة القيمة المضافة وحل النزاعات </h4>
                    <p className='fw-bold bg-white p-2'> في حالة حدوث نزاعات أو إعادة نظر متعلقة بضريبة القيمة المضافة، فإننا نقدم المساعدة المهنية لعرض قضيتك، والاتصال بالسلطات الضريبية، والعمل على التوصل إلى حل عادل. </p>
                  </div>
                  </div>
                  <hr />
                  
                  
                  <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg">
                    <div className="col-md-4">
                      <img src={service8} className='w-100 h-100 mt-0' alt="" />
                    </div>
                    <div className="col-md-8">
                    <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder' id="list-item-8"> 8) دعم فحص ضريبة القيمة المضافة </h4>
                    <p className='fw-bold bg-white p-2'> يقدم خبراؤنا الدعم والتمثيل أثناء عمليات فحص ضريبة القيمة المضافة، مما يساعدك على الاستعداد للفحص، والرد على الاستفسارات من السلطات الضريبية، وضمان الامتثال لمتطلبات الفحص. </p>
                  </div>
                  </div>
                  <hr />
                  
                  
                  <div className="row g-0 justify-content-center align-items-between bg-white shadow-lg">
                    <div className="col-md-4">
                      <img src={service9} className='w-100 h-100 mt-0' alt="" />
                    </div>
                    <div className="col-md-8">
                    <h4 className='bg-main mb-0 mt-0 text-white  p-2 fw-bolder' id="list-item-9"> 9) استشارات ضريبة القيمة المضافة </h4>
                    <p className='fw-bold bg-white p-2'>نحن نقدم خدمات استشارية متخصصة في ضريبة القيمة المضافة، ونقدم رؤى ونصائح مصممة خصيصًا لتلبية احتياجات عملك المحددة. يمكن لمستشارينا مساعدتك في مسائل ضريبة القيمة المضافة المعقدة، مثل المعاملات عبر الحدود، والامتثال لضريبة القيمة المضافة الدولية، وقضايا ضريبة القيمة المضافة الخاصة بالصناعة.  </p>
                  </div>
                  </div>
                  <hr />
                  
              
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
