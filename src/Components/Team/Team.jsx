import React, { useEffect } from 'react'
import styles from './Team.module.css'
import ali from '../../assets/dr-ali2.jpeg'
import dwedar from '../../assets/dwedar.jpg'
import alaa from '../../assets/alaa-cv.jpg'
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
                   <div className="col-md-6 col-sm-12 mt-5">
                     <div className='bg-white box-container-hover  rounded-5 text-center p-3'>
                        <div className='hover-image-box'>
                          <img src={dwedar} className='image-edited' alt="" />
                        </div>
                       <h2 className='text-main mt-2'>د/محمود دويدار</h2>
                       <p className='text-third fw-bold'>شريك</p>
                     </div>
                   </div>
                   <div className="col-md-6 col-sm-12  ">
                     <div className='bg-white box-container-hover  rounded-5 text-center p-3'>
                       <div className='hover-image-box'>
                          <img src={alaa} className='image-edited mt-3' alt="" />
                        </div>
                       <h2 className='text-main mt-2'>د/علاء درويش</h2>
                       <p className='text-third fw-bold mb-0'>شريك</p>
                       <p className='text-third fw-bold '>مدير تنفيذي لخدمات المراجعة</p>
                     </div>
                   </div>
                   <div className="col-md-6 col-sm-12 mt-5">
                     <div className='bg-white box-container-hover  rounded-5 text-center p-3'>
                       <div className='hover-image-box'>
                          <img src={ali} className='image-edited' alt="" />
                        </div>
                        <h2 className='text-main mt-2'>د/محمد</h2>
                       <p className='text-third fw-bold'>شريك</p>
                     </div>
                   </div>
                 </div>
             </div>

             <div className="col-md-6 col-sm-12  text-white">
               <h2 className='d-inline-block fw-bolder border-5 border-bottom border-top-0 border-end-0 border-start-0 '>فريق مجموعة دويدار للخدمات المهنية : </h2>
               <p className='fs-5 fw-bold mt-4'> <i className="fa-regular fa-circle-check text-white ms-2"></i> يتكون الفريق في مجموعة دويدار للخدمات المهنية من مهنيين ذوي مهارات عالية ولديهم خبرة واسعة في مجالات المحاسبة والمالية ومراجعة الحسابات والضرائب.</p>
               <p className='fs-5 fw-bold mt-4 d-inline-block border-3 border-bottom border-top-0 border-end-0 border-start-0'> - يتكون فريقنا من : </p>
               <p className='fs-5 fw-bold mt-4'> <i className="fa-regular fa-circle-check text-white ms-2"></i> د/علي دويدار - الشريك التنفيذي</p>
               <p className='fs-5 fw-bold mt-4'> <i className="fa-regular fa-circle-check text-white ms-2"></i> د/محمود دويدار - شريك</p>
               <p className='fs-5 fw-bold mt-4'> <i className="fa-regular fa-circle-check text-white ms-2"></i> د/ علاء درويش - شريك / مدير تنفيذي لخدمات المراجعة </p>
               <p className='fs-5 fw-bold mt-4'> <i className="fa-regular fa-circle-check text-white ms-2"></i> د/ محمد - شريك </p>
                <Link to='../contact' className='btn bg-light w-100 mt-4 text-black text-decoration-underline fw-bold   fs-5 '> تواصل معنا </Link>
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
                              <a href="https://wa.me/01001971254" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp  fw-medium fs-5"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/ali.dwedar.71/" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram fw-medium fs-5"></i>
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
                    {/* <img src={logo} className='w-100' alt="" /> */}
                    
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className='team-desc rounded rounded-2 p-2'>
                    <h2 className='text-center text-white rounded rounded-2 fw-bolder bg-third p-2'>  د/علي دويدار - الشريك التنفيذي</h2>
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> د. علي دويدار، خبير الحوكمة والإدارة الاستراتيجية (DBA)، وزميل جمعية المحاسبين والمراجعين المصرية (ESAA.F)، ولديه خبرة واسعة تزيد عن ثلاثين عامًا في مجال الحوكمة والمراجعة،والخدمات ذات الصلة، وفي مجال تمويل الشركات والاستشارات المالية والإدارية والتدريب.</p>

                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> تشمل الخبرات في مجال المراجعة، مراجعة التقارير المالية والمراجعة الداخلية والالتزام، والحوكمة وتقييم المخاطر.</p>
                    
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> د. علي دويدار لديه خبرة واسعة في تمويل الشركات والخدمات الاستشارية ذات الصلة بما في ذلك الفحص النافي للجهالة والدراسات التشخيصية، ودراسات الجدوى وإعادة الهيكلة المالية والإدارية والإدارة الاستراتيجية، وإعادة هيكلة الشركات، والتدريب.</p>
                    
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> د. علي دويدار عمل في جمعية المحاسبين والمراجعين المصرية (مدير عام الجمعية)، وفي International BDO، مكتب القاهرة (مدير مراجعة رئيسي)، وفي الشركة السعودية للنقل الجماعي (مدير مراجعة داخلية)، وفي الجهاز المركزي للمحاسبات في مصر بالكادر الفني الرقابي حتى وظيفة وكيل وزارة.</p>
                   
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> د. علي دويدار تولى مهام مهنية في المملكة العربية السعودية والمملكة الأردنية الهاشمية والجمهورية العربية السورية والامارات العربية المتحدة والمملكة المغربية ودولة الكويت والجمهورية التونسية.</p>
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
                              <a href="https://wa.me/01120098206" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp  fw-medium fs-5"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/dr.dwedar/" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram fw-medium fs-5"></i>
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
                    {/* <img src={logo} className='w-100' alt="" /> */}
                    
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                  <div className='team-desc rounded rounded-2 p-2'>
                    <h2 className='text-center text-white rounded rounded-2 fw-bolder bg-third p-2'>  د/محمود دويدار - شريك</h2>
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i>  د. محمود دويدار، أخصائي إدارة الجودة (MQM)، ولديه خبرة تزيد عن عشرة أعوام في مجال ريادة الاعمال، وفي مجال الإدارة والتسويق، وفي مجال التدريب، وتنمية الموارد البشرية وتنظيم المؤتمرات. </p>

                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> تشمل الخبرات في مجال ريادة الأعمال تأسيس مشروع خاص بتدريب الأطقم الطبية على الإدارة الطبية، وخلق جيل من رواد الأعمال في المجال الطبي، ليكون بمثابة كيان حاضن للألعمال ورواد الاعمال، وتم اعتماد المشروع من الاتحاد الأوربي والحكومة الألمانية، و(GIZ)، و (Gemini Africa). </p>
                    
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> د. محمود دويدار لديه خبرة في تطوير الاعمال وإدارة الجودة والتحسين المستمر وإدارة استراتيجيات التسويق. </p>
                    
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> د. محمود دويدار عمل على تطوير عدة كيانات منها مجموعة شركات المعالي للتوظيف والموارد البشرية، ومجموعة عون الطبية، وشركة قصر العلوم للتدريب (SPC)، وشركة (Eighteeth Medical) ووكيلها الوحيد في مصر (TDS). </p>
                   
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> د. محمود دويدار لديه معرفة وخبرة بالتدريب، ومعتمد كمحاضر من المنظمة الامريكية للعلوم والتكنولوجيا ،(American Organization for Science & Technology) ولديه خبرة بتنمية الموارد البشرية بالمؤسسات، وحاصل على دبلومة Instructional Design. </p>
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
                              <a href="https://wa.me/01120098206" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp  fw-medium fs-5"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/dr.dwedar/" target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram fw-medium fs-5"></i>
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
                    {/* <img src={logo} className='w-100' alt="" /> */}
                    
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12 mt-5">
                  <div className='team-desc rounded rounded-2 p-2'>
                    <h2 className='text-center text-white rounded rounded-2 fw-bolder bg-third p-2'>د/علاء درويش - شريك <p className='fs-4 d-inline-block bg-third'> - مدير تنفيذي لخدمات المرجعة</p></h2>
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> علاء مدير تنفيذي للمراجعة بمجموعة شركات دويدار للخدمات المهنية.</p>

                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> بكالوريوس محاسبة – جامعة  القاهرة –جمهورية مصر العربية. زميل جمعية المحاسبين والمراجعين المصرية. دبلوم المعايير الدولية للتقارير المالية DIP IFRS. شهادة معايير المحاسبة الدولية في القطاع العام  Cert IPSAS.  </p>

                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> علاء لدية خبرة  اكثر من 25 عام  في مجال المحاسبة والمراجعة فى جمهورية مصر العربية والمملكة العربية السعودية  وقد عمل  خلال تلك الفترة في ثلاث مكاتب محاسبة عالمية  منها 9 سنوات بمكتب ديلويت – مصر وقد شغل  خلال تلك الفترة مناصب إدارية  عديدة وقد التحق علاء بالعمل في شركة الماجد والعنزي محاسبون ومراجعون قانونيون ثم التحق بمجموعة شركات دويدار للخدمات المهنية. </p>
                    
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> قام علاء  بالعمل في مجال المحاسبية  والمراجعة من خلال الاشتراك في عدد ضخم من عمليات المراجعة وخدمات التأكد الأخرى لعدد كبير من الشركات الكبيرة  والمتوسطة والتي تعمل في عدد كبير من المجالات مثل المقاولات والخدمات والبنوك وشركات التأمين والبترول والتعدين والطيران  وغيرها وفيما يلي عرض لسجل خبرات علاء بشكل أكثر تفصيلا:
                    
                      <ul>
                        <li>الاشتراك في عمليات المراجعة والتدقيق على كافة المستويات الفنية.</li>
                        <li> الاشراف على عمليات مسك الدفاتر والسجلات لعدد من الشركات باستخدام النظم المحاسبية الالية. </li>
                        <li> الاشتراك في عمليات اعداد تقارير الخبرة المحاسبية للمحاكم التجارية والمدنية. </li>
                        <li> الاشتراك في عمليات اعداد التقارير المحاسبية في عمليات التحكيم. </li>
                        <li> الاشتراك في عدد من عمليات التحول من معايير المحاسبة المالية الصادرة عن المركز السعودية للمحاسبين القانونيين الى المعايير الدولية للتقرير المالي  ( IFRS). </li>
                        <li> الاشتراك في فريق المدربين بمكتب ديلويت . </li>
                        <li> المشاركة في وضع اللوائح والإجراءات الداخلية للشركة . </li>
                        <li> المشاركة في مشاريع التحول من الأساس النقدي لاساس الاستحقاق في عدد من مشروعات التحول منها: (أمانة منطقة جازان - جامعة حفر الباطن - جامعة حائل) </li>
                      </ul>

                    </p>
                    
                   
                    <p className='text-second shadow-lg space-height  rounded rounded-2 fw-bolder  p-2'> <i className="fa-regular fa-circle-check text-main ms-2"></i> خلال سنوات العمل الخاصة بعلاء في مجال المحاسبة والمراجعة  اشترك علاء في تطويروادخال  وتشغيل عدد من البرامج الالية في مجال المحاسبية والمراجعة. </p>
                  </div>
                </div>




            </div>
        </div>
    </section>
    





  </>
}
