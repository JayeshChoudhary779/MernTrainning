import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [show1, setShow1] = useState(true);
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerAs, setRegisterAs] = useState('User');

  const handleCloseUser = () =>{setShow1(false); props.history.push("/")};


  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;


  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } 
    else{
      console.log("in register")
      dispatch(register(name, email, password,contact));
    }
  }
  

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
  }, [props.history, userInfo]);

  return (
    <>
    <Modal show={show1} onHide={handleCloseUser}>
    <Modal.Header closeButton>
      <Modal.Title>Create an account</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form className="form" onSubmit={submitHandler}>
        {(loading) && <LoadingBox></LoadingBox>}
        {(error) && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Phone No.</label>
          <input
            type="tel"
            id="contact"
            placeholder="Enter Number"
            required
            onChange={(e) => setContact(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Enter confirm password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="Register as">Register as</label>
       
  <select id="registerAs" name="registerAs"
   value={registerAs} 
   onChange={(e) => setRegisterAs(e.target.value)}>
    <option value="User">User</option>
  </select>
  </div>
  <div>
          <button className="primary" type="submit">
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{' '}
            <Link to={`/signin`}>Sign-In</Link>
          </div>
        </div>
      </form>
      </Modal.Body>
      </Modal>
</>
  );
}
