
import './Searchgrid.css';
import {Link, useHistory} from 'react-router-dom';
import {useState,useEffect} from "react";

import { useContext } from 'react';
import {bmsContext} from "../reducers/bms-context";

import * as Bms from "../reducers/bms-reducer";
const jwt = require('jsonwebtoken');


function Searchgrid() {
  
let {searchedBook,dispatch}=useContext(bmsContext);
  
const token= localStorage.getItem("authToken")
const history = useHistory();

  // jwt.verify(token,'jh',function(err:any){
  //   if(err){
  //     console.log("token is expired")
  //      history.push("/login");
  //   }
  // })
const[minValue,setMinPrice]=useState(null)
const[maxValue,setMaxPrice]=useState(null)
const[optionValue,setOption]=useState("title")
const [bname,setData]=useState(null)
const [print,setPrint]=useState(false)
  
useEffect(()=>{
   getlist();
},[]);



async function getlist(){
 
switch(optionValue){

  case "title":

  console.log("title "+bname)
    
  fetch(`http://localhost:4555/app/getBook/title/${bname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
  dispatch({type: Bms.BOOKS_SEARCH_BY_TITLE,payload:data})
    })
    break;

    case "author":

      console.log("author "+bname)
    

    fetch(`http://localhost:4555/app/getBook/author/${bname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
  dispatch({type: Bms.BOOKS_SEARCH_BY_AUTHOR,payload:data})
    })
    break;

    case "priceRange":
      
  console.log("Pricerange "+minValue , maxValue)
    fetch(`http://localhost:4555/app/getBook/price/${minValue}/${maxValue}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
  dispatch({type: Bms.BOOKS_SEARCH_BY_PRICE,payload:data})
    })
    break;

    case "rating":

    
      console.log("rating "+bname)

    fetch(`http://localhost:4555/app/getBook/rating/${bname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
  dispatch({type: Bms.BOOKS_SEARCH_BY_RATING,payload:data})
    })
    break;

    case "votes":
      
      console.log("votes "+bname)

    fetch(`http://localhost:4555/app/getBook/votes/${bname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
  dispatch({type: Bms.BOOKS_SEARCH_BY_VOTES,payload:data})
    })
    break;
  }
  }
  

 function search(){
setPrint(true) 
 getlist();
 }

  function getData(val:any)
  {
    console.log(val.target.value)
    setData(val.target.value);
    console.log(val.target.value);
    setPrint(false);
  }
  function getMinPrice(val:any)
  {
    console.log(val.target.value)
    setMinPrice(val.target.value);
    console.log(val.target.value);
    setPrint(false);
  }
  function getMaxPrice(val:any)
  {
    console.log(val.target.value)
    setMaxPrice(val.target.value);
    console.log(val.target.value);
    setPrint(false);
  }


  function selectBook(book:any){
    console.log("selectBook",book);
    dispatch({type :Bms.BOOKS_DETAILS,payload :book});
    history.push("/bookDetails")
  }

  // if(token==null){
  //   return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
  //  }else{

  
    
  return (
      <>
      <div>
         <div className="selectBy">
    <label>Select Book by :</label>
    </div>


    <div className="selectValue">
    <select name="select" id="books" 
    value={optionValue} 
    onChange={(e)=>{
      const selected=e.target.value;
      setOption(selected);
    }}>
    <option value="title">Title</option>
    <option value="author">Author</option>
    <option value="priceRange">Price range</option>
    <option value="rating">Rating</option>
    <option value="votes">Votes</option>
    </select>
   </div>


      <div className="divinline">
    <div className="form">
      {
        (optionValue==="priceRange")?
        <>
        <input className="pricerange" type="Number" placeholder="MinPrice..."  onChange={getMinPrice}/>
        <input className="pricerange" type="Number" placeholder="MaxPrice..." onChange={getMaxPrice}/>
        </>
      
        :
        // <input onChange={getData}/>
        
<input type="text" style={{width:"250px",height:"40px",border:"1px solid black"}} onChange={getData}/>
        
        
   }
    <button onClick={search} id="searchBut">Search</button>
    </div>
    
</div>
</div>
<div>
    <div>
    {
    print?
          searchedBook.map((post:any)=>{ 
              return(
               
                <div className="gridsearch"> 
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
               
                </div>
              
              );
        })
        
       :null
}
    </div></div>
    </>
  );
}
// }

export default Searchgrid;