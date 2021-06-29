
import  { useHistory } from 'react-router-dom';
const jwt = require('jsonwebtoken');

function  Mainscreen (){
    
    const token= localStorage.getItem("authToken") 
const history = useHistory();
jwt.verify(token,'jh',function(err:any){
  if(err){
    console.log("token is expired")
     history.push("/login");
  }
})

    return(
        <>
        <div style ={{
            backgroundColor: "silver",
            marginTop:"0px"}}>

                <h1 style ={{
            color: "darkred", margin:"auto" ,width:"38%",fontFamily:"cursive"
            }}>Welcome To My Book WeB!</h1>
            <br/>

    <img style ={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:"0px",
        width:" 75%",
        height:"70%",
        borderRadius:"150px"}}src ="https://c0.wallpaperflare.com/preview/469/70/385/background-book-bookcase-books.jpg"></img>
  
  </div>
  </>
    );
    
}
export default Mainscreen;