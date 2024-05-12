import React, { useState } from 'react'
import './Css/loginsign.css'
const LoginSignup = () => {

  const [state , setState] = useState('signup')

  const [formData , setFormData] = useState({
    username:"" ,
    password:"" ,
    email:"" ,
  });

const changeHandler = (e) => {
      setFormData({...formData , [e.target.name]:e.target.value}) 
}
const login = async () => {
console.log("login" , formData)
let responseData;
await fetch("http://localhost:4000/login" , {
  method: 'POST' ,
  headers:{
    Accept:'application/form-data',
    'Content-Type':'application/json' ,
  } ,
  body:JSON.stringify(formData)
}).then((respo) => respo.json()).then((data) => responseData = data)

if(responseData.success){
  localStorage.setItem('auth-token' , responseData.token)
  window.location.replace("/")
}else {
 alert(responseData.error)
}
}





const singup = async () => {
console.log('signup' , formData)
let responseData;
await fetch("http://localhost:4000/signup" , {
  method: 'POST' ,
  headers:{
    Accept:'application/form-data',
    'Content-Type':'application/json' ,
  } ,
  body:JSON.stringify(formData)
}).then((respo) => respo.json()).then((data) => responseData = data)

if(responseData.success){
  localStorage.setItem('auth-token' , responseData.token)
  window.location.replace("/")
}else {
 alert(responseData.error)
}
}


  return (
    <div className='loginSingup'>
      <div className='loginSingup-container'>
      <h1>{state}</h1>
        <div className='loginsingup-fields'>
          {state === "signup"?<input name='username' value={formData.username}
          onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
      <button  onClick={() => {state === "signup"?singup():login()}}>Continue</button>
      {state === "signup"? <p className="loginSignup-login">Already have an account? <span onClick={() => { setState('login') }}>login</span></p>:<p className="loginSignup-login">Creat an Account <span onClick={() => {
        setState("signup")
      }}>signin</span></p>}
     
      
      <div className='loginSign-agree'>
        <input type="checkbox" name='' id='' />
        <p>By continuing , i agree to the terms od use and policy</p>

      </div>
      </div>
    </div>
  )
}

export default LoginSignup
