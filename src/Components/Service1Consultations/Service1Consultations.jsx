import React, { useEffect } from 'react'
import styles from './Service1Consultations.module.css'
import service5 from '../../assets/bigstock-Image-of-eyeglasses-and-financ-60459065.jpg'
import service6 from '../../assets/money.jpg'
import service7 from '../../assets/bookkeeping-1.jpg'

import { Link } from 'react-router-dom'
import 'animate.css';


export default function Service1Consultations() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    
    <div className='bg-custom-father'>
    <div className="container-fluid text-white bg-custom-dark   p-5">
      <div className="row justify-content-center align-items-center  p-0 m-auto">
  
  
      <div className="col-md-6 animate__animated animate__zoomInRight">
          <div>
            <p className='fw-bolder text-white  fs-1 '> خدمات الاستشارات </p>
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
        <h3 className='fw-bolder p-1 text-center text-white bg-main'> خدمات الاستشارات : </h3>
        <p className='px-lg-5 px-sm-0 py-2 text-main fs-5 mt-4 fw-bold'> تسعى مجموعة دويدار للخدمات المهنية الى تقديم الاستشارات التي تضيف قيمة لعملائنا،  </p>
        <p className='px-lg-5 px-sm-0 py-2 text-main fs-5 mt-3 fw-bold'> فهي تساعد مجموعة متنوعة من العملاء في العديد من المجالات وذوي الاحتياجات المختلفة،</p>
        <p className='px-lg-5 px-sm-0 py-2 text-main fs-5 mt-3 fw-bold'>  وتوفر ممارساتنا الاستشارية مجموعة واسعة من استشارات الحوكمة وإدارة المخاطر والمراجعة الداخلية، استشارات الصفقات، الاستشارات المالية والادارية</p>
        <p className='px-lg-5 px-sm-0 py-2 text-main fs-5 mt-3 fw-bold'> يقدم فريق الخبراء لدينا خدمات استشارات الأعمال لمساعدة الشركات في تحديد نقاط الضعف والتغلب عليها، والتحديات وتجاوزها، وتحديد نقاط القوة والفرص واستغلالها.</p>
           

    </div>
 
  </div>
    </div>
  

    <div className='container-fluid bg-custom-father-body px-lg-5 px-sm-0 my-5' >
              <div className=" title py-3 text-center ">
                  <p className='fw-bolder fs-5 bg-white text-main mt-5 mb-1 '>وتشمل مجالات خدمات الاستشارات ما يلي:</p>
                  <div className="line translate-middle "></div>
              </div>
      
      
      <div className='row g-0'>

              <div className="col-md-12 mt-5 bg-custom-father-body">
              <div className='bg-custom-dark shadow-lg rounded rounded-2'>
                <div className='position-relative '>

                <div className='px-3 position-absolute edit-improve '>
                  <h2 className='bg-second p-2 mb-1 me-0 text-center rounded rounded-4 text-white'> 1- استشارات إدارة المخاطر: </h2>
                </div>
                <div className='p-4 '>
                  <p className='bg-white text-main rounded rounded-2 p-2 fw-bolder fs-5 mt-3'> يكمن هدف استشارات إدارة المخاطر في مساعدة العملاء سواء في القطاع الحكومي أو الخاص على تحويل المخاطر إلى منافع تنافسية قوية والدخول في الأعمال التجارية الصعبة، لدينا القدرة والأفكار العملية لتحقيق ذلك. </p>                  
                </div>
                </div>
 
              <div className="col-md-12">
                <p className='bg-second text-white rounded rounded-1 fw-bolder p-1 w-50 w- m-auto fs-5 text-center'> وتشمل مجالات خدمات استشارات المخاطر ما يلي: </p>

                <div className="row mt-3 p-3">

                  <div className="col-md-6 mb-4">
                    <div className='bg-third shadow-lg rounded rounded-1'>
                      <h3 className='fw-bold text-white p-2 mb-0'>أ) خدمات مخاطر  نظم الرقابة الداخلية والالتزام:</h3>
                    </div>
                    <div className='bg-white rounded rounded-1 p-3 '>
                      <p className='text-dark fw-bolder space-height fs-5'>في مجموعة دويدار نساعد العملاء على تحسين مناخ وبيئة المراجعة والرقابة الداخلية وتعزيز فعالية وجودة نظم الرقابة الداخلية وإدارة المخاطر والحوكمة،</p>
                      <p className='text-dark fw-bolder space-height fs-5'> حيث أن خبرتنا وتفهمنا للمخاطر وكيفية تحسين العمليات واسع النطاق، يجعلنا قادرين دائما على تحسين مهام المراجعة الداخلية والحوكمة عن طريق تحسين كل من الأداء والكفاءة التشغيلية.</p>
                      
                      <div className=' py-2'>
                          <p className='text-main fw-bolder fs-5 text-end'> وتشمل خدمات مخاطر  نظم الرقابة الداخلية والالتزام ما يلي: </p>
                          
                          <ul className='p-0 fs-5 fw-bolder text-dark list-unstyled' >
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> مراجعة نظام الرقابة الداخلية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> تقييم إدارة المراجعة الداخلية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> مساعدة الإدارة في تحسين نظام الرقابة الداخلية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> تحليل العمليات وتأكيد المعلومات.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> الاستعانة بخبراء خارجيين للمراجعة الداخلية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> تأسيس مهام المراجعة الداخلية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> تقديم الاستشارات حول حوكمة الشركات.</li>
                          </ul>  

                      </div>
                    </div>
                  </div>


                  <div className="col-md-6 ">
                    <div className='bg-third shadow-lg rounded rounded-1 '>
                      <h3 className='fw-bold text-white p-2 mb-0'>ب) إدارة المخاطر المالية:</h3>
                    </div>
                    <div className='bg-white rounded rounded-1 pt-4 pb-5 px-3 '>
                      <p className='text-dark space-height fw-bolder my-2 fs-5'>نقدم لكم آراء مفيدة حول الأدوات المالية وإدارة المخاطر المتعلقة بها</p>                      
                      <div className=' rounded rounded-2 p-2 mt-5'>
                          <p className='text-main fw-bolder fs-5 text-end mb-3'> وتشمل خدمات إدارة المخاطر المالية ما يلي: </p>
                          
                          <ul className='p-0 fs-5 fw-bolder text-dark list-unstyled mt-5 ' >
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> إدارة المخاطر والالتزام بالمعايير المحاسبية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> تقييم الأدوات المالية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> تقييم المخاطر المالية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> مخاطر السوق.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> إدارة المخاطر التشغيلية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات مخاطر السيولة.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات مخاطر الائتمان.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات إدارة مخاطر النقدية.</li>
                            <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> إدارة رأس المال.</li>
                          </ul>  

                      </div>
                    </div>
                  </div>


                </div>
              </div>
              </div>
              </div>



              <div className="col-md-12 mt-5 mb-5">

                <div className='row g-0 mt-5'>

                     <div className='col-md-6 bg-custom-father-body p-0'>
                       <div className='bg-custom-dark px-4 py-4'>
                        <h3 className='bg-white p-1 mb-4 me-0 text-center rounded rounded-4 text-main fw-bolder'> 2- الإستشارات المحاسبية: </h3>
                        <p className='text-white fw-bolder mb-4 fs-5 mt-3'> نساعد عملائنا في كثير من الأمور المهمة المتعلقة بالمحاسبة، والتي تؤثر على سير أعمالهم. </p>                  
                        

                        <div className='bg-white rounded rounded-2 p-1'>
                               <p className='text-main fw-bolder fs-5 text-end'> وتشمل خدمات الإستشارات المحاسبية ما يلي: </p>

                               <ul className=' fs-5 p-0 fw-bolder text-dark list-unstyled' >
                                 <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات التحول للمعايير الدولية للتقارير المالية.</li>
                                 <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات السياسات المالية والمحاسبية والصلاحيات المالية.</li>
                                 <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات إدارة رأس المال العامل.</li>
                                 <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات إدارة الأصول الثابتة.</li>
                                 <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات الدعم المحاسبي.</li>
                               </ul>  

                        </div>
                  </div>

                  </div>
                
                    <div className='col-md-6 p-0'>
                         <img src={service7} className='w-100 ' alt=""/>  
                     </div>
                
                </div>

                  


              </div>


              <div className="col-md-12 bg-custom-father-body mt-5 ">
              <div className='bg-custom-dark shadow-lg  rounded rounded-2'>
                <div className='position-relative px-4 py-2'>

                <div className='px-3 position-absolute edit-improve '>
                  <h2 className='bg-second p-2 mb-3 me-0 text-center rounded rounded-4 text-white'> 3- استشارات الصفقات: </h2>
                </div>
                <div className=' mt-3'>
                    <p className='fw-bolder text-white pt-4  fs-5'> تزدهر الشركات والأعمال بناء على الشَرَاكَاتٌ الجيدة وتتسم شَرَاكَاتٌ الأعمال بأنها سريعة التغيير في صورة الشركة،  </p>                  
                    <p className='fw-bolder text-white fs-5'>  نحن في مجموعة دويدار كفريق استشاري وخبراء في هذا المجال لدينا مجموعة من الأفكار الرائدة والتي تمثل تجارب عملية وخبرات متعمقة في هذا القطاع، </p>                  


                </div>

                </div>


                <div className=' col-md-12 mt-0 p-4'>
                    
                    <div className='text-dark bg-white rounded rounded-2 p-1 mb-2'>

                                    <p className='fw-bolder text-main fs-5 mb-0'>  نقدم الدعم لعملائنا بتقديم أفضل النتائج من خلال:</p>                  
                                    <ul className='row fs-5 mt-0 p-0 fw-bolder text-dark list-unstyled' >
                                  
                                    <li className='mt-0'> <i className="fa-regular fa-circle-check text-dark ms-2"></i> اقتناص الفرص وتحليلها</li>
                                  
                                  
                                    <li> <i className="fa-regular fa-circle-check text-dark ms-2"></i> التقصي الطرق التي يمكن من خلالها شراء، أو بيع، أو اقامة شَرَاكَاتٌ أو دعم شَرَاكَاتٌ</li>
                                  
                                  
                                    <li> <i className="fa-regular fa-circle-check text-dark ms-2"></i> وكيف يمكن لهذه الفرص أن تضيف قيمة للعميل والمحافظة عليها.</li>
                                  
                               </ul> 
                    </div>

                    <div className='bg-white rounded rounded-2 p-1'>
                               <p className='text-main fw-bolder fs-5 text-end'> وتشمل مجالات خدمات استشارات الصفقات ما يلي: </p>

                               <ul className='row fs-5 p-0 fw-bolder text-dark list-unstyled' >
                                  <div className='col-md-6 '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> شراء الشركات.</li>
                                  </div>
                                  <div className='col-md-6 '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> بيع الشركات.</li>
                                  </div>
                                  <div className='col-md-6 '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> التخارج.</li>
                                  </div>
                                  <div className='col-md-6 '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> الاستحواذ والاندماج.</li>
                                  </div>
                               </ul>  

                    </div>

                </div>
 
              
              </div>
              </div>


              <div className="col-md-12 my-5">

                  <div className='row g-0 mt-5'>

                       <div className='col-md-6 bg-custom-father-body p-0'>
                         <div className='bg-custom-dark px-4 py-4'>
                          <h3 className='bg-white p-1 mb-4 me-0 text-center rounded rounded-4 text-main fw-bolder'> 4- استشارات مخاطر تقنية المعلومات: </h3>
                          <p className='text-white fw-bolder mb-4 fs-5 mt-3'> نساعد عملائنا على تحديد المخاطر المتعلقة بتقنية المعلومات وإدارتها وتخفيف آثارها. وتقديم النصائح العملية، وذلك لتفادي المشاكل المعقدة، بالتعاون مع خبراء خارجيين. </p>                  


                          <div className='bg-white rounded rounded-2 p-1'>
                                 <p className='text-main fw-bolder fs-5 text-end'> وتشمل خدمات استشارات مخاطر تقنية المعلومات ما يلي: </p>

                                 <ul className=' fs-5 p-0 fw-bolder text-dark list-unstyled' >
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> إدارة مخاطر المعلومات في عمليات المراجعة الخارجية.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> الرقابة على أنظمة وتقنية المعلومات.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> المراجعة الداخلية لأنظمة المعلومات.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> حماية المعلومات ومرونة إدارة المعلومات.</li>
                                 </ul>  

                          </div>
                    </div>

                    </div>

                      <div className='col-md-6 p-0'>
                           <img src={service5} className='w-100 ' alt=""/>  
                       </div>

                  </div>

  


              </div>


              <div className="col-md-12 bg-custom-father-body mt-5 ">
              <div className='bg-custom-dark shadow-lg  rounded rounded-2'>
                <div className='position-relative px-4 py-3'>

                <div className='px-3 position-absolute edit-improve mt-5 mb-5'>
                  <h2 className='bg-second p-2 mb-3 me-0 text-center rounded rounded-4 text-white'> 5- الاستشارات الإدارية: </h2>
                </div>
                <div className=' mt-5 bg-white space-height rounded rounded-2 px-2'>
                    <p className='fw-bolder text-dark pt-5  fs-5'> تؤكد مجموعة دويدار إيمانها الراسخ بأن المؤسسات القوية هي دائما القوة الأساسية المحركة للتقدم والتنمية الاجتماعية والاقتصادية،  </p>                  
                    <p className='fw-bolder mb-0 text-dark fs-5'>  وبأن هذه المؤسسات أصبحت النواة التي تتركز فيها المعارف والمهارات ورؤوس الأموال، ومنها تنتقل إلى المجتمعات المحققة للنمو الاقتصادي الحقيقي والتنمية المستدامة، </p>                  
                </div>
                <div className='  bg-white space-height rounded rounded-2 px-2'>
                    <p className='fw-bolder text-main mt-0 fs-5'>  وتطبق مجموعة دويدار منهجيات متكاملة للتطوير الإداري، ولديها الكوادر المدربة لتطبيقها. </p>                  
                    <p className='fw-bolder text-dark fs-5'> وبالإضافة إلى الخبرات المتوفرة فإن مجموعة دويدار- عند الحاجة - تقوم بضم مجموعة من الخبراء الاستشاريين إلى خبرائها، بهدف تقديم أفضل الخبرات المعرفية المتقدمة المتخصصة في مجالات محددة.  </p>                  
                    <p className='fw-bolder text-dark fs-5'> إن هناك حاجة ملحة ومتزايدة لوجود مهنة المستشار الإداري المستقل لضمان التخصص بمستوى رفيع ولزيادة فرص الاستقلال والنزاهة في الرأي.  </p>                  


                </div>

                </div>


                <div className=' col-md-12 mt-0 p-4'>

                    <div className='bg-white rounded rounded-2 p-1'>
                               <p className='text-main fw-bolder fs-5 text-end'> وتشمل مجالات خدمات الاستشارات الإدارية ما يلي: </p>

                               <ul className='row fs-5 p-0 fw-bolder text-dark list-unstyled' >
                                  <div className='col-md-6 '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i>  التقييم المبدئي والنهائي للنظم.</li>
                                  </div>
                                  <div className='col-md-6 '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> دراسات الجدوى الاقتصادية.</li>
                                  </div>
                                  <div className='col-md-6 '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> التنفيذ والتدريب.</li>
                                  </div>
                                  <div className='col-md-6 '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> الإدارة المالية.</li>
                                  </div>
                                  <div className='col-md-12  '>
                                    <li> <i className="fa-regular fa-circle-check text-main ms-2"></i>  الاستراتيجيات والعمليات.</li>
                                  </div>
                               </ul>  

                    </div>

                </div>
 
              
              </div>
              </div>


              <div className="col-md-12 my-5">

                  <div className='row g-0 mt-5'>

                       <div className='col-md-6 bg-custom-father-body p-0'>
                         <div className='bg-custom-dark px-2 py-2'>
                          <h3 className='bg-white p-1 mb-2 me-0 text-center rounded rounded-4 text-main fw-bolder'> 6- الاستشارات المالية: </h3>
                          <p className='text-white fw-bolder my-2 fs-5 '> الاستشارات المالية في مجموعة دويدار هدفها بناء نظام عمليات على أسس مالية سليمة ومساعدة المنشآت على الاستفادة القصوى من أداء المهام المالية وزيادة قيمة الأعمال من خلال تقديم خدمات مالية متنوعة من شأنه تسهيل مسار الحركة المالية بحيث تكون قابلة لإدراجها في تقارير مالية مؤثرة لمساعدة الشركات في اتخاذ القرارات. </p>                  


                          <div className='bg-white rounded rounded-2 p-1'>
                                 <p className='text-main fw-bolder fs-5 text-end'> وتشمل خدمات الاستشارات المالية ما يلي: </p>

                                 <ul className=' fs-5 p-0 fw-bolder text-dark list-unstyled' >
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات التمويل.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> محاسبة التكاليف.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> النظم المالية والمحاسبية.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> إعداد الموازنات التقديرية والتخطيط.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> مراجعة وتحسين العمليات المحاسبية.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> أنظمة تخفيض التكاليف ورصد الخسائر.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> خدمات التحقق من عمليات الاحتيال المالي.</li>
                                   <li> <i className="fa-regular fa-circle-check text-main ms-2"></i> تأهيل الشركات لإدراجها في سوق الأوراق المالية.</li>
                                 </ul>  

                          </div>
                    </div>

                    </div>

                      <div className='col-md-6 p-0'>
                           <img src={service6} className='w-100 h-100' alt=""/>  
                       </div>

                  </div>




              </div>
              
 
      </div>
    </div>

  </>
}
