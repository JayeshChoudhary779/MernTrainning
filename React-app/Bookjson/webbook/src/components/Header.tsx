import React from 'react';
import './header.css';
import List from "./Listoflink";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Header(){ 
       return (
<div className="navigation">
<div className="topnav1">
<h1 style ={{color: "white"}}>Book's Web </h1>
</div>
<List/>

</div>
    );
}

export default Header;