import { useState } from "react"
//import { Button, Container } from "react-bootstrap";
import"./login.css";
import { Link } from "react-router-dom";
export const LogIn=()=>{
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const handler=(e)=>{
        const{name,value}=e.target;
        console.log(name,value);
        if(name=="email"){
            setEmail(value);
        }
        else {
            setPassword(value);
        };
    }
return(
    <>
    <div className="outerDiv">
        <div className="style">
            <img src="/formMap.png" className="image"></img>
            <div>
                <h4>Campus</h4>
                <h6>Lost & Found</h6>
            </div>
        </div>
    <h3>Login to Your Account</h3>
    <p>Welcome back!Please login to continue</p>
    <div className="innerDiv">
    <label>Email Address</label><br></br>
    <input type="mail" name="email" value={email} onChange={handler} placeholder="you@example.com" className="inputGroup"></input><br></br>
    <label>Password</label><br></br>
    <input type="password" name="password" value={password} onChange={handler} placeholder="Enter your Password" className="inputGroup"></input><br></br>
    <input type="checkbox" name="remember" value="rememberMe" ></input>
    <label>Remember me</label>
    <button className="forgot">Forgot Password?</button><br />
    
    <button className="btn btn-primary">LogIn</button>
    <hr></hr>
    
    <button className="btn btn-light">Continue wih Google</button>
    <div className="account">
    <p>Don't have an account?</p>
    <Link to="/signup" className="btnSign">SignUp</Link>
    </div>
    </div>
    </div>

    </>
)
}