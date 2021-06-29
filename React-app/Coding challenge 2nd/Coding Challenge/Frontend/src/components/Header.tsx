
import './header.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {bmsContext} from "../reducers/bms-context";

function Header(){ 
    
let {screen}=useContext(bmsContext);
const token= localStorage.getItem("authToken")
console.log("screen :" +screen)
console.log("token :" +token)

const customerInfo= JSON.parse(localStorage.getItem('customerInfo')||'{}');
const customer=customerInfo.cname;
console.log("customer name :",customer)

const userInfo= JSON.parse(localStorage.getItem('userInfo')||'{}');
const user=userInfo.uname;

const adminInfo= JSON.parse(localStorage.getItem('adminInfo')||'{}');
const admin=adminInfo.uname;

       return (
<div className="navigation bg-primary">
<div className="topnav1 bg-primary">
<h2 style ={{color: "white", marginLeft:".5rem", fontSize:"2rem"}}>E-Shop </h2>
</div>

<div className="topnav2 bg-primary">
<ul className="bg-primary">
{
(token!==null)?<>
<Link to={`/logout`}><li key="uniqueId6" style={{float:"right"}}>LogOut</li></Link></>
:<>
<Link to={`/register`}><li key="uniqueId7" style={{float:"right"}}>Register</li></Link>
<Link to={`/login`}><li key="uniqueId8" style={{float:"right"}}>Login</li></Link></>
}   
{
(screen==="user" && user!=="admin")?<>
<Link to={`/`}><li style={{float:"right"}} key="uniqueId1">Welcome {user}</li></Link>
<Link to={`/Goodsgrid`}><li style={{float:"right"}} key="uniqueId2">Shops</li></Link></>

:(screen==="customer")?<>
<Link  to={`/`}><li style={{float:"right"}} key="uniqueId1">Welcome {customer}</li></Link>
<Link to={`/Shopsgrid`}><li style={{float:"right"}} key="uniqueId3">View Shops</li></Link>
<Link to={`/Add_Shops`}><li style={{float:"right"}} key="uniqueId4">Add Shop</li></Link>
<Link to={`/Request_Category`}><li style={{float:"right"}} key="uniqueId4">Request Category</li></Link></>

:(screen==="admin" || user ==="admin")?<>
<Link to={`/`}><li style={{float:"right"}} key="uniqueId1">Welcome {admin} {user}</li></Link>
<Link to={`/View_Category`}><li style={{float:"right"}} key="uniqueId5">Add/View Category</li></Link>
<Link to={`/Request_By_Customer`}><li style={{float:"right"}} key="uniqueId4">Customer's Requests</li></Link></>

:<>
<Link to={`/Goodsgrid`}><li style={{float:"right"}} key="uniqueId2">Shops</li></Link></>
}
</ul>
</div>

</div>
    );
}

export default Header;