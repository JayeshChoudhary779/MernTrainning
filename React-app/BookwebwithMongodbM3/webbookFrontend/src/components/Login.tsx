import './login.css';
import {BrowserRouter as Router, useHistory, Redirect, Route, BrowserRouter,Link} from 'react-router-dom';
import Axios from "axios";
import React, { Component, useState } from 'react';

function Login(){ 
const history = useHistory();

const[token,setToken]=useState("");
const[valid,setValid]=useState("");
  const[message,setMessage]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  function submit(e:any){
    e.preventDefault();
    if (email=== "" || password === "") {
       alert("All the fields are mandatory!");
       return;
     }
   console.log('hyy')
   let data={email,password};

   console.log(data);

   Axios.post("http://localhost:4555/app/login",data)
   .then(res=>{ 
    const{...data}= res.data;
    if(data.message!==""){
      setMessage(email + " "+data.message)
      console.log(message)
      
      if(data.message==="login successfull!"){
        localStorage.setItem("authToken",data.token);
       setToken(data.token)
        console.log("logged in"+token)
        setValid("success")
    }}
    
   })
   .catch(error=>{
       console.log(error)
   });
  }

//  fetch(`http://localhost:4555/app/login`,{
  //   method:'POST',
  //   body:JSON.stringify(data)
  // }).then((result)=>{
  //     console.log("result",result);
  //     localStorage.setItem('login',JSON.stringify({
  //       login:true,
  //       token:result.token
  //     }))
  //   })

  if(valid==="success"){
 return <Redirect to="/"/>
}else{
    return(
        <>
        <form className="form23" onSubmit={submit}>
  <div className="imgcontainerrr">
    <img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" alt="Avatar" className="avatar"/>
  </div>

  <div className="containerrr">
    <label><b>Email</b></label>
    <input className="inputpsw" type="text" placeholder="Enter Username" name="uname" required   value={email}  onChange={(e)=>setEmail(e.target.value)}/>

    <label><b>Password</b></label>
    <input className="inputpsw" type="password" placeholder="Enter Password" name="psw" required    value={password}  onChange={(e)=>setPassword(e.target.value)}/>
    <b style={{color:"red"}}>{
  (message!="")?
  message:null
}</b>
<br/>
<br/>
    <button className="buttonlo" type="submit">Login</button>
    
  </div>

</form>

        </>
    );
}
}
export default Login;