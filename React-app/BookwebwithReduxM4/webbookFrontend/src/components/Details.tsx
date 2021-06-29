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
  

const deleteBookgrid=(_id:any)=>{
  store.dispatch({type: Bms.BOOKS_DELETE_BOOK,payload:_id})
  history.push('/Booksgrid')
}


let store=useContext(bmsContext);

let selectedBook=store.state.selectedBook;
console.log(selectedBook)

if(token==null){
  return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
 }else{
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
    <button onClick={()=>deleteBookgrid(selectedBook._id)} className="deleteButton">Delete Book</button>
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
}

export default Details;