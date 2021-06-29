
import {useHistory} from 'react-router-dom';
import {useState,useEffect} from "react";
import './Author.css';
const jwt = require('jsonwebtoken');

function Author(){
    const token= localStorage.getItem("authToken")
    const history = useHistory();
jwt.verify(token,'jh',function(err:any){
  if(err){
    console.log("token is expired")
     history.push("/login");
  }
})


const[myBooks,setBooks]= useState([]);
useEffect(()=>{
    getlist();
    },[]);
  
    function getlist(){
        fetch('http://localhost:4555/app/getBook')
        .then(res=>{
          return res.json();
        })
        .then(data=>{
          setBooks(data);  
        });
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

    //   const uniqueAuthor = myBooks.filter((post, index) => {
    //     return myBooks.indexOf(post) === index;
    // })
    console.log(uniqueAuthor)
      
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
        
}

export default Author;