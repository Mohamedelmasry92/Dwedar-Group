import React, { useEffect } from 'react'
import styles from './Service2Auditing.module.css'
import { Link } from 'react-router-dom'
import service4 from '../../assets/seminar-registration-2022-12-16-01-23-25-utc.jpg'
import service5 from '../../assets/agenda-analysis-business-990818-1.jpg'
import service6 from '../../assets/bookkeeping-1.jpg'
import 'animate.css';



export default function Service2Auditing() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    
  <div className='bg-custom-father'>
  <div className="container-fluid text-white bg-custom-dark   p-5">
    <div className="row justify-content-center align-items-center  p-0 m-auto">


    <div className="col-md-6 animate__animated animate__zoomInRight">
        <div>
          <p className='fw-bolder text-white  fs-1 '> خدمات المراجعة والفحص المحدود </p>
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

    <div className='col-md-8 bg-white  shadow-lg'>
        <h3 className='fw-bolder bg-main p-1 text-white text-center'> خدمات المراجعة والفحص المحدود : </h3>
        <p className='px-lg-5 px-md-auto px-sm-auto py-2 text-main fs-5 mt-3 fw-bold'> نحن نقدم خدمات المراجعة والفحص المحدود للتأكد من دقة ونزاهة القوائم المالية، مما يساعد عملاءنا على اكتساب المزيد من الثقة في تقاريرهم المالية. </p>
        <p className='px-lg-5 px-md-auto px-sm-auto py-2 text-main fs-5 mt-3 fw-bold'> إن مراجعة القوائم المالية للعملاء بجودة عالية ضرورية لاستمرار عملهم بشكل صحيح،</p>
        <p className='px-lg-5 px-md-auto px-sm-auto py-2 text-main fs-5 mt-3 fw-bold'>  لذلك يؤمن مراجعو الحسابات بمجموعــــــة دويدار بأن المراجــعين المســـــــتقلين يؤدون دوراً مهما كوسطاء موثوقين بين مقدمي التقارير حول الأعمال ومستخدميها،</p>
        <p className='px-lg-5 px-md-auto px-sm-auto py-2 text-main fs-5 mt-3 fw-bold'>  حيث أن وجودنا كمراجعي حسابات خارجيين يضمن المراجعة المستقلة والمساهمة بشكل فعال في القضاء على احتمالات الغش والاحتيال الجوهرية في التقارير المالية.</p>
           

    </div>
 
  </div>
</div>




    <div className='container-fluid px-lg-5 px-md-auto px-sm-auto  mb-5 mt-5 bg-custom-father-body '>


    <div className=" title py-3 text-center ">
              <p className='fw-bolder fs-5 bg-white text-main mt-5 mb-1 '>  وتشمل خدماتنا الرئيسية ما يلي: </p>
              <div className="line translate-middle "></div>
     </div>

        <div className='row justify-content-center align-items-center text-center '>


          <div className='col-md-12 my-5 '>

              <div className="row g-0">
                <div className="col-md-4 ">
                  <img src={service4} className='w-100 rounded' alt="" />
                </div>
                <div className="col-md-8 shadow-lg rounded bg-white">
                  <h4 className='fw-bold mb-5 bg-main text-white p-2 rounded shadow-lg ' > <i className="fa-solid fa-building ms-3 bg-main text-white fs-2  "></i> خدمات التقارير المحاسبية</h4>
                  <p className='lead fw-bold  '> نساعد عملائنا بتوفير خدمة إعداد التقارير المحاسبية،  </p>
                  <p className='lead fw-bold  '>  ونقدم الاستشارات حول المعالجات المحاسبية و نساعد العملاء في حل القضايا المعاصرة. </p>
                </div>
              </div>
          </div>



          <div className='col-md-12 my-5 '>

            <div className="row g-0">
              <div className="col-md-4 ">
                <img src={service5} className='w-100 h-100 rounded' alt="" />
              </div>
              <div className="col-md-8 bg-white  shadow-lg rounded">
                <h4 className='fw-bold bg-main text-white  p-2 rounded shadow-lg'><i className="fa-solid fa-building ms-3 bg-main text-white fs-2  "></i> خدمات التأكد الأخرى </h4>
                <p className='lead fw-bold text-dark mt-4 mb-4'> لا تعكس القوائم المالية بشكل كاف الفرص والمخاطر، لذا فانه لا غنى للعميل عن حاجته لخدمات التأكد الأخرى، بل وتزداد حاجته لها يوماً بعد يوم، فهي مفيدة وتختلف عن المراجعة الخارجية التقليدية. </p>
                  
                <p className='lead fw-bold text-dark mb-4'> تضفي عمليات التأكد المستقلة والموضوعية للمعلومات المالية وغير المالية والتعاملات والعمليات، مصداقية على إفصاحات العميل، وذلك كالتأكد من صحة البيانات المالية وغير المالية وخدمات التصديق على صحتها مثل مراجعة نظام الرقابة الداخلية، والإجراءات المتفق عليها. </p>
              </div>
            </div>

          </div>


          
          <div className='col-md-12 my-5'>

              <div className="row g-0">
                <div className="col-md-4">
                  <img src={service6} className='w-100 rounded' alt="" />
                </div>
              
                <div className="col-md-8 bg-white rounded shadow-lg">
                    
                    <h4 className='fw-bold p-2 rounded shadow-lg  p-2 bg-main text-white mb-5'><i className="fa-solid fa-building ms-3 bg-main text-white fs-2  "></i> الفحص المحدود للقوائم المالية </h4>
                    <p className='lead fw-bold  text-dark '> بالإضافة إلى عمليات المراجعة، فإننا نقوم بالفحص المحدود لتوفير تأكد محدود بشأن القوائم المالية والمعلومات المالية الأخرى. </p>
                    <p className='lead fw-bold  text-dark mb-4'>  تتضمن هذه الارتباطات إجراءات تحليلية واستفسارات ومناقشات وإجراءات وأدلة تقل عن مثيلتها في المراجعة الكاملة للقوائم المالية. </p>
                </div>
              </div>
          </div>
        
        </div>
    </div>

  
  </>
}
