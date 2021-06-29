
import './booklistgrid.css';
import Searchgrid from './Searchgrid';
import {useHistory,Link} from 'react-router-dom';
import { useContext } from 'react';
import {bmsContext} from "../reducers/bms-context";
import * as Bms from "../reducers/bms-reducer";
const jwt = require('jsonwebtoken');

 function Booklistgrid(){
   


const history = useHistory();
  
 const token= localStorage.getItem("authToken")
//  const history = useHistory();
// jwt.verify(token,'jh',function(err:any){
//   if(err){
//     console.log("token is expired")
//      history.push("/login");
//   }
// })


let store=useContext(bmsContext);
let Books=store.state.books;

  function selectBook(book:any){
    console.log("selectBook",book);
    store.dispatch({type :Bms.BOOKS_DETAILS,payload :book});
    history.push("/bookDetails")
  }

  
  const deleteBookgrid=(_id:any)=>{
    store.dispatch({type: Bms.BOOKS_DELETE_BOOK,payload:_id})
  }

  if(token==null){
     return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
    }else{
      
    return(
      
          <div>
          <Searchgrid/>
          
          <br/>
          <br/>
          <div style={{display:"block", clear:"left"}}>
          <h2>Book List :</h2>
          </div>
          
          
          <div className="grid-container">
        {
          Books.map((post:any)=>{ 
              return(
                 
                    <div className="grid-item">
                    
                    <img style={{width:"200px", height:"200px"}} src={post.cover}></img>
                    <br/>
                    
                    <Link to="/bookDetails" onClick={()=>{selectBook(post)}}>{post.title}</Link>
                  
                    <br/><b>Author : </b> 
                     {post.author}
                    <br/><b>Price : </b>
                     {post.price}
                    <br/><b>Rating : </b>
                     {post.rating}
                    <br/><b>Votes : </b>
                     {post.votes}
                     <br/><button onClick={()=>{deleteBookgrid(post._id)}} id="searchButton">Delete</button>              
                    </div>    
              );
              
        }
       
        ) }
        </div>
        </div>
      
    );
}
 }
export default Booklistgrid;
