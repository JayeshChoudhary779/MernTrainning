import './Detailsstyle.css';
import {useContext} from "react";
import {useHistory,Link} from 'react-router-dom';
import * as Bms from "../reducers/bms-reducer";

import {bmsContext} from "../reducers/bms-context";
const jwt = require('jsonwebtoken');


function Details(){

  const token= localStorage.getItem("authToken")
  const history = useHistory();
// jwt.verify(token,'jh',function(err:any){
//   if(err){
//     console.log("token is expired")
//      history.push("/login");
//   }
// })
  

  function deleteBookgrid(id:any){
    console.log(id)
    fetch(`http://localhost:4555/app/deleteBook/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>(
        console.log(resp)
      ))
      })
      
  dispatch({type: Bms.BOOKS_DELETE_BOOK,payload:id})
      history.push("/Booksgrid");
  }
  

let {selectedBook,dispatch}=useContext(bmsContext);

console.log(selectedBook)

// if(token==null){
//   return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
//  }else{
    return(
        <>
        <h1 style={{marginLeft:"8px"}}>About {selectedBook.title} </h1>
        <p style={{marginLeft:"8px"}}> By {selectedBook.author} | Rs.{selectedBook.price} | {selectedBook.rating} Rating</p>
        
<div className="float-container">

  <div className="float-child">
  <div className="section">
    <img src={selectedBook.cover} style={{width:"550px", height:"600px"}}/>
    <br/>
    <br/>
    { (token!==null)?
    <button onClick={()=>deleteBookgrid(selectedBook.id)} className="deleteButton">Delete Book</button>
    :null }   
<Link to={`/Booksgrid`}><button className="deleteButton">Goto Booklist</button></Link>
    </div>

  </div>
  
  <div className="float-child">
  <div className="section">
    <h1>"Description" :</h1>
    <p> {selectedBook.description}</p>
   </div>
  </div>

</div>
        </>
    )

}
// }

export default Details;