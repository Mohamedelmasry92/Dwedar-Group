import React, { useEffect } from 'react'
import styles from './Team.module.css'
import ali from '../../assets/dr-ali2.jpeg'
import dwedar from '../../assets/dwedar.jpg'
import alaa from '../../assets/alaa-cv.jpg'
import ayman from '../../assets/ayman-minicv.jpeg'
import hassan from '../../assets/hassan-cv.jpeg'
import { Link } from 'react-router-dom'


import 'animate.css';


export default function Team() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    
    <div className='bg-custom-father'>
      <div className="container-fluid text-white bg-custom-dark   p-5">
        <div className="row justify-content-center align-items-center  p-0 m-auto">


        <div className="col-md-6 col-sm-12 animate__animated animate__zoomInRight">
            <div>
              <p className='fw-bolder text-white me-5 fs-1 p-3'>فريقنا</p>
            </div>        
        </div>

        <div className="col-md-6 col-sm-12 animate__animated animate__zoomInLeft">
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

    <div className='bg-custom-father-white'>
         <div className="container-fluid mt-5  bg-custom-dark p-5">
           <div className="row align-items-center">

             <div className="col-md-6 col-sm-12 ">
                 <div className="row ">
                   <div className="col-md-6 col-sm-12  ">
                     <div className='bg-white box-container-hover rounded-5 text-center p-3'>
                        <div className='hover-image-box'>
                          <img src={ali} className='image-edited' alt="" />
                        </div>
                       <h2 className='text-main mt-2'>د/علي دويدار</h2>
                       <p className='text-third fw-bold'>الشريك التنفيذي</p>
                     </div>
                   </div>
                   <div className="col-md-6 col-sm-12 mt-lg-5 mt-sm-1">
                     <div className='bg-white box-container-hover  rounded-5 text-center p-3'>
                        <div className='hover-image-box'>
                          <img src={alaa} className='image-edited mt-3' alt="" />
                        </div>
                       <h2 className='text-main mt-2'>السيد/ علاء درويش</h2>
                       <p className='text-third fw-bold'>شريك المراجعة</p>
                     </div>
                   </div>
                   <div className="col-md-6 col-sm-12 mt-lg-0 mt-sm-1">
                     <div className='bg-white box-container-hover  rounded-5 text-center p-3'>
                       <div className='hover-image-box'>
                          <img src={dwedar} className='image-edited' alt="" />
                        </div>
                       <h2 className='text-main mt-2'>د/محمود دويدار</h2>
                       <p className='text-third fw-bold '>شريك الاستشارات</p>
                     </div>
                   </div>
                   <div className="col-md-6 col-sm-12 mt-lg-5 mt-sm-1">
                     <div className='bg-white box-container-hover  rounded-5 text-center p-3'>
                       <div className='hover-image-box'>
                          <img src={ayman} className='image-edited' alt="" />
                        </div>
                        <h2 className='text-main mt-2'>السيد/ أيمن القاضي</h2>
                        <p className='text-third fw-bold '>شريك الضرائب</p>
                       
                     </div>
                   </div>
                   <div className="col-md-6 col-sm-12 mt-lg-0 mt-sm-1">
                     <div className='bg-white box-container-hover  rounded-5 text-center p-3'>
                       <div className='hover-image-box'>
                          <img src={hassan} className='image-edited mt-3' alt="" />
                        </div>
                       <h2 className='text-main mt-2'>السيد/ حسن الصغير</h2>
                       <p className='text-third fw-bold '> شريك المراجعة </p>
                     </div>
                   </div>


                 </div>
             </div>

             <div className="col-md-6 col-sm-12  text-white">
               <h2 className='d-inline-block fw-bolder border-5 border-bottom border-top-0 border-end-0 border-start-0 '>فريق مجموعة دويدار للخدمات المهنية : </h2>
               <p className='fs-5 fw-bold mt-5'> <i className="fa-regular fa-circle-check text-white ms-2"></i>  يتكون الفريق في مجموعة دويدار للخدمات المهنية من مهنيين ذوي مهارات عالية ولديهم خبرة واسعة في مجالات المحاسبة والمالية ومراجعة الحسابات والضرائب وتنمية الموارد البشرية والتدريب في مختلف المجالات.</p>
               <p className='fs-5 fw-bold mt-5 d-inline-block border-3 border-bottom border-top-0 border-end-0 border-start-0'> - يتكون فريقنا من : </p>
               <p className='fs-5 fw-bold mt-5'> <i className="fa-regular fa-circle-check text-white ms-2"></i> د.علي دويدار - الشريك التنفيذي</p>
               <p className='fs-5 fw-bold mt-5'> <i className="fa-regular fa-circle-check text-white ms-2"></i> السيد/ علاء درويش - شريك المراجعة </p>
               <p className='fs-5 fw-bold mt-5'> <i className="fa-regular fa-circle-check text-white ms-2"></i> د.محمود دويدار - شريك الاستشارات</p>
               <p className='fs-5 fw-bold mt-5'> <i className="fa-regular fa-circle-check text-white ms-2"></i> السيد/ أيمن القاضي - شريك الضرائب </p>
               <p className='fs-5 fw-bold mt-5'> <i className="fa-regular fa-circle-check text-white ms-2"></i> السيد/ حسن الصغير - شريك المراجعة </p>
                <Link to='../contact' className='btn bg-light w-100 mt-5 text-black text-decoration-underline fw-bold   fs-5 '> تواصل معنا </Link>
             </div>


           </div>
     </div>
    </div>


    <section className="team-page-section">
        <div className="container">

            <div className="row clearfix mt-5">

                <div className="team-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box h-100 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <ul className="social-icons list-unstyled m-0 p-0">
                            <li>
                              <a href="https://www.facebook.com/ali.dwedar.71" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/in/dr-ali-dwedar-ca-dba-fessa-1042a0120/" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                        </ul>
                        <div className="image">
                            <img src={ali} className=' rounded-top-2' alt="" />
                            <h4 className='text-center text-second pb-1 fw-bold'> د/علي دويدار </h4>
                        </div>
                    </div>
                  
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className='team-desc rounded rounded-2 p-2'>
                    <h2 className='text-center text-white rounded rounded-2 fw-bolder bg-third p-2'>  د/علي دويدار - الشريك التنفيذي</h2>
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> د. علي دويدار، خبير الحوكمة والإدارة الاستراتيجية (DBA)، وزميل جمعية المحاسبين والمراجعين المصرية (ESAA.F)،</p>

                    
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> ولديه خبرة واسعة تزيد عن ثلاثين عامًا في مجال الحوكمة والمراجعة،والخدمات ذات الصلة، وفي مجال تمويل الشركات والاستشارات المالية والإدارية والتدريب. </p>
                    
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> شغل وظائف : مدير عام جمعية المحاسبين والمراجعين المصرية ، وكيل وزارة بالجهاز المركزي للمحاسبات ، مدير مراجعة رئيسي في BDO International ، مدير مراجعة داخلية بالشركة السعودية للنقل الجماعي</p>
                   
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i>  تولى مهام مهنية عديدة في المملكة العربية السعودية والمملكة الأردنية الهاشمية والجمهورية العربية السورية والامارات العربية المتحدة والمملكة المغربية ودولة الكويت والجمهورية التونسية.</p>
                  </div>
                </div>



                <div className="team-block col-lg-4 col-md-6 col-sm-12 mt-5">
                    <div className="inner-box h-100 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <ul className="social-icons list-unstyled m-0 p-0">
                            <li>
                              <a href="https://www.facebook.com/profile.php?id=100006971955094" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                        </ul>
                        <div className="image">
                            <img src={alaa} className=' rounded-top-2' alt="" />
                            <h4 className='text-center text-second pb-1 fw-bold'> د/علاء درويش </h4>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                  <div className='team-desc rounded rounded-2 p-2'>
                    <h2 className='text-center text-white rounded rounded-2 fw-bolder bg-third p-2'> السيد/ علاء درويش - شريك المراجعة</h2>
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> السيد علاء درويش حاصل على زمالة جمعية المحاسبين والمراجعين المصرية ، دبلوم المعايير الدولية للتقارير المالية DIP IFRS ، شهادة معايير المحاسبة الدولية في القطاع العام Cert IPSAS.</p>

                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> يتمتع بخبرة  اكثر من 25 عام  في مجال المحاسبة والمراجعة وقد عمل في ثلاث مكاتب محاسبة عالمية داخل مصر وفي المملكة العربية السعودية. </p>

                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> تشمل الخبرات العديد من  عمليات المراجعة وخدمات التأكد الأخرى لعدد كبير من الشركات الكبيرة  والمتوسطة والتي تعمل في عدة مجالات مثل المقاولات والخدمات والبنوك وشركات التأمين والبترول والتعدين والطيران . </p>                    
                   
                  </div>
                </div>




                <div className="team-block col-lg-4 col-md-6 col-sm-12 mt-5">
                    <div className="inner-box h-100 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <ul className="social-icons list-unstyled m-0 p-0">
                            <li>
                              <a href="https://www.facebook.com/profile.php?id=100006971955094" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                        </ul>
                        <div className="image">
                            <img src={dwedar} className=' rounded-top-2' alt="" />
                            <h4 className='text-center text-second pb-1 fw-bold'> د/محمود دويدار </h4>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                  <div className='team-desc rounded rounded-2 p-2'>
                    <h2 className='text-center text-white rounded rounded-2 fw-bolder bg-third p-2'>  د/محمود دويدار - شريك الاستشارات</h2>
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> دكتور محمود دويدار حاصل على ماجستير في ادارة الجودة  </p>

                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> يتمتع بخبرة تزيد عن 10 أعوام في مجال الاستشارات وتطوير الاعمال وادارة الجودة والتحسين المستمر وادارة استراتيجيات التسويق ، وفي مجال التدريب وتنمية الموارد البشرية وتنظيم المؤتمرات  </p>

                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> تشمل الخبرات في مجال ريادة الأعمال تأسيس مشروع خاص بتدريب الأطقم الطبية على الإدارة الطبية، وخلق جيل من رواد الأعمال في المجال الطبي، ليكون بمثابة كيان حاضن للألعمال ورواد الاعمال، وتم اعتماد المشروع من الاتحاد الأوربي والحكومة الألمانية، و(GIZ)، و (Gemini Africa). </p>
                                        
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> عمل على تطوير عدة كيانات منها مجموعة شركات المعالي للتوظيف والموارد البشرية، ومجموعة عون الطبية، وشركة قصر العلوم للتدريب (SPC)، وشركة (Eighteeth Medical) ووكيلها الوحيد في مصر (TDS). </p>
                   
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> لديه معرفة وخبرة بالتدريب، ومعتمد كمحاضر من المنظمة الامريكية للعلوم والتكنولوجيا ،(American Organization for Science & Technology) ولديه خبرة بتنمية الموارد البشرية بالمؤسسات، وحاصل على دبلومة Instructional Design. </p>
                  </div>
                </div>






                <div className="team-block col-lg-4 col-md-6 col-sm-12 mt-5">
                    <div className="inner-box h-100 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <ul className="social-icons list-unstyled m-0 p-0">
                            <li>
                              <a href="https://www.facebook.com/profile.php?id=100006971955094" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                        </ul>
                        <div className="image">
                            <img src={ayman} className=' rounded-top-2' alt="" />
                            <h4 className='text-center text-second pb-1 fw-bold'> د/أيمن القاضي </h4>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                  <div className='team-desc rounded rounded-2 p-2'>
                    <h2 className='text-center text-white rounded rounded-2 fw-bolder bg-third p-2'>السيد/ أيمن القاضي - شريك الضرائب</h2>

                      <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> حاصل على عضوية الجمعية البريطانية للضرائب بالمملكة المتحدة - دبلوم ضريبة القيمة المضافة VCD وجمعية المدققين الداخليين في دولة الإمارات العربية المتحدة (IIA Global A:liate) </p>
                      <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> محاسب قانونى مقيد بسجل المحاسبين والمراجعين بوزارة المالية تحت رقم17072 </p>
                      <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> وكيل ضريبي معتمد من الهيئة الاتحادية للضرائب بالامارات TAAN: 20049243 </p>
                      <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> يتمتع بخبرة تقترب من 30 عاما في مصر والامارات في مجالات المحاسبة والتدقيق والضرائب في قطاعات متعددة  </p>

                  </div>
                </div>




                
                <div className="team-block col-lg-4 col-md-6 col-sm-12 mt-5">
                    <div className="inner-box h-100 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <ul className="social-icons list-unstyled m-0 p-0">
                            <li>
                              <a href="https://www.facebook.com/profile.php?id=100006971955094" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                        </ul>
                        <div className="image">
                            <img src={hassan} className=' rounded-top-2' alt="" />
                            <h4 className='text-center text-second pb-1 fw-bold'> د/حسن الصغير </h4>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                  <div className='team-desc rounded rounded-2 p-2'>
                    <h2 className='text-center text-white rounded rounded-2 fw-bolder bg-third p-2'>السيد/ حسن الصغير-شريك المراجعة</h2>


                      <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> حاصل على عضوية جمعية المحاسبين والمراجعين المصرية ودبلومة المعايير المحاسبية للتقارير الدولية (IFRS) </p>
                      <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> محاسب قانوني (مسجل بوزارة المالية تحت رقم 21985 ) </p>
                      <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> يتمتع بخبرة تقترب من 25 سنة في مجال المحاسبة والمراجعة في العديد من الجهات منها BDO International. </p>
                      <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> من يوليو 1999 الى ديسمبر 2006 وهو المدير المسؤول لدي : Ahmed Farag &Co. بالاضافة الى <br/> CPA & Consultants, Giza, Egypt  </p>

                  </div>
                </div>


            </div>
        </div>
    </section>
    





  </>
}
