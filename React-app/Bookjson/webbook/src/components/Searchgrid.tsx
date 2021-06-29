
import './Searchgrid.css';
import {Link} from 'react-router-dom';
import {useState,useEffect} from "react";

function Searchgrid() {
  
 const[myBooks,setBooks]= useState([]);
 useEffect(()=>{
  getlist();
},[]);

function getlist(){
  
fetch('http://localhost:3006/Books')
.then(res=>{
  return res.json();
})
.then(data=>{
  console.log(data);
  setBooks(data);
});
}

 function search(){
setPrint(true) 
 getlist();
 }
const [bname,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val:any)
  {
    console.log(val.target.value)
    setData(val.target.value);
    console.log(val.target.value);
    setPrint(false);
  }
  return (
      <>
      <div>
         <div className="selectBy">
    <label>Select Book by :</label>
    </div>
    <div className="selectValue">
    <select name="select" id="books">
    <option value="name">Title</option>
    <option value="author">Author</option>
    <option value="id">Price</option>
    <option value="price">Rating</option>
    <option value="price">Votes</option>
    </select>
   </div>
      <div className="divinline">
    <div className="form">
    <input id="title" onChange={getData}/>
    <button onClick={search} id="searchButton">Search</button>
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
                post.title==bname||post.author==bname||post.price==bname||post.rating==bname||post.price==bname||post.votes==bname?
               
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
                
                :null
              );
        })
       :null
}
    </div></div>
    </>
  );
}
export default Searchgrid;