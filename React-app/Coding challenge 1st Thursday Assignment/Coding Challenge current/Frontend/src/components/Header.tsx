
import './header.css';
import List from "./Listoflink";

function Header(){ 
       return (
<div className="navigation">
<div className="topnav1">
<h1 style ={{color: "white"}}>Film Web App</h1>
</div>
<List/>

</div>
    );
}

export default Header;