import React, {useEffect} from 'react'
import styles from './NotFound.module.css'
import notfound from '../../assets/Oops.png'
import { Link } from 'react-router-dom';



export default function NotFound() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <>
    
    <div className='container-fluid'>
      <div className='row text-center'>
        <div className='col-md-12 '>
          <div className='col-md-4 col-sm-12 m-auto '>
            <img src={notfound} className='w-100'/>
          </div>
          <button className='btn bg-main fs-5 mt-3 fw-bolder' >
          <Link to='/' className='text-white fw-bolder'> Back To Home </Link>
           </button>
        </div>
      </div>
    </div>
  
  </>
}
