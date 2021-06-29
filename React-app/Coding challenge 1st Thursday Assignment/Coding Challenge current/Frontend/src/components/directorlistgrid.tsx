
import './filmlistgrid.css';
import {BrowserRouter as Router, useHistory, Switch, Route,Link} from 'react-router-dom';
import {useState,useEffect} from "react";
import Axios from "axios";


 function Directorlistgrid(){
   
  
 const token= localStorage.getItem("authToken")
const history = useHistory();
  const[myDirectors,setDirectors]= useState([]);
  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const[awardCount,setAwardCount]=useState("");
  const[show,setShow]= useState("list");

  useEffect(()=>{
  getlist();
  },[]);

  // function selectDirector(director:any){
  //   history.push("/directorDetails")
  // }
 
  
  function getlist(){
    fetch('http://localhost:4555/app/director/getDirector',{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setDirectors(data);  
    });
  }

  function updateDirectorgrid(dname:any){
    console.log(dname)
    setName(dname);
    setShow("update");
  }

  function submit(e:any){
    e.preventDefault();
    
    if (age=== ""||awardCount === "") {
       alert("All the fields are mandatory!");
       return;
     }
   let data={age,awardCount};
   
   Axios.patch(`http://localhost:4555/app/director/updateDirector/${name}`,data)
  .then((result)=>{
    alert("Details are being updating, Please Click Ok")
    getlist();
  })
  .catch((error)=>{
      console.log(error)
  })
  setShow("list")
  }


  function deleteDirectorgrid(dname:any){
    console.log(dname)
    fetch(`http://localhost:4555/app/director/deleteDirector/${dname}`,{
      method:'DELETE'
    }).then((result)=>{
      getlist();
      result.json().then((resp)=>(
        console.log(resp)
      ))
      })
  }

  if(token==null){
    return <> <h1>Please First Go to Home, Thank You!</h1> </>;;
   }else{
    return(
      
  (show==="list")?
      
          <div className="bgimageh">
          
          <br/>
          <br/>
          <div style={{display:"block", clear:"left" ,color:"black"}}>
          <h2>Director List :</h2>
          </div>
          
          
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
                     <br/><button onClick={()=>{updateDirectorgrid(post.dname)}} id="searchBut1" >Update</button> 
                     <button onClick={()=>{deleteDirectorgrid(post.dname)}} id="searchBut"> Delete </button>              
                    </div>    
              );
              
        }
       
        ) }
        </div>
        </div>
      
    :
    <div className="bgimage">
    <div className="container">
       
  <h2 style ={{color: "white"}}>Update Age and Award count...</h2>
                   
         <form onSubmit={submit}>
             <br/>

                     <input type="text" id="age" placeholder="Director age.." name="age" value={age} onChange={(e)=>setAge(e.target.value)} />
                     <br/>
                     <input type="text" id="ac" placeholder="Director awardCount.." name="awardCount" value={awardCount} onChange={(e)=>setAwardCount(e.target.value)} />
                     <br/>
                     <input type ="submit" value="Update director's details" id="addbutton" />
                     </form>
                 </div>
                 </div>
    )
}
} 
export default Directorlistgrid;
