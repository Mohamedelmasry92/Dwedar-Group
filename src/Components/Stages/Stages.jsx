import React from 'react'
import styles from './Stages.module.css'

export default function Stages() {
  return <>
    




    <div className="container-fluid px-md-5 px-sm-0 my-5">
      <div className="row text-center  ">

          <div className="col-md-3 py-5 px-3 my-3 position-relative control-processes">
            <div className=''>
              <i className="fa-solid fa-pen-to-square fs-2 text-center pt-2 pb-2 mb-2 text-main"></i>
              <h3 className='  text-white position-absolute control-text '>المرحلة الاولي</h3>
              <h4 className='text-main p-2 fw-bolder '>التقييم الأولي</h4>
              <p className=' fw-bolder text-border p-4'>خلال الاستشارة الأولية، نأخذ الوقت الكافي لفهم احتياجات وأهداف عملائنا الفريدة. نطرح أسئلة حول أعمالهم ووضعهم الحالي وأهدافهم طويلة الأجل، حتى نتمكن من تطوير خطة مخصصة تلبي احتياجاتهم.</p>
            </div>
          </div>


          <div className="col-md-3 py-5 px-3 my-3 position-relative control-processes">
            <i className="fa-solid fa-handshake fs-2 text-center pt-2 pb-2 mb-2 text-main"></i>
            <h3 className='  text-white position-absolute control-text '>المرحلة الثانية</h3>
            <h4 className='text-main p-2 fw-bolder '>المقترح والاتفاق</h4>
            <p className=' fw-bolder text-border p-3'>بمجرد أن يكون لدينا فهم واضح لمتطلبات العميل، نقوم بتطوير مقترح و تقديمه ، يحدد نطاق العمل والجدول الزمني والأتعاب، ثم نتعاون مع العميل لتحسين المقترح حتى يلبي احتياجاته، وبمجرد أن يكون لدينا اتفاق، يمكننا البدء في العمل. </p>
          </div>


          <div className="col-md-3 py-5 px-3 my-3 position-relative control-processes">

            <i className="fa-solid fa-layer-group fs-2 text-center pt-2 pb-2 mb-2 text-main"></i>          
            <h3 className='  text-white position-absolute control-text '>المرحلة الثالثة</h3>
            <h4 className='text-main p-2 fw-bolder '>التطبيق وإعداد التقارير</h4>
            <p className=' fw-bolder text-border p-1'>مع دخول المقترح والاتفاق حيز التطبيق، نبدأ في تنفيذ الخدمات المهنية المتفق عليها. قد يشمل ذلك وضع أنظمة مالية، وتسوية الحسابات، وإدارة كشوف المرتبات، وإعداد التقارير المالية. خلال العملية، نقدم تقارير وتحديثات منتظمة للعميل، بحيث يكون لديهم دائماً فهم واضح لوضعهم المالي.</p>

          </div>


          <div className="col-md-3 py-5 px-3 my-3 position-relative control-processes">
            <i className="fa-solid fa-scale-balanced fs-2 text-center pt-2 pb-2 mb-2 text-main"></i>
            <h3 className='  text-white position-absolute control-text '>المرحلة الرابعة</h3>
            <h4 className='text-main p-2 fw-bolder '>التحسين والدعم المستمر</h4>
            <p className=' fw-bolder text-border p-1'>لا ينتهي عملنا عند اكتمال الخدمات المهنية والتقرير عنها. نحن نقدم الدعم والتوجيه المستمر لعملائنا، ومساعدتهم على اتخاذ قرارات مالية مستنيرة وتحقيق أهدافهم طويلة الأجل. كما نقوم باستمرار بتقييم أدائنا والبحث عن طرق لتحسين خدماتنا، حتى نتمكن من اضافة قيمة أكبر لعملائنا بمرور الوقت.</p>
          </div>

      </div>
    </div>



  </>
}
