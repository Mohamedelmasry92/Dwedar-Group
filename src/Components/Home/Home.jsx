import React, {useEffect , useState} from 'react'
// import WOW from "wowjs"
import Typed from 'typed.js';
import styles from './Home.module.css'
import { Link } from 'react-router-dom';

import AboutInHomePage from '../AboutInHomePage/AboutInHomePage'
import ServicesHome from '../ServicesHome/ServicesHome'
import ValuesInHomePage from '../ValuesInHomePage/ValuesInHomePage'
import Stages from '../Stages/Stages'
import AccuracyInHomePage from '../AccuracyInHomePage/AccuracyInHomePage'

import home from '../../assets/logo.png'


export default function Home() {


  // const el = React.useRef(null);

  // const [isVisible, setIsVisible] = useState({});


  

  // useEffect( () => {

  //   window.scrollTo({ top: 0, behavior: 'auto' });


  //   const handleScroll = () => {
  //     const section = document.getElementById('animated-section');
  //     const top = section.getBoundingClientRect().top;

  //     // You can adjust this offset value based on your layout and requirements
  //     const offset = window.innerHeight;

  //     setIsVisible(top < offset);
  //   }

  //   window.addEventListener('scroll', handleScroll);

    
  //   const wow = new WOW.WOW();
  //   wow.init();

    
  //   const typed = new Typed(el.current, {
  //     strings: ['Welcome to IML SCHOOL.', 'Powered by IML Egypt.' ],
  //     typeSpeed: 70,
  //     smartBackspace: false,
  //     fadeOut: true,
  //     fadeOutClassNameclassName: 'typed-fade-out',
  //     fadeOutDelay: 500,
  //     loop: true,
  //     loopCount: Infinity,
  //     showCursor: true,
  //     cursorChar: '|',
  //     autoInsertCss: true,
  //     backDelay: 700,
  //   });
    

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //     window.removeEventListener('scroll', handleScroll);

  //   };



  // }, [])


  useEffect(() => {

    window.scrollTo({ top: 0, behavior: 'auto' });


    // Initialize Typed.js once the component mounts
    const options = {
      strings: ['  مجموعة دويدار للخدمات المهنية ترحب بك! ', '  مجموعة دويدار للخدمات المهنية ترحب بك! '],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed('#typed-text', options);

    // Clean up Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);



  return <>
    
    <div className="header">
      <div className="header-layout">
      </div>
        <div className="container text-center text-white">
            <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-sm-12 ">
                <div className='w-100 media-query '>
                   
                   <h1 id="typed-text" className="fw-bolder text-larger text-white mb-5" ></h1>
                   
                   <button className='btn btn-outline-light px-lg-5 px-sm-3 py-1'>
                     <Link to='services' className='text-white fw-bold fs-5 '>خدماتنا </Link>
                     </button>
                   <button className='btn bg-light text-black me-3 py-1 px-lg-5 px-sm-3 '>
                     <Link to='contact' className='text-dark fw-bold  fs-5 '>اتصل بنا </Link>
                     </button>
               </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="image-container mb-0 pb-0">
                  <img src={home} className='mb-0 pb-0' alt=""/>
                </div>
            </div>
          </div>
 
      </div>
</div>



    <AboutInHomePage />




    <ServicesHome />




    <ValuesInHomePage />




    <div className="mt-5 title py-3 text-center draw-displaying-on">
              <p className='fw-bold  text-main mt-5 mb-1 draw-displaying-on'>مراحل الخدمات المهنية</p>
              <div className="line translate-middle "></div>
              {/* <p className='fw-bolder fs-5 w-50 text-center m-auto mt-4 mb-2 draw-displaying-on'>بشكل عام، تشكل هذه الخطوات الأربع - التشاور الأولي، والاقتراح والاتفاق، والتنفيذ وإعداد التقارير، والدعم والتحسين المستمر - أساس منهجنا لتقديم خدمات مهنية استثنائية لعملائنا.</p> */}
                
              <div className="col-md-12 text-center shadow-lg mt-4">
                  <div className=' bg-custom-father-lines'>
                    <div className='bg-custom-blue'>
                      <p className='fs-4 fw-bolder text-white p-2'>بشكل عام، تشكل هذه الخطوات الأربع - التشاور الأولي، والاقتراح والاتفاق، والتنفيذ وإعداد التقارير، والدعم والتحسين المستمر - أساس منهجنا لتقديم خدمات مهنية استثنائية لعملائنا.</p>     
                    </div>
                  </div>
                </div>

    </div>
    <Stages/>




    <div className="mt-5 title mb-0 py-3 text-center ">
              <p className='fw-bold  text-main mt-5 mb-1 '>مجموعة دويدار</p>
              <div className="line translate-middle "></div>
                
              <div className="col-md-12 text-center shadow-lg mt-4">
                  <div className=' bg-custom-father-white'>
                    <div className='bg-custom-blue'>
                      <p className='fs-4 fw-bolder text-white p-2 mb-0'>يلتزم فريقنا بالحفاظ على أعلى معايير الجودة والدقة في جميع أعمالنا، مما يمكن عملائنا من اتخاذ قرارات مستنيرة بناءً على تقارير جديرة بالثقة</p>     
                    </div>
                  </div>
                </div>
    </div>
    <AccuracyInHomePage />

  </>
}
