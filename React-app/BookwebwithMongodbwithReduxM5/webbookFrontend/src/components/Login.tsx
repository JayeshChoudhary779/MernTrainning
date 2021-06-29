import './login.css';
import { useHistory, Redirect} from 'react-router-dom';
import Axios from "axios";
import { useState,useContext } from 'react';
import * as Bms from "../reducers/bms-reducer";
import firebase from "./firebase";
import {bmsContext} from "../reducers/bms-context";

function Login(){ 
const history = useHistory();

let {dispatch}=useContext(bmsContext);
const[token,setToken]=useState("");
const[valid,setValid]=useState("");
  const[message,setMessage]=useState("");
  const[messageOtp,setMessageOtp]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[moNumber,setMoNumber]=useState("");
  
  const[show,setShow]=useState("pswd");
  const token1= localStorage.getItem("authToken")
  if(token1!==null){
    history.push("/");
  }
  
  function submit(e:any){
    e.preventDefault();
    if (email=== "" || password === "") {
       alert("All the fields are mandatory!");
       return;
     }
   console.log('hyy')
   let data={email,password};
   
  console.log(data);

  
  dispatch({type: Bms.USER_LOGIN,payload:data})

   Axios.post("http://localhost:4555/app/login",data)
   .then(res=>{ 
     
    const{...data}= res.data;
    if(data.message!==""){
      setMessage(email + " "+data.message)
      console.log(message)
      
      if(data.message==="login successfull!"){
        localStorage.setItem("authToken",data.token);
       setToken(data.token)
       
  dispatch({type: Bms.USER,payload:true})
        console.log(token)
        setValid("success")
    }}
    
   })
   .catch(error=>{
       console.log(error)
   });
  }



  function submitMobile(e:any){
    e.preventDefault();
    if (moNumber=== "") {
       alert("field is mandatory!");
       return;
     }
   console.log('hyy')
   console.log(moNumber)  

  
  Axios.post("http://localhost:4555/app/loginWithOtp",{moNumber})
  .then(res=>{ 
   const{...data}= res.data;
   console.log(res)


   if(data.message==="registered Number"){

     setMessageOtp(data.message)
   console.log(data.message)
   let recaptcha= new firebase.auth.RecaptchaVerifier("recaptcha")
  let number=`+91${moNumber}`;
  // let number=`+917798906136`;
  console.log(number)
  firebase.auth().signInWithPhoneNumber(number,recaptcha).then((e)=>{
    let code = prompt("Enter otp");
    if(code==null){
      return;
    }
    e.confirm(code).then((res)=>{
      console.log(res,"......................")
      
    localStorage.setItem("authToken","otptoken");
    
  dispatch({type: Bms.USER,payload:true})
     setValid("success")
    })
  }).catch(()=>{
    // history.push("/")
    console.log("error")
  })
  }


   else{
    setMessageOtp(data.message)
    console.log(data.message)
   }
  })
  .catch(error=>{
      console.log(error)
  });


//   if(messageOtp==="registered Number"){
//   let recaptcha= new firebase.auth.RecaptchaVerifier("recaptcha")
//   let number=`+91${moNumber}`;
//   firebase.auth().signInWithPhoneNumber(number,recaptcha).then((e)=>{
//     let code = prompt("Enter otp");
//     if(code==null){
//       return;
//     }
//     e.confirm(code).then((res)=>{
//       console.log(res,"......................")
//     })
//   }).catch(()=>{
//     console.log("error")
//   })
//   }
//  }
  }


  if(valid=="success"){
 return <Redirect to="/"/>
}else{
    return(
        
        
        (show==="pswd")?
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
    <br />
    <h6 style={{textAlign:"center"}}>OR</h6>
    <h4 style={{color:"blue", textDecoration:"underline",textAlign:"center", cursor: "pointer"}} onClick={()=>{setShow("otp")}}>Login using OTP</h4>
  </div>

</form>
:
<form className="form23" onSubmit={submitMobile}>
<div className="imgcontainerrr">
  <img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" alt="Avatar" className="avatar"/>
</div>

<div className="containerrr">
  <label><b>Registered Mobile No.</b></label>
  <input className="inputpsw" type="text" placeholder="Enter Mobile No." name="MoNum" required   value={moNumber}  onChange={(e)=>setMoNumber(e.target.value)}/>
  <div id ="recaptcha"></div>
  <b style={{color:"red"}}>{
  (messageOtp!="")?
  messageOtp:null
}</b>
  <button className="buttonlo" type="submit">Get OTP</button>
  <br />
  <h6 style={{textAlign:"center"}}>OR</h6>
  <h4 style={{color:"blue", textDecoration:"underline",textAlign:"center", cursor: "pointer"}} onClick={()=>{setShow("pswd")}}>Login using password</h4>
</div>
</form>

    );
}
}
export default Login;