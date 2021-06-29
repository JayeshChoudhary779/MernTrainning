
import { useHistory } from 'react-router-dom';
import './Addbookstyle.css';
import  { useState , useContext} from 'react';
import * as Bms from "../reducers/bms-reducer";
import {bmsContext} from "../reducers/bms-context";

const jwt = require('jsonwebtoken');

function Addbook(){
  const token= localStorage.getItem("authToken") 

const history = useHistory();
// jwt.verify(token,'jh',function(err:any){
//   if(err){
//     console.log("token is expired")
//      history.push("/login");
//   }
// })


let store=useContext(bmsContext);

    const[_id,setId]=useState("");
    const[cover,setCover]=useState("");
    const[title,setTitle]=useState("");
    const[author,setAuthor]=useState("");
    const[price,setPrice]=useState("");
    const[rating,setRating]=useState("");
    const[votes,setVotes]=useState("");
    const[description,setDescription]=useState("");
  
    function submit(e:any){
     e.preventDefault();
     if (_id===""||cover === "" || title === ""||author === "" || price === ""||rating === "" || votes === ""|| description==="") {
        alert("All the fields are mandatory!");
        return;
      }
    console.log('hyy')
    let data={_id,cover,title,author,price,rating,votes,description};

    console.log(data);
    
    store.dispatch({type: Bms.BOOKS_ADD_BOOK,payload:data})
    
    history.push("/Booksgrid");
    
    }
    
    if(token==null){
      return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
     }else{
return(

  
<div className="bgimage">
    <div className="container">
       
  <h2 style ={{color: "#333"}}>Add new book details...</h2>
                   
         <form onSubmit={submit}>
             <br/>
             <input type="text"  placeholder=" Id.." name="id" value={_id} id="id" onChange={(e)=>setId(e.target.value)}/>
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
}</b>
<br/>
<br/>
                     <input type ="submit" value='ADD BOOK' id="addbutton" />

                   </form>
                 </div>
                 </div>
       );
}}
export default Addbook;

