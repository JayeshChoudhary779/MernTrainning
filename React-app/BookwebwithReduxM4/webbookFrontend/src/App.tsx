import React from 'react';
import Header from './components/Header';

import Mainscreen from './screen/Mainscreen';


import Details from "./components/Details";
import Booklistgrid from './components/booklistgrid';


import Author from './components/Author';
import Login from './components/Login';
import Logout from './components/Logout';
import {BrowserRouter as Router, Switch, Route, BrowserRouter,Link} from 'react-router-dom';
import Addbook from './components/Addbook';
import Register from './components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Axios from "axios";
import  { Component, useState } from 'react';
import {BmsProvider} from "./reducers/bms-context";

function App() {


const[token,setToken]=useState("");  
const[valid,setValid]=useState("succes");
const[message,setMessage]=useState("");


const authentication=()=>{

  Axios.post("http://localhost:4555/app/login")
   .then(res=>{ 
    const{...data}= res.data;
    if(data.message!==""){
      setMessage(+ " "+data.message)
      console.log(message)
      if(data.message==="login successfull!"){
        setToken(data.token)
        console.log(token)
        setValid("success")
    // history.push("/Booksgrid");
    }}
    
   })
   .catch(error=>{
       console.log(error)
   });
  }
  return (
    <>
    <BmsProvider>
    <BrowserRouter>
    <Router>
    <Header/>
    <Switch>
      
     {authentication}
     <Route exact path="/" component = {Mainscreen}/>
     
     <Route path="/logout" component ={Logout}/>
     <Route path="/login" component ={Login}/>
     <Route path="/register" component ={Register}/>
     <Route path="/Booksgrid" component ={Booklistgrid}/>
     {/* <><h1>You are not Logged in or authorised User, Please Register or Login first!</h1></> */}

     <Route path="/Add_Books" component ={Addbook}/>
     <Route path="/Author" component ={Author}/>
     {/* <Route path="/details/:id" children ={Details }/> */}
     <Route path="/bookDetails" component={Details}/>

    </Switch>
    </Router>
    </BrowserRouter>
    </BmsProvider>
    </>
    
  );
}

export default App;
