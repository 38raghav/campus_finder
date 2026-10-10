import Navbar from 'react-bootstrap/Navbar';
export const Header=()=>{
return(
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top" style={{backgroundColor:"#ffffff"}}>
        <Navbar.Brand>
            <i className="bi bi-geo-alt-fill me-2"></i>
            <span className='fw-bold'>Campus</span><br></br><span>Lost & Found</span>
        </Navbar.Brand>
 </Navbar>
)
}
 