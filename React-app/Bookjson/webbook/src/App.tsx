import React from 'react';
import Header from './components/Header';
import Booklist from './components/booklist';

import Mainscreen from './screen/Mainscreen';



import Booklistgrid from './components/booklistgrid';
import Search from './components/Search';

import Details from './components/Details';
import Details2 from './components/Details2';
import Details3 from './components/Details3';
import Details4 from './components/Details4';

import Author from './components/Author';
import AddAuthor from './components/AddAuthor';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route, BrowserRouter,Link} from 'react-router-dom';
import Addbook from './components/Addbook';
import Register from './components/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <BrowserRouter>
    <Router>
    <Header/>
    <Switch>
      
     <Route exact path="/" component = {Mainscreen}/>
     <Route path="/Booksgrid" component ={Booklistgrid}/>
     
     <Route path="/Books" component ={Booklist}/>
     <Route path="/Add_Books" component ={Addbook}/>
     <Route path="/Author" component ={Author}/>
     <Route path="/Add_Author" component ={AddAuthor}/>
     <Route path="/details/1" component ={Details}/>
     <Route path="/details/2" component ={Details2}/>
     <Route path="/details/3" component ={Details3}/>
     
     <Route path="/details/4" component ={Details4}/>
     
     <Route path="/Search" component ={Search}/>

{/* 
     <Route path="/Form" component ={Form}/> */}
     <Route path="/login" component ={Login}/>
     <Route path="/register" component ={Register}/>
    </Switch>
    </Router>
    </BrowserRouter>
    </>
    
  );
}

export default App;
