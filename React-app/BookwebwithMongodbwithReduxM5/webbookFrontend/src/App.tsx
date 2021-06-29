import React from 'react';
import Header from './components/Header';

import Mainscreen from './screen/Mainscreen';


import Details from "./components/Details";
import Booklistgrid from './components/booklistgrid';
import{Carousel} from "react-bootstrap";

import Author from './components/Author';
import Login from './components/Login';
import Logout from './components/Logout';
import {BrowserRouter as Router, Switch, Route, BrowserRouter,Link} from 'react-router-dom';
import Addbook from './components/Addbook';
import Register from './components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BmsProvider} from "./reducers/bms-context";

function App() {
  return (
    <>
    <BmsProvider>
    <BrowserRouter>
    <Router>
    <Header/>
    <Switch>
      
     <Route exact path="/" component = {Mainscreen}/>
     <Route path="/logout" component ={Logout}/>
     <Route path="/login" component ={Login}/>
     <Route path="/register" component ={Register}/>
     <Route path="/Booksgrid" component ={Booklistgrid}/>
     <Route path="/Add_Books" component ={Addbook}/>
     <Route path="/Author" component ={Author}/>
     <Route path="/bookDetails" component={Details}/>

    </Switch>
    </Router>
    </BrowserRouter>
    </BmsProvider>
    </>
    
  );
}

export default App;
