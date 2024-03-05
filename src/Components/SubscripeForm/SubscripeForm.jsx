import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function SubscripeForm() {
  const [state, handleSubmit] = useForm("xzbngder");
  if (state.succeeded) {
      return <p className='text-center fs-5 fw-bold'>!Thanks for joining</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      

      <input id="email" type="email" name="email" className="form-control memail" placeholder='Email' />
      <ValidationError prefix="Email" field="email" errors={state.errors}/>
      <button type="submit" className="btn bg-main text-white fw-bold mt-2 text-start button-hover-white w-100  text-center" disabled={state.submitting}> اشترك معنا </button>
    </form>
  );
}

function App() {
  return (
    <SubscripeForm />
  );
}
export default App;