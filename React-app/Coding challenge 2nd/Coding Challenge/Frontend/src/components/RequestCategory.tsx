
import { useState , useEffect} from 'react';
import Axios from "axios";

export default function RequestCategory() {

    
const customerInfo= JSON.parse(localStorage.getItem('customerInfo')||'{}');
const customer=customerInfo.cname;
  const [request, setRequest] = useState("");
  const [message, setMessage] = useState("");

    function  requestCategory() {

     if(request==="")
     {
     alert("field is required"); 
     setMessage("")   
     }
    else{

    let data={request,customer}
    Axios.post("http://localhost:4555/app/customer/category/request", data)
    .then(res => {
      const { ...data1 } = res.data;
      if (data1.message !== "unique name") {
        setMessage(data1.message)
      } else {
        alert("Request submitted to Admin")
        setMessage("")
      }
    })
    .catch(error => {
      console.log(error)
    });

  }
}

   return( 
<>
    <h4  style={{ marginLeft: ".5rem"}} >Please Requsest Admin to add a new shop category : </h4>
    <br />
    <div style={{ width: "20%", margin: "auto" }}>
        <b style={{ color: "red" }}>{
          message ? message : null
        }</b>
      </div>
    <br />
    <div className="input-group" style={{ width: "55%", margin: "auto" }}>
    <b><label style={{ marginTop: "0.5rem", marginRight: "1rem" }} >Request New Category  : </label></b>
    <input required type="search" style={{ border: "2px solid gray", marginTop: "0.093rem" }} className="form-control rounded" value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Request New Category..." aria-label="Search"
      aria-describedby="search-addon" />

    <button type="button" className=" btn btn-primary" onClick={requestCategory}>Submit Requset</button>
  </div>
  </>
    );
}