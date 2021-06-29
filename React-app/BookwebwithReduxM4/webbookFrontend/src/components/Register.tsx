
import './register.css';
import {Link,useHistory} from 'react-router-dom';
import { useState,useContext } from 'react';

import * as Bms from "../reducers/bms-reducer";
import {bmsContext} from "../reducers/bms-context";


function Register(){

  let store=useContext(bmsContext);
  let Users=store.state.loggedInUser;
  
const history = useHistory();
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

   
   store.dispatch({type: Bms.USER_REGISTER,payload:data})
    
   Users.map((post:any)=>{ 
    console.log("user register" + post.email + " "+post.password)
   })
   
   history.push("/login")
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