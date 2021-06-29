
import './booklistgrid.css';
import Searchgrid from './Searchgrid';
import {BrowserRouter as Router, useHistory, Switch, Route,Link} from 'react-router-dom';
import Details from './Details';
import {useState,useEffect} from "react";
const jwt = require('jsonwebtoken');


 function Booklistgrid(){
   
// const history = useHistory();
  
 const token=localStorage.getItem("authToken")
 const history = useHistory();
jwt.verify(token,'jh',function(err:any){
  if(err){
    console.log("token is expired")
     history.push("/login");
  }
})

  
  const[myBooks,setBooks]= useState([]);
  const[screen,setScreen]= useState("grid");
  const[bid,setId]= useState("");

  useEffect(()=>{
  getlist();
  },[]);

  function getId(id:any){
    setId(id);
    setScreen("description");
  }
 
  
  // function getlist(){
  //   useEffect(()=>{
  //   axios.get('http://localhost:4555/app/getBook')
  //   .then(res=>{setBooks(res.data)
  //   })
  //   .catch(error=>{
  //     console.log(error);
  //   });
  // },[]);
  
  // const getlist=async()=>{
  //   let data= await fetch('http://localhost:4555/app/getBook',{
  //     method:"GET",
  //     headers:{"Content-Type":"application/json","Authorization":token}
  //   })
  //   let mydata= await data.json(); 
  //   console.log(mydata)
  //   setBooks(mydata);
  // }

  
  function getlist(){
    fetch('http://localhost:4555/app/getBook',{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setBooks(data);  
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
  }


  if(token==null){
     return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
    }else{
      
    return(
      
      
      // (screen==="grid")?
      <Router>
        {
          
        (screen==="grid")?
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
                    
                    <Link to="/bookDetails" onClick={()=>{getId(post.id)}}>{post.title}</Link>
                  
                    {/* <Link to={`/details/${post.id}`}>{post.title}</Link> */}
                    <br/><b>Author : </b> 
                     {post.author}
                    <br/><b>Price : </b>
                     {post.price}
                    <br/><b>Rating : </b>
                     {post.rating}
                    <br/><b>Votes : </b>
                     {post.votes}
                     <br/><button onClick={()=>{deleteBookgrid(post.id); setScreen("grid")}} id="searchButton">Delete</button>              
                    </div>    
              );
              
        }
       
        ) }
        </div>
        </div>
        
          :
        <Switch>
                      <Route path="/bookDetails" exact children={
                       (screen==="description")?
                      <Details id={bid}/>
                     :<h1>Null</h1>
                    }/>
              </Switch>
              

    }
       </Router> 
    );
}
 }
export default Booklistgrid;
