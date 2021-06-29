
import { useHistory } from 'react-router-dom';
import './Addbookstyle.css';
import  { useState , useContext} from 'react';
import Axios from "axios";
import * as Bms from "../reducers/bms-reducer";
import {bmsContext} from "../reducers/bms-context";

const jwt = require('jsonwebtoken');

function Addbook(){
  const token= localStorage.getItem("authToken") 
    
const[message,setMessage]=useState("");
const history = useHistory();
// jwt.verify(token,'jh',function(err:any){
//   if(err){
//     console.log("token is expired")
//      history.push("/login");
//   }
// })


let {dispatch}=useContext(bmsContext);

    const[id,setId]=useState("");
    const[cover,setCover]=useState("");
    const[title,setTitle]=useState("");
    const[author,setAuthor]=useState("");
    const[price,setPrice]=useState("");
    const[rating,setRating]=useState("");
    const[votes,setVotes]=useState("");
    const[description,setDescription]=useState("");
  
    function submit(e:any){
     e.preventDefault();
     if (id===""||cover === "" || title === ""||author === "" || price === ""||rating === "" || votes === ""|| description==="") {
        alert("All the fields are mandatory!");
        return;
      }
    console.log('hyy')
    let data={id,cover,title,author,price,rating,votes,description};

    console.log(data);
     

    Axios.post("http://localhost:4555/app/addBook",data)
    .then(res=>{
      const{...data1}= res.data;
     if(data1.message!==""){
       setMessage(data1.message)
       console.log(data1.message)
     }
     if(data1.message==="unique Id"){
       
    
    dispatch({type: Bms.BOOKS_ADD_BOOK,payload:data})
    history.push("/Booksgrid");
     }
    })
    .catch(error=>{
        console.log(error)
    });

    
    }
    
    if(token==null){
      return <> <h1>Please Do First Login or Register As you are in View Mode, Thank You!</h1> </>;
     }else{
return(

  
<div className="bgimage">
    <div className="container">
       
  <h2 style ={{color: "#333"}}>Add new book details...</h2>
                   
         <form onSubmit={submit}>
             <br/>
             <input type="text"  placeholder=" Id.." name="id" value={id} id="id" onChange={(e)=>setId(e.target.value)}/>
           <br/>
       <input type="text"  placeholder="Book cover Id.." name="cover" value={cover} id="cover" onChange={(e)=>setCover(e.target.value)}/>
           <br/>
                     <input type="text" id="title" placeholder="Book name.." name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                     <br/>
                     <input type="text" id="author" placeholder="Author name.."name="author"value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                     <br/>
                     <input type="text" id="price" placeholder="Price.."name="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                     <br/>
                     <input type="text" id="rating" placeholder="Rating.."name="rating" value={rating} onChange={(e)=>setRating(e.target.value)} />
                     <br/>
                     <input type="text" id="votes" placeholder="Votes.."name="votes"value={votes} onChange={(e)=>setVotes(e.target.value)}/>
                     <br />
                     <input type="text" id="desc" placeholder="Description.."name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                     
                     <b style={{color:"black"}}>{
  (message!="")?
  message:null
}</b>
<br/>
<br/>
                     <input type ="submit" value='ADD BOOK' id="addbutton" />

                   </form>
                 </div>
                 </div>
       );
        
// }
}}
export default Addbook;

