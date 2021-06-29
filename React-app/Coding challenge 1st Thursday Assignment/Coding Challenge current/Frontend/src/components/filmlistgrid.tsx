
import './filmlistgrid.css';
import { useHistory,Link} from 'react-router-dom';
import {useState,useEffect} from "react";
import Axios from "axios";

 function Filmlistgrid(){
   
 const token= localStorage.getItem("authToken")
  const history = useHistory();
  const[myFilms,setFilms]= useState([]);
  const[dwork,setWork]= useState([]);
  const[searchFilm,setFilmToDelete]= useState("");
  const[searchDname,setDirector]=useState("");
  const[show,setShow]= useState("list");

  useEffect(()=>{
  getlist();
  },[]);
 
  
  function getlist(){
    fetch('http://localhost:4555/app/film/getFilm',{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setFilms(data);  
    });
  }

  function deleteFilmgrid(name:any){
    console.log(name);
    
    (searchFilm!=="")?
    fetch(`http://localhost:4555/app/film/deleteFilm/${searchFilm}`,{
      method:'DELETE'
    }).then((result)=>{
      getlist();
      result.json().then((resp)=>(
        (resp.n===1)?
        alert("deleted successfully"):alert("film not found")
      ))
      })
     
       :
      fetch(`http://localhost:4555/app/film/deleteFilm/${name}`,{
      method:'DELETE'
    }).then((result)=>{
      getlist();
      result.json().then((resp)=>(
        console.log(resp)
      ))
      })
  }

  function searchDirector(){
    fetch(`http://localhost:4555/app/film/searchDirector/${searchDname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
      setWork(data);
    })
    setShow("searchContent")
    }
  
  
    if(token==null){
      return <> <h1>Please First Go to Home, Thank You!</h1> </>;;
     }else{
    return(
       
      (show==="list")?
      
          <div className="bgimageh">
            
  <div className="input-group" style={{width:"65%", margin :"auto"}}>
  <input type="search" className="form-control rounded" value={searchDname} onChange={(e)=>setDirector(e.target.value)} placeholder="Search Director's name and his work" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary" onClick={searchDirector} style={{backgroundColor:"#333",color:"white", marginRight:"15px"}}>search</button>
  
  <input type="search" className="form-control rounded" value={searchFilm} onChange={(e)=>setFilmToDelete(e.target.value)} placeholder="Search Film's name and delete" aria-label="Search"
    aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary" onClick={deleteFilmgrid} style={{backgroundColor:"#333",color:"white"}}>Delete</button>
</div>

          
          <br/>
          <br/>
          <div style={{display:"block", clear:"left" ,color:"black"}}>
          <h2>Film List :</h2>
          </div>
          
          
          <div className="grid-container">
        {
          myFilms.map((post:any)=>{ 
              return(
                 
                    <div className="grid-item">
                    <b>Film name : </b> 
                    {post.name}
                    <br/><b>Director name : </b> 
                     {post.dname}
                    <br/><b>Box-Office Collection : </b> 
                     {post.boxOfficeCollection}
                    <br/><b>Rating : </b>
                     {post.rating}
                     <br/><button onClick={()=>{deleteFilmgrid(post.name)}} id="searchBut">Delete</button>              
                    </div>    
              );
              
        }
       
        ) }
        </div>
        </div>
      :  

      (dwork.length!==0)?
      <div style={{backgroundColor:"silver"}}>
      <h2>All Work of Searched Director....</h2>
      <div className="grid-container">
      {
        dwork.map((post:any)=>{ 
            return(
               
                  <div className="grid-item">
                  <b>Film name : </b> 
                  {post.name}
                  <br/><b>Director name : </b> 
                   {post.dname}
                  <br/><b>Box-Office Collection : </b> 
                   {post.boxOfficeCollection}
                  <br/><b>Rating : </b>
                   {post.rating}            
                  </div>    
            );
            
      }
     
      ) }
      </div>
      <br/><button onClick={()=>{setShow("list")}} id="searchBut1" >Go Back to Film List</button> </div>
      :<><h1>No Director Found.....</h1>
      <br/><button onClick={()=>{setShow("list")}} id="searchBut1">Go Back to Film List</button> </>
    );
    
  }      
}

export default Filmlistgrid;
