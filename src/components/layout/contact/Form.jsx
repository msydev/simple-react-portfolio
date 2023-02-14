import React, { useState } from "react";
import Button from '../../Button'

function Form() {
    const [mailValues, setMailValues] = useState({
        name:'',
        email:'',
        message:''
    })
  const handleMail = (e)=>{
    const {name, value} = e.target;
    setMailValues({
        ...mailValues,
        [name]:value
    })
  }

  return (
    <form action="" className="md:grow md:w-2/3">
      <input type="text" name="name"
      value={mailValues.name} className="input" placeholder="Name" onChange={handleMail}/>
      <input type="email" name="email" 
      value={mailValues.email} className="input" placeholder="Email" onChange={handleMail}/>
      <textarea
        onChange={handleMail}
        name="message"
        value={mailValues.message}
        cols="30"
        rows="6"
        className="input"
        placeholder="Your Message Here"
      ></textarea>

      <Button text='Send Mail' status='primary' type='submit' styles='w-full md:w-auto md:px-8 py-2' />
    </form>
  );
}

export default Form;
