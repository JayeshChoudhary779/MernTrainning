import React from 'react';
import {Link} from 'react-router-dom';

function List(){
    return(
<div className="topnav2">
<ul>
<Link to={`/Booksgrid`}><li><a href="#Books">Books</a></li></Link>
<Link to={`/Add_Books`}><li><a href="#Add Book">Add Book</a></li></Link>
<Link to={`/Author`}><li><a href="#Author">Author</a></li></Link>
<Link to={`/`}><li><a href="#add Author">Home</a></li></Link>
<Link to={`/register`}><li style={{float:"right"}}><a href="#Register">Register</a></li></Link>
<Link to={`/login`}><li style={{float:"right"}}><a href="#Login">Login</a></li></Link>
</ul>
</div>
    )}

    export default List;