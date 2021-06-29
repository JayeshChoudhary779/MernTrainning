import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import { Modal } from 'react-bootstrap';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
  const [show1, setShow1] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signinAs, setSigninAs] = useState('User');

  const handleCloseUser = () =>{setShow1(false); props.history.push("/")};


  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo,loading, error } = userSignin;


  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if( signinAs === "User"){
      dispatch(signin(email, password))
    }
    }
  
  useEffect(() => {
    if (userInfo)  {
      props.history.push("/")
    }
    
  }, [props.history, userInfo]);
  
  return (
    <>
    <Modal show={show1} onHide={handleCloseUser}>
    <Modal.Header closeButton>
      <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form className="form" onSubmit={submitHandler}>
        {(loading ) && <LoadingBox></LoadingBox>}
        {(error) && <MessageBox variant="danger">{error}</MessageBox>}
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
          <label htmlFor="Signin as">Signin as</label>
          <select id="SigninAs" name="SigninAs"
            value={signinAs}
            onChange={(e) => setSigninAs(e.target.value)}>
            <option value="User">User</option>
          </select>
        </div>
        <div>
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New User?{' '}
            <Link to={`/register`}>
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </Modal.Body>
      </Modal>
</>
  );
}