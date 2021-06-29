
import './register.css';
import {Link} from 'react-router-dom';
import Axios from "axios";
import React, { Component, useState } from 'react';

function Register(){

  
  const[message,setMessage]=useState("");
  const[uname,setUname]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[passwordc,setPasswordc]=useState("");
  function submit(e:any){
    e.preventDefault();
    
    if (password !== passwordc) {
       alert("Enter same password in both the field");
       return;
     }
   console.log('hyy')
   let data={uname,email,password};

   console.log(data);
   Axios.post("http://localhost:4555/app/signUp",data)
   .then(res=>{
     const{...data}= res.data;
    if(data.message!==""){
      setMessage(email + " "+data.message)
    }
    //  alert("User added successfully")
    //    console.log("hello :" +res)
   })
   .catch(error=>{
       console.log(error)
   });
  }

    return(

        <>
        <form onSubmit={submit}>
  <div className="containerrrr">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>
  

    <label><b>User name</b></label>
    <input type="text" placeholder="Enter username" name="uname" id="uname" required   value={uname}  onChange={(e)=>setUname(e.target.value)}/>

    <label><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required  value={email}  onChange={(e)=>setEmail(e.target.value)}/>

    <label ><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required  value={password}  onChange={(e)=>setPassword(e.target.value)}/>
   
    <label ><b>Confirm Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required  value={passwordc}  onChange={(e)=>setPasswordc(e.target.value)}/>
    <hr/>
    <b style={{color:"red"}}>{
  (message!="")?
  message:null
}</b>
<br/>
<br/>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <a className="abutton"><button type="submit" className="registerbtn">Register</button></a>
  </div>

  <div className="container signin">
    <p>Already have an account?
<Link to={`/login`}> <a href="#">Sign in</a>.</Link></p>
  </div>
</form>

        </>
    );
}

export default Register;