
import  { useHistory } from 'react-router-dom';
import{Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./img1.jpg"
import img3 from "./img3.jpg"
import img4 from "./img2.jpg"


const jwt = require('jsonwebtoken');
function  Mainscreen (){
    
const token= localStorage.getItem("authToken") 
// const history = useHistory();

// jwt.verify(token,'jh',function(err:any){
//   if(err){
//     console.log("token is expired")
//      history.push("/login");
//   }
// })

    return(
<>
 <div style ={{
            backgroundColor: "silver",
            marginTop:"0px"}}>

                <h1 style ={{
            color: "darkred", margin:"auto" ,width:"42%",fontFamily:"cursive"
            }}>Welcome To My Book WeB!</h1>
            <br/>
        </div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      style={{height:'800px'}}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="Second slide"
      style={{height:'800px'}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      style={{height:'800px'}}
    />

  </Carousel.Item>
</Carousel>
</>
    );
    }

export default Mainscreen;