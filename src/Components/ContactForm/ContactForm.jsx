import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("myyrjkkj");
  if (state.succeeded) {
      return <p className='text-center fs-5 fw-bold'>!Thank you for sending a message <br/> We will contact you</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name' className='fw-bolder' > الاسم </label>
      <input id='name' type='text' className='form-control' placeholder='اسمك بالكامل' />

      <label htmlFor='mobile' className='fw-bolder mt-3'> الموبايل </label>
      <input id='mobile'   className='form-control' placeholder='رقم الموبايل (الواتساب)' />

      <label htmlFor="email" className='fw-bolder mt-3'>Email</label>
      <input id="email" type="email" name="email" className='form-control' placeholder='ايميلك (gmail)' />

      <ValidationError prefix="Email" field="email" errors={state.errors}/>

      <label htmlFor='message' className='fw-bolder mt-3'> Message </label>
      <textarea id="message" name="message" className='form-control' placeholder='الرسالة التي تود ارسالها' />

      <ValidationError prefix="Message" field="message" errors={state.errors}/>
      
      <div className="g-recaptcha" data-sitekey="6Le8gH4pAAAAACw3dkSss_9R6MZ0TbhTktX7DZga"></div> 

      <br/>


      <button type="submit" className='btn btn-dark text-white w-100 mt-4 mb-1' disabled={state.submitting}> Send Message </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}
export default App;