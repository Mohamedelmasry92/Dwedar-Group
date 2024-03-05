import React from 'react'
import styles from './ValuesInHomePage.module.css'
import values from '../../assets/Visionary technology-amico.png'


export default function ValuesInHomePage() {
  return <>
    

    <div className="bg-custom-img bg-light mb-5">
            <div className="bg-custom-overlay-blue mb-5">

            <div className="container-fluid px-md-5 px-sm-0 opacity-100 position-relative mb-5">
                <div className="col-md-12 text-center shadow-lg">
                  <div className=' bg-custom-father-white shadow-lg'>
                    <div className='bg-white shadow-lg'>
                      <p className='fs-3 fw-bolder text-main shadow-lg  p-4'>نحن نؤمن بتقديم خدمات مهنية فعالة وموثوقة، ويمكن الاعتماد عليها لعملائنا</p>     
                    </div>
                  </div>
                </div>


                <div className="row  mt-5 mb-5">
                    <div className="col-md-6 bg-white shadow-lg draw-displaying-on">
                        <div className='container-fluid px-0 shadow-lg'>
                          <div className='row justify-content-center shadow-lg'>


                            <div className='col-md-12  '>
                                  <div className='row '>
                                      <div className='col-md-1 bg-main '>
                                    <div className=' text-center text-white mt-3 bg-main'>
                                          <i className="fa-solid fa-hand-fist fs-2 text-center  "></i>
                                      </div>
                                    </div>
                                    <div className='col-md-11 border-bottom border-3 mt-3'>
                                      <h3 className='fw-bolder text-main '>قيمنا</h3>
                                      <p className='lead fw-medium'> يلتزم فريقنا بالحفاظ على أعلى معايير الجودة والدقة والأخلاقيات المهنية في جميع أعمالنا، مما يضمن لعملائنا اتخاذ قرارات مستنيرة بناء على تقارير جديرة بالثقة.</p>
                                    </div>
                                  </div>
                            </div>

                            <div className='col-md-12  '>
                            
                              <div className='row'>
                                <div className='col-md-1  bg-main '>
                                  <div className='  text-center  bg-main  text-white mt-2 '>
                                    <i className="fa-solid fa-eye fs-2 text-center "></i>
                                  </div>
                                </div>
                                <div className='col-md-11 border-bottom border-3 mt-2'>
                                  <h3 className='fw-bolder text-main'>رؤيتنا</h3>
                                  <p className='lead fw-medium'>أن نكون شركة خدمات مهنية رائدة في مصر، مشهود لنا بخدماتنا الاستثنائية و حلولنا المبتكرة والتزامنا بمساعدة العملاء على تحقيق النجاح.</p>
                                </div>
                              </div>
                            </div>



                            <div className='col-md-12  '>
                                
                              <div className='row'>
                                <div className='col-md-1    bg-main '>
                                  <div className=' mt-2 bg-main text-center text-white '>
                                    <i className="fa-solid fa-pen-to-square fs-2 text-center"></i>
                                  </div>
                                </div>
                                <div className='col-md-11 border-bottom border-3 mt-2'>
                                 <h3 className='fw-bolder text-main'>مهمتنا</h3>
                              <p className='lead fw-medium'>مهمتنا هي تقديم خدمات استشارات ومحاسبة ومراجعة وضرائب وتدريب موثوقة وفي الوقت المناسب تمكن عملائنا من اتخاذ قرارات أعمال مستنيرة وتحسين أدائهم المالي وتحقيق أهدافهم. نحن نسعى جاهدين لبناء شراكات طويلة الأجل مع عملائنا من خلال تقديم حلول فعالة تلبي احتياجاتهم الفريدة وتفوق توقعاتهم.</p>
                                </div>
                              </div>
                            </div>


                              <div className='col-md-12  '>

                              <div className='row'>
                                <div className='col-md-1    bg-main '>
                                  <div className=' text-center bg-main  text-white  mt-2'>
                                    <i className="fa-solid fa-bullhorn fs-2 text-center"></i>
                                  </div>
                                </div>
                                <div className='col-md-11 border-bottom border-3 mt-2'>
                                  <h3 className='fw-bolder text-main'> شعارنا <span className='fw-bolder lead'>"تعزيز مستقبلك المالي"</span></h3>
                              <p className='lead fw-medium'> نحن ملتزمون بتمكين عملائنا بالرؤى المالية والأدوات والدعم الذي يحتاجونه لتحقيق أهدافهم وبناء مستقبل أكثر إشراقاً.</p>
                                </div>


                              </div>
                              </div>
              
                          </div>

                            
                        </div>
                    </div>




                    <div className="col-md-6">
                        <div>
                          <img src={values} className='w-100'/>
                        </div>
                    </div>




                </div>
            <div className='bg-white customize-draw mb-5'>
            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#01304ACC" fillOpacity="1" d="M0,256L1440,0L1440,0L0,0Z"></path></svg>
            </div>
            </div>
            

        </div>
    </div>


  
  </>
}
