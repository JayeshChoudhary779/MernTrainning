
import './Searchgrid.css';
import {Link, useHistory} from 'react-router-dom';
import {useState,useEffect} from "react";
const jwt = require('jsonwebtoken');


function Searchgrid() {
  
const token= localStorage.getItem("authToken")
const history = useHistory();
  jwt.verify(token,'jh',function(err:any){
    if(err){
      console.log("token is expired")
       history.push("/login");
    }
  })
const[minValue,setMinPrice]=useState(null)
const[maxValue,setMaxPrice]=useState(null)
const[optionValue,setOption]=useState("title")
const[myBooks,setBooks]= useState([]);
const [bname,setData]=useState(null)
const [print,setPrint]=useState(false)
  
 useEffect(()=>{
  getlist();
},[]);


function getlist(){
 
switch(optionValue){

  case "title":
  fetch(`http://localhost:4555/app/getBook/title/${bname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
      setBooks(data);
    })
    break;

    case "author":
    fetch(`http://localhost:4555/app/getBook/author/${bname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
      setBooks(data);
    })
    break;

    case "priceRange":
      
    fetch(`http://localhost:4555/app/getBook/price/${minValue}/${maxValue}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
      setBooks(data);
    })
    break;

    case "rating":
    fetch(`http://localhost:4555/app/getBook/rating/${bname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
      setBooks(data);
    })
    break;

    case "votes":
    fetch(`http://localhost:4555/app/getBook/votes/${bname}`)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
      setBooks(data);
    })
    break;
  }

  }

  

// fetch('http://localhost:3006/Books')
// .then(res=>{
//   return res.json();
// })
// .then(data=>{
//   console.log(data);
//   setBooks(data);
// });
// }

 function search(){
setPrint(true) 
 getlist();
 setBooks([])
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
  if(token==null){
    return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
   }else{
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
        // <input type="Number">max</input>
      
        :
        <input  onChange={getData}/>
   }
    <button onClick={search} id="searchBut">Search</button>
    
    </div>
    <div className="dropdown">
  <button className="dropbtn">View as</button>
  <div className="dropdown-content">
  <Link to={`/Books`}>Table</Link>
  <Link to={`/Booksgrid`}>Grid</Link>
  </div>
</div>
</div>
</div>
<div>
    <div>
    {
    print?
          myBooks.map((post:any)=>{ 
              return(
                 //post.title==bname||post.author==bname||post.price==bname||post.rating==bname||post.price==bname||post.votes==bname?
               
                <div className="gridsearch"><img style={{width:"200px", height:"200px"}} src={post.cover}></img>
                <br/>
                <Link to={`/details/${post.seriesIndex}`}>{post.title}</Link>
                <br/><b>Author : </b> 
                {post.author}
                <br/><b>Price : </b>
                {post.price}
                <br/><b>Rating : </b>
                {post.rating}
                <br/><b>Votes : </b>
                {post.votes}
               
                </div>
               
               // :null
              );
        })
       :null
}
    </div></div>
    </>
  );
}}

export default Searchgrid;