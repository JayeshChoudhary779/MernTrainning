
import './register.css';
import { Link } from 'react-router-dom';
import Axios from "axios";
import { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';

function Register() {

  const [registerAs, setRegisterAs] = useState('User');

  const [screen, setScreen] = useState('Modal');
  const [show1, setShow1] = useState(true);

  const handleCloseUser = () => { setShow1(false), setScreen("simple") };

  const [message, setMessage] = useState("");

  const [phoneNo, setPhoneNo] = useState("");
  const [uname, setUname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordc, setPasswordc] = useState("");


  function submit(e: any) {
    e.preventDefault();

    if (password !== passwordc) {
      alert("Enter same password in both the field");
      return;
    }
    console.log('hyy')
    let data = { uname, email, password, phoneNo };

    console.log(data);


    if (registerAs === "User") {
      Axios.post("http://localhost:4555/app/user/signUp", data)
        .then(res => {
          const { ...data } = res.data;
          if (data.message !== "") {
            setMessage(email + " " + data.message)
          }
        })
        .catch(error => {
          console.log(error)
        });
    }


    if (registerAs === "Customer") {
      Axios.post("http://localhost:4555/app/customer/signUp", data)
        .then(res => {
          const { ...data } = res.data;
          if (data.message !== "") {
            setMessage(email + " " + data.message)
          }
        })
        .catch(error => {
          console.log(error)
        });
    }
  }

  return (
    <>

      {
        (screen === "Modal") ?

          <Modal show={show1} onHide={handleCloseUser}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <form onSubmit={submit}>
                <div>
                  <label><b>Name</b></label>
                  <input type="text" placeholder="Enter username" name="uname" id="uname" required value={uname} onChange={(e) => setUname(e.target.value)} />

                  <label><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                  <label><b>Phone No.</b></label>
                  <input type="text" placeholder="Enter phoneNo" name="phoneNo" id="phoneNo" required value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />

                  <label ><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" id="psw" required value={password} onChange={(e) => setPassword(e.target.value)} />

                  <label ><b>Confirm Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" id="psw" required value={passwordc} onChange={(e) => setPasswordc(e.target.value)} />

                  <label htmlFor="Register as"><b>Register as</b></label>
                  <select id="RegisterAs" name="RegisterAs"
                    value={registerAs}
                    onChange={(e) => setRegisterAs(e.target.value)}>
                    <option value="User">User</option>
                    <option value="Customer">Customer</option>
                  </select>

                  <b style={{ color: "red" }}>{
                    (message != "") ?
                      message : null
                  }</b>
                  <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                  <button className="btn btn-primary" style={{ cursor: "pointer", width: "100%" }} type="submit">Register</button>
                </div>

                <div className="container signin">
                  <br />
                  <p>Already have an account?
<Link to={`/login`}> <a href="#">Sign in</a>.</Link></p>
                </div>
              </form>
            </Modal.Body>
          </Modal>

          :
          <>
            <button className="btn btn-primary" onClick={() => { setScreen('Modal'), setShow1(true) }} style={{ cursor: "pointer", width: "30%" , marginLeft:"30rem"}} type="submit">Go to Register again</button>
          </>
}
    </>
  );
}


export default Register;