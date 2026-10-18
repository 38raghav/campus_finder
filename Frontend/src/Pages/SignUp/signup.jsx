import { useState } from "react";
//import { Button, Container } from "react-bootstrap";
import "./signup.css";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [conPassword, setconPassword] = useState("");
  const handler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    } else if (name == "conPassword") {
      setconPassword(value);
    } else {
      setName(value);
    }
  };
  return (
    <>
      <div className="divOuter">
        <div className="logo mt-3" >
          <div className="style">
            <img src="/formMap.png" className="image"></img>
            <div>
              <h4>Campus</h4>
              <h6>Lost & Found</h6>
            </div>
          </div>

          <h3>Create Your Account</h3>
          <p style={{textAlign:"center"}}>Join our campus community</p>
        </div>

        <div className="divInner">
          <label>Full Name</label>
          <br></br>
          <input
            type="text"
            name="username"
            value={name}
            onChange={handler}
            placeholder="Your Name"
            className="inputdis"
          ></input>
          <br></br>

          <label>Email Address</label>
          <br></br>
          <input
            type="mail"
            name="email"
            value={email}
            onChange={handler}
            placeholder="you@example.com"
            className="inputdis"
          ></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handler}
            placeholder="Create a Password"
            className="inputdis"
          ></input>
          <br></br>

          <label>Confirm Password</label>
          <br></br>
          <input
            type="password"
            name="conPassword"
            value={conPassword}
            onChange={handler}
            placeholder="Confirm your Password"
            className="inputdis"
          ></input>
          <br></br>

          <button className="btn btn-primary mt-3">SignUp</button>
          <div className="dis">
            <p>Already have an account?</p>
            <Link to="/login" className="btnSign">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
