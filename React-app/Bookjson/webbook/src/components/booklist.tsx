
import './booklist.css';
import Search from './Search';

import {BrowserRouter as Router, useHistory, Switch, Route, BrowserRouter,Link} from 'react-router-dom';

import {useState,useEffect} from "react";


 function Booklist(){

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

  function deleteBook(id:any){
    
    fetch(`http://localhost:3006/Books/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>(
        console.log(resp)
      ))
      getlist();
      })
      history.push("/Booksgrid");
  }

    return(
        <div>
          <Search/>
          <br/>
          <br/>
           <div style={{display:"block", clear:"left"}}>
          <h2>Book List :</h2>
          </div>
     
              <table  className="book-table" id="table">
              <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Votes</th>
                  <th>Action</th>
              </tr>
          
        {
          myBooks.map((post:any)=>( 
              
                  <tr>
                    <td><img src={post.cover} style ={{width:'150px', height:'150px'}}></img></td>
                    <td><Link to={`/details/${post.id}`}>{post.title}</Link></td>
                    <td>{post.author}</td>
                    <td>{post.price}</td>
                    <td>{post.rating}</td>
                    <td>{post.votes}</td>
                    <td><button onClick={()=>deleteBook(post.id)} id="searchButton">Delete</button></td>
                  </tr>
              
          ))}
        </table>
        </div>
        
    );
          }       

export default Booklist;

