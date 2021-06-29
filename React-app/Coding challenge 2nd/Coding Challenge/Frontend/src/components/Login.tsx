import './login.css';
import { useHistory, Redirect} from 'react-router-dom';
import Axios from "axios";
import { useState,useContext} from 'react';
import * as Bms from "../reducers/bms-reducer";
import {bmsContext} from "../reducers/bms-context";
import { Modal } from 'react-bootstrap';

function Login(){ 
const history = useHistory();

let {dispatch}=useContext(bmsContext);

const [signinAs, setSigninAs] = useState('User');

const [screen, setScreen] = useState('Modal');
const [show1, setShow1] = useState(true);

const handleCloseUser = () =>{setShow1(false),setScreen("simple")};

const[token,setToken]=useState("");
const[valid,setValid]=useState("");
  const[message,setMessage]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const token1= localStorage.getItem("authToken")
  if(token1!==null){
    history.push("/");
  }
  
  function submit(e:any){
    e.preventDefault();
    if ( password === "") {
       alert("All the fields are mandatory!");
       return;
     }
   console.log('hyy')
   let data={email,password};
   let customer={email,password};
   let admin={email,password};
   
  console.log(data);

  if(signinAs==="User"){

   Axios.post("http://localhost:4555/app/user/login",data)
   .then(res=>{ 
     
    const{...data}= res.data;
    if(data.message!==""){

      if(data.message==="login successfull!"){
      setMessage(email + " "+data.message)
      console.log(message)
        localStorage.setItem("authToken",data.token);
    localStorage.setItem("screen","user");
    localStorage.setItem("userInfo",JSON.stringify(data.user));
       setToken(data.token)
       dispatch({type: Bms.USER,payload:"user"})
       
        console.log(token)
        setValid("success")
    }
    if(data.message!=="login successfull!"){
      setMessage(email + " "+data.message)
      console.log(message)
      }
  }
    
   })
   .catch(error=>{
       console.log(error)
   });
  }

  if(signinAs==="Customer"){
   
   Axios.post("http://localhost:4555/app/customer/login",customer)
   .then(res=>{ 
     
    const{...data}= res.data;
    if(data.message!==""){
  
        if(data.message==="login successfull!"){
        setMessage(email + " "+data.message)
        localStorage.setItem("authToken",data.token);
        localStorage.setItem("screen","customer");
        localStorage.setItem("customerInfo",JSON.stringify(data.customer));

       setToken(data.token)
       
  dispatch({type: Bms.USER,payload:"customer"})
        console.log(token)
        setValid("success")
    } 
     if(data.message!=="login successfull!"){
      setMessage(email + " "+data.message)
      console.log(message)
      }
  }
    
   })
   .catch(error=>{
       console.log(error)
   });
  }

  if(signinAs==="Admin"){

   Axios.post("http://localhost:4555/app/user/login",admin)
   .then(res=>{ 
     
    const{...data}= res.data;
  
        if(data.message==="login successfull!"){
        setMessage(email + " "+data.message)
        localStorage.setItem("authToken",data.token);
        localStorage.setItem("screen","admin");
    localStorage.setItem("adminInfo",JSON.stringify(data.user));
       setToken(data.token)
       dispatch({type: Bms.USER,payload:"admin"})
       
        console.log(token)
        setValid("success")
    } 
    else{
      setMessage(email + " "+data.message)
      console.log(message)
      }
    
   })
   .catch(error=>{
       console.log(error)
   });
  }
  }

  if(valid=="success"){
 return <Redirect to="/"/>
}else{
    return(
<>
{/* <div>      
    <button className="buttonlo" type="submit" onClick={handleUser}>User Login</button>
    <h4 style={{margin:"0 auto",textAlign:"center" }}>OR</h4>
    <button className="buttonlo" type="submit" onClick={handleCustomer}>Customer/Shop Login</button>
    <h4 style={{margin:"0 auto", textAlign:"center"}}>OR</h4>
    <button className="buttonlo" type="submit" onClick={handleAdmin}>Admin Login</button>
    </div> */}
{
(screen==="Modal")?
      <Modal show={show1} onHide={handleCloseUser}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <form  onSubmit={submit}>
  <div style={{marginLeft:"10.5rem"}}>
    <img src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg" alt="Avatar" className="avatar"/>
  </div>

  <div>
    <label><b>Email</b></label>
    <input className="inputpsw" type="text" placeholder="Enter Username" name="uname" required   value={email}  onChange={(e)=>setEmail(e.target.value)}/>

    <label><b>Password</b></label>
    <input className="inputpsw" type="password" placeholder="Enter Password" name="psw" required    value={password}  onChange={(e)=>setPassword(e.target.value)}/>
    <label htmlFor="Signin as"><b>Login as</b></label>
          <select id="SigninAs" name="SigninAs"
            value={signinAs}
            onChange={(e) => setSigninAs(e.target.value)}>
            <option value="User">User</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </select>
    <b style={{color:"red"}}>{
  (message!="")?
  message:null
}</b>
<br/>
<br/>
  <button className="btn btn-primary" style={{cursor: "pointer",width: "100%"}} type="submit">Login</button>
   </div>
</form>
        </Modal.Body>
      </Modal>
:
<>
<button className="btn btn-primary"  onClick={()=>{setScreen('Modal'),setShow1(true)}} style={{cursor: "pointer",width: "30%" , marginLeft:"30rem"}} type="submit">Go to Login again</button>
</>
}
</>
    );
}
}
export default Login;