
import {useHistory} from 'react-router-dom';
import {useState,useEffect} from "react";
import './Author.css';
import { useContext } from 'react';
import {bmsContext} from "../reducers/bms-context";
const jwt = require('jsonwebtoken');

function Author(){
    const token= localStorage.getItem("authToken")
//     const history = useHistory();
// jwt.verify(token,'jh',function(err:any){
//   if(err){
//     console.log("token is expired")
//      history.push("/login");
//   }
// })


let store=useContext(bmsContext);
let Books=store.state.books;
const[myBooks,setBooks]= useState([]);

useEffect(()=>{
    getlist();
    },[]);
  
    function getlist(){
        setBooks(Books);  
      }

      const authorArray = new Array()
      myBooks.map((post:any)=>{ 
        authorArray.push(post.author)
        })

        console.log(authorArray)

        const uniqueAuthor = authorArray.filter((author, index) => {
            return authorArray.indexOf(author) === index;
        })
        console.log(uniqueAuthor)

    console.log(uniqueAuthor)
    if(token==null){
      return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
     }else{
          return(
              <>
              <h1>Author's Names :</h1>
              <div className="author">{
               uniqueAuthor.map((post:any)=>{ 
                return(
                    <> 
                       <h1 className="authorn">{post}</h1><br/>
                       </>
                );
                }
          ) }
          </div>
          </>
          );
        
}}

export default Author;