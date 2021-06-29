
import {useHistory} from 'react-router-dom';
import {useState,useEffect} from "react";
import './Film.css';

function DirectorsDetails(){

    
 const token= localStorage.getItem("authToken")
    const history = useHistory();
    const[myDirectors,setDirector]= useState([]);
    const[show,setShow]= useState("film");
    const[myFilms,setFilms]= useState([]);

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


    function director(directorName:any){

            console.log(directorName);
            fetch(`http://localhost:4555/app/director/getDirector/${directorName}`,{
              method:"GET",
              headers:{"Content-Type":"application/json"}
            })
            .then(res=>{
              return res.json();
            })
            .then(data=>{
              console.log(data);  
              setDirector(data);
            });
       
            setShow("details")
    }

{if(token==null){
    return <> <h1>Please First Go to Home, Thank You!</h1> </>;;
   }else{
          return(
              (show!=="details")?
              
              <div className="film">
                  
              <h1>Click on the Film's Name for director Details!</h1>{
               myFilms.map((post:any)=>{ 
                return(
                    <> 
                       <h2 className="filmn" onClick={()=>{director(post.dname)}}>{post.name}</h2><br/>
                       </>
                );
                }
          ) }
          </div>
            
          :
          <div style={{backgroundColor:"silver"}}>
          <h1>Directors Details for choosen film are :</h1>

          <div className="grid-container">
          {
            myDirectors.map((post:any)=>{ 
                return(
                   
                      <div className="grid-item">
                      <b>Director Name : </b> 
                      {post.dname}
  
                      <br/><b>Director Age : </b> 
                       {post.age}
                      <br/><b>Gender : </b> 
                       {post.gender}
                      <br/><b>Award Count : </b>
                       {post.awardCount}             
                      </div>    
                );
                
          }
         
          ) }
          </div>
      <br/><button onClick={()=>{setShow("list")}} id="searchBut1" >Go Back to Film List</button> 
          </div>
);
}
}
}
export default DirectorsDetails;