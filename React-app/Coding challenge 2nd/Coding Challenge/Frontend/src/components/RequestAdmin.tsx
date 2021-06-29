
import { useState, useEffect } from 'react';
import Axios from "axios";

export default function RequestAdmin() {


    const [myCategorys, setCategorys] = useState([]);
    const [requestStatus] = useState(false);

    useEffect(() => {
        getlist();
    }, []);


    function getlist() {
        fetch('http://localhost:4555/app/admin/category/getRequestCategory', {
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

    function acceptRequest(name:any) {
      
    let data={requestStatus}
        Axios.patch(`http://localhost:4555/app/admin/category/addRequest/${name}`,data)
          .then(res => {
             getlist();
          })
          .catch(error => {
            console.log(error)
          });
          getlist();
          alert("New Category added Successfully!")
        }
    
    return (
        <>
            <h4 style={{ marginLeft: ".5rem" }} >All Requsest by Customers to add a new shop category : </h4>
            <br />
            <table style={{ marginLeft: "1rem" }} className="table table-hover">
                <thead className="">
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Request Status</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {myCategorys.map((post: any) => (

                        <tr>
                            <td>{post.name}</td>
                            <td>pending</td>
                            <td>{post.customer}</td>
                            <td><button onClick={() => { acceptRequest(post.name) }} className="btn btn-primary">Accept Request</button></td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    );
}