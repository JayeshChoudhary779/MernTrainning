
import './booklistgrid.css';
import Searchgrid from './Searchgrid';
import {useHistory, Link} from 'react-router-dom';
import {useEffect, useContext} from "react";
import {bmsContext} from "../reducers/bms-context";

import * as Bms from "../reducers/bms-reducer";

const jwt = require('jsonwebtoken');

 function Booklistgrid(){
   
  
 const token= localStorage.getItem("authToken")
 const history = useHistory();
// jwt.verify(token,'jh',function(err:any){
//   if(err){
//     console.log("token is expired")
//      history.push("/login");
//   }
// })


let {toggle,books,dispatch}=useContext(bmsContext);
console.log(toggle)
  useEffect(()=>{
  getlist();
  },[]);

  function selectBook(book:any){
    console.log("selectBook",book);
    dispatch({type :Bms.BOOKS_DETAILS,payload :book});
    history.push("/bookDetails")
  }
 
  
  
function getlist(){
  fetch('http://localhost:4555/app/getBook',{
    method:"GET",
    headers:{"Content-Type":"application/json"}
  })
  .then(res=>{
    return res.json();
  })
  .then(data=>{
    dispatch({type: Bms.BOOKS_GET_ALL,payload:data}) 
  });
}
  

  function deleteBookgrid(id:any){
    console.log(id)
    fetch(`http://localhost:4555/app/deleteBook/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      getlist();
      result.json().then((resp)=>(
        console.log(resp)
      ))
      })
      
    dispatch({type: Bms.BOOKS_DELETE_BOOK,payload:id})
  }

  

  // if(token==null){
  //    return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
  //   }else{
      
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
          books.map((post:any)=>{ 
              return(
                 
                    <div className="grid-item">
                    
                    <img style={{width:"200px", height:"200px"}} src={post.cover}></img>
                    <br/>
                    
                    <Link to="/bookDetails" onClick={()=>{selectBook(post)}}>{post.title}</Link>
                  
                    {/* <Link to={`/details/${post.id}`}>{post.title}</Link> */}
                    <br/><b>Author : </b> 
                     {post.author}
                    <br/><b>Price : </b>
                     {post.price}
                    <br/><b>Rating : </b>
                     {post.rating}
                    <br/><b>Votes : </b>
                     {post.votes}
                     <br/>
                     { (token!==null)?
                     <button onClick={()=>{deleteBookgrid(post.id)}} id="searchButton">Delete</button>   
                      :null }      
                    </div>    
              );
              
        }
       
        ) }
        </div>
        </div>
      
    );
}
//  }
export default Booklistgrid;
