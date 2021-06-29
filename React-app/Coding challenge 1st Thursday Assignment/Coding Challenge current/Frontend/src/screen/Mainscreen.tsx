
import  {useState } from 'react';

function  Mainscreen (){

    
    const[token,setToken]=useState("xxxx");
    localStorage.setItem("authToken",token);
    
    return(
        <>
        <div style ={{
            backgroundColor: "silver",
            marginTop:"0px"}}>

                <h1 style ={{
            color: "darkred", margin:"auto" ,width:"42%",fontFamily:"cursive"
            }}>Welcome To Film Industry!</h1>
            <br/>

    <img style ={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:"0px",
        width:" 75%",
        height:"70%",
        borderRadius:"150px"}}src ="https://cdn.vox-cdn.com/thumbor/ybRf9TwAH2J7VeSRxemzJAvNhMw=/0x0:6720x4480/1200x800/filters:focal(2717x1620:3791x2694)/cdn.vox-cdn.com/uploads/chorus_image/image/60141553/shutterstock_1068876371.0.jpg"></img>
  
  </div>
  </>
    );
    }
export default Mainscreen;