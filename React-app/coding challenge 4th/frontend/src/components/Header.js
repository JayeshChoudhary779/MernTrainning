
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom'
import { signout } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const history=useHistory();

  const [search, setSearch] = useState("")

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("search value :", search)

    if (search[0] === "t" && search[1] === "t") {
      console.log("search by id")
      history.push(`/detail/${search}`)
    }

    else {
      console.log("search by gerneric")
      history.push(`/search?q=${search}`)
  }

  };


  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={NavLink} to='/' exact>Movies</Navbar.Brand>
      <Form inline style={{ marginLeft: "21rem" }}>
        <FormControl onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" style={{ width: "25rem" }} className="mr-sm-2" required="true" />
        <Button onClick={submitHandler} variant="outline-light">Search</Button>
      </Form>
      <Nav className="ml-auto ">
        <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
        {(userInfo) ?
          <Nav.Link as={NavLink} to='/' onClick={signoutHandler}>Signout</Nav.Link>
          :
          <>
            <Nav.Link as={NavLink} to='/signin' >Signin</Nav.Link>
            <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
          </>
        }
      </Nav>
    </Navbar>
  )
}