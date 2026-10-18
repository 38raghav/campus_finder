import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import {NavLink} from "react-router-dom"
import Button from 'react-bootstrap/Button';
export const Header=()=>{
return(
    <Navbar expand="lg" sticky="top" style={{backgroundColor:"#163B70"}}>
        <Navbar.Brand>
            <img src="/map.png" style={{width:"50px",height:"50px",justifySelf:"center",position:"relative"}}></img>
            <span className='fw-bold' style={{position:"absolute",top:"20%",color:"white"}}>Campus</span><br></br><small style={{marginLeft:"40px",position:"absolute",top:"50%",color:"white"}}>Lost & Found</small>
        </Navbar.Brand>
        <Nav className='me-auto' style={{marginLeft:"20%"}}>
            <Nav.Link as={NavLink} to="/" style={{color:"white",marginLeft:"10%"}}>Home</Nav.Link>
        <Nav.Link as={NavLink} to="/item" style={{color:"white",marginLeft:"10%"}}>UploadItem</Nav.Link>
        <Nav.Link as={NavLink} to="/posts" style={{color:"white",marginLeft:"10%"}}>MyPosts</Nav.Link>
        <Nav.Link as={NavLink} to="/login" style={{color:"white",marginLeft:"10%"}}>LogIn</Nav.Link>
        </Nav>
        <Button style={{width:"10%"}}>SignUp</Button>
 </Navbar>
)
}
 