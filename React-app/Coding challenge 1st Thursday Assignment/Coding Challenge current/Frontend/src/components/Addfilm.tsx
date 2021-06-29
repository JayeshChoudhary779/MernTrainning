
import { useHistory } from 'react-router-dom';
import './Addfilmstyle.css';
import  { useState } from 'react';
import Axios from "axios";

function Addfilm(){
    
  
const token= localStorage.getItem("authToken")
const[message,setMessage]=useState("");
const history = useHistory();

    
    const[name,setName]=useState("");
    const[dname,setDname]=useState("");
    const[boxOfficeCollection,setBoxOfficeCollection]=useState("");
    const[rating,setRating]=useState("");
  
    function submit(e:any){
     e.preventDefault();
     if ( name ==="" || dname ==="" || boxOfficeCollection === ""||rating === "") {
        alert("All the fields are mandatory!");
        return;
      }
    console.log('hyy')
    let data={name,dname,boxOfficeCollection,rating};

    console.log(data);
     

    Axios.post("http://localhost:4555/app/film/addFilm",data)
    .then(res=>{
      const{...data1}= res.data;
     if(data1.message!==""){
       setMessage(data1.message)
       console.log(data1.message)
     }
     if(data1.message==="unique name"){
    history.push("/Filmsgrid");
     }
    })
    .catch(error=>{
        console.log(error)
    });
    
    }
    if(token==null){
      return <> <h1>Please First Go to Home, Thank You!</h1> </>;;
     }else{
return(
  
<div className="bgimage">
    <div className="container">
       
  <h2 style ={{color: "white"}}>Add new Film details...</h2>
                   
         <form onSubmit={submit}>
             <br/>
                     <input type="text" id="name" placeholder="Film name.." name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                     <br/>
                     <input type="text" id="dname" placeholder="Director name.." name="dname" value={dname} onChange={(e)=>setDname(e.target.value)}/>
                     <br/>
                     <input type="text" id="boxOfficeCollection" placeholder="Film Box Office Collection.." name="boxOfficeCollection" value={boxOfficeCollection} onChange={(e)=>setBoxOfficeCollection(e.target.value)}/>
                     <br/>
                     <input type="text" id="rating" placeholder=" Film Rating.."name="rating" value={rating} onChange={(e)=>setRating(e.target.value)} />
                     
                     <b style={{color:"white"}}>{
  (message!="")?
  message:null
}</b>
<br/>
<br/>
                     <input type ="submit" value='ADD FILM' id="addbutton" />

                   </form>
                 </div>
                 </div>
               
       );
    
}}
export default Addfilm;

