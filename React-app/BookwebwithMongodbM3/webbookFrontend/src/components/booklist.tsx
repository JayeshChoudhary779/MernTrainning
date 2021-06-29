
import './booklist.css';
import Search from './Search';

import {BrowserRouter as Router, useHistory, Switch, Route,Link} from 'react-router-dom';
import {useState,useEffect} from "react";
import Axios from "axios";

const jwt = require('jsonwebtoken');

 function Booklist(){

 const token= localStorage.getItem("authToken")
 const history = useHistory();
jwt.verify(token,'jh',function(err:any){
  if(err){
    console.log("token is expired")
     history.push("/login");
  }
})
  const[myBooks,setBooks]= useState([]);

  useEffect(()=>{
  getlist();
  },[]);

  // function getlist(){
  //   Axios.get('http://localhost:4555/app/getBook')
  //   .then(res=>{
  //     const data=res.data;
  //     console.log("Data receievd");
  //     setBooks(data);
  //   })
  //   .catch(error=>{
  //     console.log(error);
  //   });
  // }

  //   fetch(`http://localhost:3006/Books/${id}`,{
  //     method:'DELETE'
  //   }).then((result)=>{
  //     result.json().then((resp)=>(
  //       console.log(resp)
  //     ))
  //     getlist();
  //     })
  //     history.push("/Booksgrid");
  // }


  function getlist(){
    Axios.get('http://localhost:4555/app/getBook')
    .then(res=>{
          const data=res.data;
          console.log("Data receievd");
          setBooks(data);
        })
      }

      
  function deleteBook(id:any){
    
    fetch(`http://localhost:4555/app/deleteBook/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      getlist();
      result.json().then((resp)=>(
        console.log(resp)
      ))
      })
  }


  if(token==null){
    return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;;
   }else{
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
          }       }

export default Booklist;

