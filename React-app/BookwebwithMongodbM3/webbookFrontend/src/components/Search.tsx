
import './Search.css';
import {Link,useHistory} from 'react-router-dom';
import {useState,useEffect} from "react";

const jwt = require('jsonwebtoken');
function Search() {
  const token= localStorage.getItem("authToken")
  const history = useHistory();
  jwt.verify(token,'jh',function(err:any){
    if(err){
      console.log("token is expired")
       history.push("/login");
    }
  })
  // let loggedIn =true
  // if(token==null){
  //   loggedIn=false
  // }
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
      console.log(data);
      setBooks(data);
    });
  }

const [bname,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val:any)
  {
    console.warn(val.target.value)
    setData(val.target.value);
    console.log(val.target.value);
    setPrint(false);
  }

  function search(){
    setPrint(true) 
     getlist();
     }
     
     if(token==null){
      return <> <h1>Please Do First Login or Register, Thank You!</h1> </>;
     }else{
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
}}
export default Search;