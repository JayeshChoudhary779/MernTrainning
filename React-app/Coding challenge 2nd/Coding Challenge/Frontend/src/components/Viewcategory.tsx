
import './Viewcategory.css';
import Axios from "axios";
import { useState, useEffect } from "react";


// Add and view category of shop
function Viewcategory() {

  const [name, setCategory] = useState("");
  const [myCategorys, setCategorys] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getlist();
  }, []);


  function getlist() {
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
  }

  function AddCategory() {
    if(name===""){
      alert("field is mandatory")
    }
    else{
    let data = { name };
    console.log(data);

    Axios.post("http://localhost:4555/app/admin/category/addCategory", data)
      .then(res => {
        const { ...data1 } = res.data;
        if (data1.message !== "unique name") {
          setMessage(data1.message)
        } else {
          getlist();
          setMessage(data1.message)
        }

      })
      .catch(error => {
        console.log(error)
      });
    }
  }

  function deleteCategory(name: any) {
    fetch(`http://localhost:4555/app/admin/category/delete/${name}`, {
      method: 'DELETE'
    }).then((result) => {
      getlist();
      result.json().then((resp) => (
        console.log(resp)
      ))
    })
  }

  return (
    <div className="bgimage">
      <div style={{ width: "20%", margin: "auto" }}>
        <b style={{ color: "red" }}>{
          (message != "unique name") ?
            message : null
        }</b>
      </div>
      <div className="input-group" style={{ width: "50%", margin: "auto" }}>
        <b><label style={{ marginTop: "0.5rem", marginRight: "1rem" }} >Add Category  : </label></b>
        <input type="search" style={{ border: "2px solid gray", marginTop: "0.093rem" }} className="form-control rounded" value={name} onChange={(e) => setCategory(e.target.value)} placeholder="Add New Category..." aria-label="Search"
          aria-describedby="search-addon" required/>

        <button type="button" className=" btn btn-primary" onClick={AddCategory}>Submit</button>
      </div>
      <br />
      <br />
      <div style={{ display: "block", clear: "left", color: "black" }}>
        <h4 style={{marginLeft:".5rem"}}>Category List :</h4>
      </div>


      <div className="grid-containerc">
        {
          myCategorys.map((post: any) => {
            return (

              <div className="grid-itemc">
                <b>Category name : </b>
                {post.name}
                <br /><button style={{ marginTop: "1rem" }} className=" btn btn-secondary" onClick={() => { deleteCategory(post.name) }}>Delete</button>
              </div>
            );

          }

          )}
      </div>
    </div>
  )

}
export default Viewcategory;