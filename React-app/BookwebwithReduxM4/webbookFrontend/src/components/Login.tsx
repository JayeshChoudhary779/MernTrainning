import './login.css';
import { useHistory,Redirect} from 'react-router-dom';
import  {useState,useContext } from 'react';

import * as Bms from "../reducers/bms-reducer";
import {bmsContext} from "../reducers/bms-context";



function Login(){ 
  

const history = useHistory();
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[tokenStatus,setToken]=useState("");
const[message,setMessage]=useState("");


  
let store=useContext(bmsContext);

  function submit(e:any){
    e.preventDefault();
    if (email=== "" || password === "") {
       alert("All the fields are mandatory!");
       return;
     }
   console.log('hyy')
   let data={email,password};

   
    store.dispatch({type: Bms.USER_LOGIN,payload:{email,password}})
   
  console.log(data);
let tokenStatus =store.state.loginSuccess.token;
setToken(tokenStatus);
if(tokenStatus!==undefined){
  // console.log(tokenStatus)
  console.log(tokenStatus)
  if(tokenStatus!=="" ){
  localStorage.setItem("authToken",tokenStatus);}
  }
     
  if(tokenStatus==="" ){
    setMessage("invalid details")
  }

  }


  if(tokenStatus!=="" && tokenStatus!==undefined){
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