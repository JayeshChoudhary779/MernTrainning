
import { useHistory } from 'react-router-dom';
import './Adddirector.css';
import  { useState , useContext} from 'react';
import Axios from "axios";


function Adddirector(){
    

const token= localStorage.getItem("authToken")  
const[message,setMessage]=useState("");
const history = useHistory();

    
    const[dname,setDname]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[awardCount,setAwardCount]=useState("");
  
    function submit(e:any){
     e.preventDefault();
     if ( dname ==="" || age=== ""||gender === ""||awardCount === "") {
        alert("All the fields are mandatory!");
        return;
      }
    console.log('hyy')
    let data={dname,age,gender,awardCount};

    console.log(data);
     

    Axios.post("http://localhost:4555/app/director/addDirector",data)
    .then(res=>{
      const{...data1}= res.data;
     if(data1.message!==""){
       setMessage(data1.message)
       console.log(data1.message)
     }
     if(data1.message==="unique name"){
    history.push("/Directorsgrid");
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
       
  <h2 style ={{color: "white"}}>Add new Director details...</h2>
                   
         <form onSubmit={submit}>
             <br/>

                     <input type="text" id="dname" placeholder="Director name.." name="dname" value={dname} onChange={(e)=>setDname(e.target.value)}/>
                     <br/>
                     <input type="text" id="age" placeholder="Director age.." name="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                     <br/>
                     <input type="text" id="gender" placeholder=" Director gender.."name="gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
                     <br/>
                     <input type="text" id="awardCount" placeholder=" Director awardCount.."name="awardCount" value={awardCount} onChange={(e)=>setAwardCount(e.target.value)} />
                 
                     <b style={{color:"white"}}>{
  (message!="")?
  message:null
}</b>
<br/>
<br/>
                     <input type ="submit" value="ADD DIRECTOR" id="addbutton" />

                   </form>
                 </div>
                 </div>
       );
        
}}
export default Adddirector;

