
import './shoplistgrid.css';
import { useHistory,Link } from 'react-router-dom';
import {useState,useEffect} from "react";
import Axios from "axios";
import {useContext} from 'react';
import {bmsContext} from "../reducers/bms-context";
import * as Bms from "../reducers/bms-reducer";


//// get shop list and display it to UI
 function Shoplistgrid(){

const customerInfo= JSON.parse(localStorage.getItem('customerInfo')||'{}');

let {dispatch}=useContext(bmsContext);

let {updatedShop}=useContext(bmsContext);
const customer=customerInfo.cname;
console.log("customer name :",customer) 
 console.log("shopData:",updatedShop)
 
 console.log("shop name up:",updatedShop[0].sname)
   
 const token= localStorage.getItem("authToken")
  const history = useHistory();
  const[myShops,setShops]= useState([]);

   
const [shopName, setShopName] = useState("");
const [sname, setName] = useState("");
const [owner, setOwner] = useState("");
const [offer, setOffer] = useState("");
const [location, setLocation] = useState("");
const [category, setCategory] = useState("Cloth");
const [product, setProducts] = useState("");

  const [message, setMessage] = useState("");
  const [myCategorys, setCategorys] = useState([]);
  
  const[productAarry,setProductarray]= useState([]);
  
  const[show,setShow]= useState("shop");

  
useEffect(() => {
  getlist();
  setName(updatedShop[0].sname);
  setCategory(updatedShop[0].category);
  setOwner(updatedShop[0].owner);
  setLocation(updatedShop[0].location);
  setProducts(updatedShop[0].products)
  setOffer(updatedShop[0].offer)
  }, updatedShop);
  
  function getlist(){
    fetch(`http://localhost:4555/app/customer/shop/${customer}`,{
      method:"GET",
      headers:{"Content-Type":"application/json"}
    })
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      setShops(data);  
    });
  }
  
  function deleteShop(sname:any) {
    fetch(`http://localhost:4555/app/customer/shop/delete/${sname}`,{
        method:'DELETE'
      }).then((result)=>{
        getlist();
        result.json().then((resp)=>(
          console.log(resp)
        ))
        })     
      setShow("shop")
}

function updateShop(sname:any) {
  // history.push(`/Update_Shop/${sname}`);
  setShopName(sname)
  setShow("update")

  fetch('http://localhost:4555/app/admin/category/getCategory', {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      setCategorys(data);
    });

  fetch(`http://localhost:4555/app/customer/shop/getShop/${sname}`,{
    method:"GET",
    headers:{"Content-Type":"application/json"}
  })
  .then(res=>{
    return res.json();
  })
  .then(data=>{
      console.log("data :",data)
      dispatch({type: Bms.UPDATED_SHOP,payload:data})
  });
}


function displayProducts(array:any) {
  setShow("details");
  setProductarray(array)
}

function submit(e: any) {
  e.preventDefault();
  console.log('hyy')

  let products = product.split(",")
  let data = { customer, sname, owner, location, category, offer, products};

  console.log(data);


  Axios.patch(`http://localhost:4555/app/customer/shop/updateShop/${shopName}`, data)
    .then(res => {
      getlist()
      alert("Shop updated successfully!")
      setShow("shop")
      history.push("/Shopsgrid");
    })
    .catch(error => {
      console.log(error)
    });

   
}

  
    if(token==null){
      return <> <h1 style={{marginLeft:".5rem"}}>Please First Go to Home, Thank You!</h1> </>;;
     }else{
    return(
        
      (show==="shop")?
    <div>
      <div style={{display:"block", clear:"left" ,color:"black"}}>
      <h4 style={{marginLeft:".5rem"}}>Shop List :</h4>
      </div>
       
<div className="bgimage2">
      <div className="grid-container">
      {
        myShops.map((post:any)=>{ 
            return(
               
                  <div className="grid-item">
                  <b>Shop name : </b> 
                  {post.sname}
                  <br/><b>Shop Owner : </b> 
                   {post.owner}
                  <br/><b>Shop Location : </b> 
                   {post.location}
                  <br/><b>Category: </b>
                   {post.category}   
                   <br/><b>Offer: </b>
                   {post.offer}%   
                   <br/>
                   <p  onClick ={()=>{displayProducts(post.products)}} style={{color:"blue" ,cursor:"pointer", textDecoration:"underline"}}>See Shop Products</p>
                   <button style={{marginLeft:"2.2rem"}} className="btn btn-primary" onClick={()=>{updateShop(post.sname)}}>Update</button>              
                   <button style={{marginLeft:".55rem"}} className="btn btn-primary" onClick={()=>{deleteShop(post.sname)}}>Delete</button>              
             </div>           
            );
            
      })
     }
    </div>
    </div>
     </div>
     :(show==="details")?
     <div className="bgimage2">
     <h4 style={{marginLeft:".5rem"}}>Products : </h4> 
     <div className="grid-containerp">
     {
       (productAarry.length===0)?
       <h4 style={{marginLeft:".5rem"}}>No product Found...</h4>
       :
       productAarry.map((post:any)=>{ 
           return(
                 <div className="grid-itemp">
                 {post}
                </div>           
           );
           
     })
     
    }
   </div>
   <div>
   <br/><button  style={{marginLeft:".5rem"}} className="btn btn-primary" onClick={()=>{setShow("shop")}}>Go Back to Shop List</button> </div>
   </div>
:
   <>
  <a href='' style={{marginLeft:"1rem"}} onClick={()=>{setShow("shop")}}>Go back..</a>
<div className="bgimage">
<div className="container">

  <h2 style={{}}>Update Shop details...</h2>
  <hr style={{ color: "black", borderWidth: 1 }} />

  <form onSubmit={submit}>

    <b><label>Shop name :</label></b>
    <input type="text" id="name" placeholder="Shop name.." name="sname" value={sname} onChange={(e) => setName(e.target.value)} />
    <br />
    <b><label>Owner name :</label></b>
    <input type="text" id="owner" placeholder="owner..." name="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
    <br />
    <b><label>Location :</label></b>
    <input type="text" id="location" placeholder="location..." name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
    <br />
    <label htmlFor="catrgory"><b>Choose Category :</b></label>
  <select id="category" name="category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}>
    {myCategorys.map((post: any) => {
    return (
    <option value={post.name}>{post.name}</option>
    )})}
  </select>
    {/* <b><label>Choose Category :</label></b>

    <input type="text" id="category" placeholder="category..." name="category" value={category} onChange={(e) => setCategory(e.target.value)} /> */}
    <b><label>Offer :</label></b>
    <input type="text" id="offer" placeholder="offer..." name="offer" value={offer} onChange={(e) => setOffer(e.target.value)} />
    <b><label>Products by comma :</label></b>
    <input type="text" id="products" placeholder="product1,product2,product3......" name="products" value={product} onChange={(e) => setProducts(e.target.value)} />

    <b style={{ color: "red" }}>{
      (message != "") ?
        message : null
    }</b>
    <br />
    <br />
    <input type="submit" style={{ width: "100%", marginBottom: "1rem", margin: "auto" }} className="btn btn-primary" value='UPDATE SHOP' />

  </form>
</div>
</div>
</>
   
     );
    
  }      
}

export default Shoplistgrid;
