
import './Search.css';
import {Link} from 'react-router-dom';

import {useState,useEffect} from "react";

function Search() {
  
 const[myBooks,setBooks]= useState([]);

 useEffect(()=>{
   fetch('http://localhost:3006/Books')
   .then(res=>{
     return res.json();
   })
   .then(data=>{
     console.log(data);
     setBooks(data);
   });
 },[]);

const [bname,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val:any)
  {
    console.warn(val.target.value)
    setData(val.target.value);
    console.log(val.target.value);
    setPrint(false);
  }
  return (
      <>
      
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
    <button onClick={()=>setPrint(true) } id="searchButton">Search</button>
    </div>
    <div className="dropdown">
  <button className="dropbtn">View as</button>
  <div className="dropdown-content">
  <Link to={`/Books`}>Table</Link>
  <Link to={`/Booksgrid`}>Grid</Link>
  </div>
</div>
</div>

    <div>
    {
    print?
          myBooks.map((post:any)=>{ 
              return(
                post.title==bname||post.author==bname||post.price==bname||post.rating==bname||post.price==bname||post.votes==bname?
                <table  className="book-table" id="table">
            
              <tr>
                  <th>Cover</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Votes</th>
              </tr>
                  <tr>
                    <td><img src={post.cover} style ={{width:'150px', height:'150px'}}></img></td>
                    <td><Link to={`/details/${post.seriesIndex}`}>{post.title}</Link></td>
                    <td>{post.author}</td>
                    <td>{post.price}</td>
                    <td>{post.rating}</td>
                    <td>{post.votes}</td>
                  </tr>
                  </table>
                :null
              );
        })
       :null
}
    </div>
    </>
  );
}
export default Search;