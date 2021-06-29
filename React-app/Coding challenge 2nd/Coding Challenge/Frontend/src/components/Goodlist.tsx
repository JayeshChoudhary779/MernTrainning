
import './shoplistgrid.css';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Posts from './Posts';
import Pagination from './Pagination';
import Axios from "axios";
import { Modal } from 'react-bootstrap';

/////// view shoplist///////////
function Shoplist() {

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const user = userInfo.uname;

  const token = localStorage.getItem("authToken")
  const [myShops, setShops] = useState([]);


  const handleCloseUser = () => { setShow1(false), setScreen("simple"), setShow("list") };
  const [screen, setScreen] = useState('Modal');

  const [show1, setShow1] = useState(true);
  const [mySearchedShop, setSearchedShop] = useState([]);
  const [productAarry, setProductarray] = useState([]);
  const [show, setShow] = useState("list");

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const [searchData, setData] = useState(null)

  const [optionValue, setOption] = useState("shop");
  console.log("user", user)

  if (loading) {
    return <h2>Loading...</h2>;
  }

  useEffect(() => {
    getlist();
  }, []);


  function getlist() {
    fetch('http://localhost:4555/app/user/shop', {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setShops(data);
        setLoading(false);
      });
  }

  console.log(myShops)
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myShops.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  async function getSearchlist() {

    console.log("in search")
    setShow("searchShop")
    console.log("show :", show)
    switch (optionValue) {

      case "shop":

        console.log("shop : " + searchData)
        fetch(`http://localhost:4555/app/user/getShop/shop/${searchData}`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            setSearchedShop(data);
          })
        break;

      case "owner":
        console.log("owner : " + searchData)


        fetch(`http://localhost:4555/app/user/getShop/owner/${searchData}`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            setSearchedShop(data);
          })
        break;

      case "location":
        console.log("location : " + searchData)

        fetch(`http://localhost:4555/app/user/getShop/location/${searchData}`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            setSearchedShop(data);
          })
        break;

      case "category":
        console.log("category : " + searchData)

        fetch(`http://localhost:4555/app/user/getShop/category/${searchData}`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log(data);
            setSearchedShop(data);
          })
        break;
    }
  }


  function displayProducts(array: any) {
    setShow("details");
    setProductarray(array)
  }

  myShops.sort((a: any, b: any) => {
    return b.offer - a.offer;
  });


  function getData(val: any) {
    console.log(val.target.value)
    setData(val.target.value);
    // setPrint(false);
  }

  // if(!user){
  //   setScreen("list");
  //   setShow("list")
  // }
  // if (token == null) {
  //   return <> <h1>Please First Go to Home, Thank You!</h1> </>;;
  // } else {
  {
    return (
      <>
        {

          (screen === "Modal") ?
            (!user) ?
              <Modal style={{ marginTop: "11rem" }} show={show1} onHide={handleCloseUser}>
                <Modal.Header closeButton>
                  <Modal.Title>Offers</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Please Login to awail Extra offers </h4>
                  <h4>Thank You!</h4>
                  <button onClick={handleCloseUser} className="btn btn-primary">OK</button>
                </Modal.Body>
              </Modal>
              :
              (user) ?
                <Modal style={{ marginTop: "10rem" }} show={show1} onHide={handleCloseUser}>
                  <Modal.Header closeButton>
                    <Modal.Title>Offers</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Hello {user}, Now You can awail</h4>
                    <h4>Extra offers Thank You!</h4>
                    <button onClick={handleCloseUser} className="btn btn-primary">OK</button>
                  </Modal.Body>
                </Modal>
                : null
            : (show === "list") ?
              <div>
                <div style={{ margin: "auto", width: "85%" }}>
                  <div className="selectBy">
                    <label>Search by :</label>
                  </div>
                  <div className="selectValue">
                    <select name="select" id="shops"
                      value={optionValue}
                      onChange={(e) => {
                        const selected = e.target.value;
                        setOption(selected);
                      }}>
                      <option value="shop">Shop</option>
                      <option value="owner">Owner</option>
                      <option value="location">Location</option>
                      <option value="category">Category</option>
                    </select>
                  </div>
                  <div className="form">
                    <input onChange={getData} style={{ width: "250px", height: "37px", border: "1px solid black", marginTop: ".6rem" }} type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                      aria-describedby="search-addon" />
                    <button onClick={() => { getSearchlist() }} style={{ display: "inline", marginLeft: "16rem", marginTop: "-4rem" }} type="button" className="btn btn-primary">search</button>
                  </div>
                </div>
                <br />
                <div style={{ display: "block", clear: "left", color: "black" }}>

                  <h4 style={{ marginLeft: ".5rem" }} >Shops List with maximum Discount :</h4>
                  <div className="bgimage2">
                    <div className="grid-container">
                      {
                        currentPosts.map((post: any) => {
                          return (

                            <div className="grid-item">
                              <b>Shop name : </b>
                              {post.sname}
                              <br />
                              <b>Shop Owner : </b>
                              {post.owner}
                              <br /><b>Shop Location : </b>
                              {post.location}
                              <br /><b>Category: </b>
                              {post.category}
                              {(user) ?
                                <>
                                  <br /><b>Extra 10% Offer: </b>
                                  <b>{post.offer + 10}%</b>
                                </>
                                : <>
                                  <br /><b>Visitor Offer: </b>
                                  <b>{post.offer}%</b>
                                </>
                              }
                              <br />
                              <p onClick={() => { displayProducts(post.products) }} style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>See Shop Products</p>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={myShops.length}
                    paginate={paginate}
                  />
                </div>
              </div>

              : (show === "details") ?
                <div className="bgimage2">
                  <h4 style={{ marginLeft: ".5rem" }} >Products : </h4>
                  <div className="grid-containerp">
                    {
                      (productAarry.length === 0) ?
                        <h4>No product Found...</h4>
                        :
                        productAarry.map((post: any) => {
                          return (
                            <div className="grid-itemp">
                              {post}
                            </div>
                          );

                        })
                    }
                  </div>
                  <div>
                    <br /><button style={{ marginLeft: ".5rem" }} className="btn btn-primary" onClick={() => { setShow("list") }} >Go Back to Shop List</button> </div>
                </div>
                :
                <div>
                  {
                    (mySearchedShop.length === 0) ?
                      <h4 style={{ marginLeft: ".5rem" }}>No result found..</h4>
                      :
                      <>
                        <h4 style={{ marginLeft: ".5rem" }}>Your Searched result :</h4>
                        <div className="bgimage2">
                          <div className="grid-container">
                            {
                              mySearchedShop.map((post: any) => {
                                return (

                                  <div className="grid-item">
                                    <b>Shop name : </b>
                                    {post.sname}
                                    <br /><b>Shop Owner : </b>
                                    {post.owner}
                                    <br /><b>Shop Location : </b>
                                    {post.location}
                                    <br /><b>Category: </b>
                                    {post.category}
                                    <br /><b>Offer: </b>
                                    <b>{post.offer}%</b>
                                    <br />
                                    <p onClick={() => { displayProducts(post.products) }} style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>See Shop Products</p>
                                  </div>
                                );

                              })
                            }
                          </div>
                        </div>
                      </>
                  }
                  <div>
                    <br /><button style={{ marginLeft: ".5rem", marginBottom: "1rem" }} className="btn btn-primary" onClick={() => { setShow("list") }} >Go Back to Shop List</button> </div>
                </div>

        }
      </>
    );

  }
}

export default Shoplist;
