// import React from 'react';
// import { useState, useEffect } from "react";

// import './shoplistgrid.css';
const Posts = () => {}

  
//   const [productAarry, setProductarray] = useState([]);
//   const [show, setShow] = useState("list");

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   function displayProducts(array: any) {
//     setShow("details");
//     setProductarray(array)
//   }


//   return (
// <>
// {
//     (show === "list") ?
//     <>
//     <h4  style={{ marginLeft: ".5rem"}} >Shops List with maximum Discount :</h4>
//     <div className="bgimage2">
//     <div className="grid-container">
//       {
//         posts.map((post: any) => {
//           return (

//             <div className="grid-item">
//               <b>Shop name : </b>
//               {post.sname}
//               <br />
//               <b>Shop Owner : </b>
//               {post.owner}
//               <br /><b>Shop Location : </b>
//               {post.location}
//               <br /><b>Category: </b>
//               {post.category}
//               <br /><b>Offer: </b>
//               <b>{post.offer}%</b>
//               <br />
//               <p onClick={() => { displayProducts(post.products) }} style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}>See Shop Products</p>
//             </div>
//           );

//         })
//       }
//     </div>
//   </div>
// </>
//   :
//         <div className="bgimage2">
//           <h4  style={{ marginLeft: ".5rem"}} >Products : </h4>
//           <div className="grid-containerp">
//             {
//               (productAarry.length === 0) ?
//                 <h4>No product Found...</h4>
//                 :
//                 productAarry.map((post: any) => {
//                   return (
//                     <div className="grid-itemp">
//                       {post}
//                     </div>
//                   );

//                 })
//             }
//           </div>
//           <div>
//             <br /><button style={{ marginLeft: ".5rem" }} className="btn btn-primary" onClick={() => { setShow("list") }} >Go Back to Shop List</button> </div>
//         </div>

//           }
//   </>
//   );
// };

export default Posts;