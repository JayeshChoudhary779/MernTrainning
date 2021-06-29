import './header.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {bmsContext} from "../reducers/bms-context";
import { Navbar, Nav } from 'react-bootstrap';
function Header(){ 

let {toggle}=useContext(bmsContext);
       
return (
<>
{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Book's Web</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      {
 (toggle)?<>
    <Nav className="mr-auto">
    <Link to={`/Booksgrid`}><Nav.Link href="#Books">Books</Nav.Link></Link>
    <Link to={`/Add_Books`}><Nav.Link href="Add Book">Add Book</Nav.Link></Link>
    <Link to={`/Author`}><Nav.Link href="#Author">Author</Nav.Link></Link>
    <Link to={`/`}><Nav.Link href="#Home">Home</Nav.Link></Link>
    </Nav>
    <Nav>
    <Link to={`/logout`}><Nav.Link href="#Logout">Logout</Nav.Link></Link>
    </Nav>
    </>
    :<>
    <Nav className="mr-auto">
    <Link to={`/Booksgrid`}><Nav.Link href="#Books">Books</Nav.Link></Link>
    <Link to={`/Add_Books`}><Nav.Link href="Add Book">Add Book</Nav.Link></Link>
    <Link to={`/Author`}><Nav.Link href="#Author">Author</Nav.Link></Link>
    <Link to={`/`}><Nav.Link href="#Home">Home</Nav.Link></Link>
    </Nav>
    <Nav>
    <Link to={`/login`}><Nav.Link href="#Login">Login</Nav.Link></Link>
    <Link to={`/register`}><Nav.Link href="Register">Register</Nav.Link></Link>
    </Nav>
</>}

  </Navbar.Collapse>
</Navbar>
</> */}










 <div className="navigation">
 <div className="topnav1">
 <h1 style ={{color: "white"}}>Book's Web </h1>
 </div>

  <div className="topnav2">
  <ul>

  <Link to={`/Booksgrid`}><li><a href="#Books">Books</a></li></Link>
  <Link to={`/Add_Books`}><li><a href="#Add Book">Add Book</a></li></Link>
  <Link to={`/Author`}><li><a href="#Author">Author</a></li></Link>
  <Link to={`/`}><li><a href="#add Author">Home</a></li></Link>
 
  {
 (toggle===true || toggle===null)?<>
 
<Link to={`/logout`}><li style={{float:"right"}}><a href="#Logout">LogOut</a></li></Link></>
:
<>
<Link to={`/register`}><li style={{float:"right"}}><a href="#Register">Register</a></li></Link>
<Link to={`/login`}><li style={{float:"right"}}><a href="#Login">Login</a></li></Link></>

}
</ul>
</div>
</div>
</>
    );
}

export default Header;