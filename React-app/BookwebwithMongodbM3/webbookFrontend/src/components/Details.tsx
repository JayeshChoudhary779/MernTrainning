import './Detailsstyle.css';
import {useState,useEffect} from "react";
import {useHistory,Link} from 'react-router-dom';

const jwt = require('jsonwebtoken');
function Details(id :any){

  const token= localStorage.getItem("authToken")
  const history = useHistory();
jwt.verify(token,'jh',function(err:any){
  if(err){
    console.log("token is expired")
     history.push("/login");
  }
})
  
  function deleteBookgrid(id:any){
    console.log(id)
    fetch(`http://localhost:4555/app/deleteBook/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>(
        console.log(resp)
      ))
      })
      history.push("/Booksgrid");
  }
  
  console.log(id.id);
  const bid =id.id;
const[myBooks,setBooks]= useState([]);

  fetch(`http://localhost:4555/app/getBook/${bid}`)
  .then(res=>{
    return res.json();
  })
  .then(data=>{
    console.log(data);
    setBooks(data);
  })
console.log(myBooks)
return<>{
myBooks.map((post:any)=>{
    return(
        <>
        <h1 style={{marginLeft:"8px"}}>About {post.title} </h1>
        <p style={{marginLeft:"8px"}}> By {post.author} | Rs.{post.price} | {post.rating} Rating</p>
        
<div className="float-container">

  <div className="float-child">
  <div className="section">
    <img src={post.cover} style={{width:"550px", height:"600px"}}/>
    <br/>
    <br/>
    <Link to={`/Booksgrid`}><button onClick={()=>deleteBookgrid(post.id)} className="deleteButton">Delete Book</button></Link>
    
   
<Link to={`/Booksgrid`}><button className="deleteButton">Goto Booklist</button></Link>
    </div>

  </div>
  
  <div className="float-child">
  <div className="section">
    <h1>"Description" :</h1>
    <p> {post.description}</p>
   </div>
  </div>

</div>
        </>
    )
})
}</>
}


export default Details;