
import { useState } from 'react';
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"

function Mainscreen() {

    return (
        <>
            <div style={{
                backgroundColor: "white",
                marginTop: "0px"
            }}>
                <h1 style={{
                    color: "black", margin: "auto", width: "31%", fontFamily: "cursive"
                }}>Welcome To E-Shop!</h1>
                <br />
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        // style={{ height: '800px' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        // style={{ height: '800px' }}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        // style={{ height: '800px' }}
                    />

                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Fourth slide"
                        // style={{ height: '800px' }}
                    />

                </Carousel.Item>
            </Carousel>
        </>
















            /* <br/>

    <img style ={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:"0px",
        width:" 75%",
        height:"70%",
        borderRadius:"150px"}}src ="https://beanstalkwebsolutions.com/blog/wp-content/uploads/2016/08/ways-your-website-can-hurt-sales-1000x727.jpg"></img>
  
  </div>
  </> */
    );
}
export default Mainscreen;