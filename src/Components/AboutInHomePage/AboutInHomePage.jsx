import React from 'react'
import styles from './AboutInHomePage.module.css'
import about from '../../assets/237523486.jpg'
import { Link } from 'react-router-dom'


export default function AboutInHomePage() {
  return <>
    
    <div className='container   divUp shadow-lg'>
      <div className='row '>
        <div className='col-md-6 bg-custom-father p-0'>
            <div className='bg-custom-blue-black'>
              <p className='fs-3 fw-bold text-white p-4'>في مجموعة دويدار للخدمات المهنية</p>     
            </div>
        </div>
        <div className='col-md-6 bg-light'>
           <p className='fs-3 fw-bold text-dark p-4'>نفخر بكوننا من أفضل وأكفأ وأسرع مقدمي الخدمات المهنية في مصر.</p>     
        </div>
      </div>
    </div>



    <div className='container-fluid p-md-5 p-sm-0'>
      <div className='row '>
        <div className='col-md-6 p-0'>
            <img src={about} className='w-100 ' alt=""/>  
        </div>
        <div className='col-md-6 bg-custom-father-lines p-0'>
          <div className='bg-custom-blue-lines p-5'>
            <p className='text-white fw-bolder fs-4'>نحن ملتزمون بأن نكون مؤسسة مهنية متخصصة مفضلة في الاستشارات والتدريب والمراجعة والمحاسبة والضرائب، والعديد من الخدمات المهنية التي تحتاج إليها منشآت الأعمال.</p>     
            <p className='text-white lead '>باعتبارنا مستشارين موثوقين لعملائنا، فإننا نقدم مجموعة شاملة من الخدمات في العديد من الصناعات، وفي جميع مراحل تطور المنشآت. هدفنا هو تقديم حلول أسرع وأبسط وأعلى جودة. </p>

            <Link to='about' className='text-dark btn btn-light fw-bolder text-decoration-underline'>للمزيد هنا ستجد نبذة عن مجموعة دويدار للخدمات المهنية</Link>
          </div>
        </div>
      </div>
    </div>
  
  </>
}
