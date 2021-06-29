
import { useHistory } from 'react-router-dom';
import './Addshopstyle.css';
import { useState , useEffect} from 'react';
import Axios from "axios";


//Adding shop details//////////////
function Addshop() {


  const token = localStorage.getItem("authToken")
  const [message, setMessage] = useState("");
  const [myCategorys, setCategorys] = useState([]);
  const history = useHistory();

  // JSON.parse(localStorage.getItem('currentUser') || '{}');
  const customerInfo = JSON.parse(localStorage.getItem('customerInfo') || '{}');

  const customer = customerInfo.cname;
  console.log("customer name :", customer)

  const [sname, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [offer, setOffer] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Cloth");
  const [product, setProducts] = useState("");

  let products = product.split(",")

  
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


  function submit(e: any) {
    e.preventDefault();
    if (sname === "" || owner === "" || location === "" || category === "" || product === "" || offer === "'") {
      alert("All the fields are mandatory!");
      return;
    }
    console.log('hyy')

    let data = { customer, sname, owner, location, category, offer, products };

    console.log(data);


    Axios.post("http://localhost:4555/app/customer/shop/add", data)
      .then(res => {
        const { ...data1 } = res.data;
        if (data1.message !== "") {
          setMessage(data1.message)
          console.log(data1.message)
        }
        if (data1.message === "unique name") {
          history.push("/Shopsgrid");
        }
      })
      .catch(error => {
        console.log(error)
      });

  }
  if (token == null) {
    return <> <h1>Please First Login, Thank You!</h1> </>;;
  } else {
    return (

      <div className="bgimage">
        <div className="container">

          <h2 style={{}}>Add new Shop details...</h2>
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
            <input type="submit" style={{ width: "100%", marginBottom: "1rem", margin: "auto" }} className="btn btn-primary" value='ADD SHOP' />

          </form>
        </div>
      </div>

    );

  }
}
export default Addshop;

