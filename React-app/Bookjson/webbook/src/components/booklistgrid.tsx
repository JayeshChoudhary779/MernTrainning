
import './booklistgrid.css';
import Searchgrid from './Searchgrid';
import {BrowserRouter as Router, useHistory, Switch, Route, BrowserRouter,Link} from 'react-router-dom';


import {useState,useEffect} from "react";


 function Booklistgrid(){

  
  const history = useHistory();
  const[myBooks,setBooks]= useState([]);

  useEffect(()=>{
  getlist();
  },[]);

  function getlist(){
    fetch('http://localhost:3006/Books')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
      setBooks(data);
    });
  }

  function deleteBookgrid(id:any){
    
    fetch(`http://localhost:3006/Books/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>(
        console.log(resp)
      ))
      getlist();
      })
  }

    return(
        <div>
          <Searchgrid/>
          <br/>
          <br/>
          <div style={{display:"block", clear:"left"}}>
          <h2>Book List :</h2>
          </div>
          
          <div className="grid-container">
        {
          myBooks.map((post:any)=>{ 
              return(
                  
                    <div className="grid-item">
                    
                    <img style={{width:"200px", height:"200px"}} src={post.cover}></img>
                    <br/>
                    <Link to={`/details/${post.id}`}>{post.title}</Link>
                    <br/><b>Author : </b> 
                     {post.author}
                    <br/><b>Price : </b>
                     {post.price}
                    <br/><b>Rating : </b>
                     {post.rating}
                    <br/><b>Votes : </b>
                     {post.votes}
                     <br/><button onClick={()=>deleteBookgrid(post.id)} id="searchButton">Delete</button>
                    </div>    
                    
              );
              
        })}
        </div>
        </div>
        
    );
}

export default Booklistgrid;
