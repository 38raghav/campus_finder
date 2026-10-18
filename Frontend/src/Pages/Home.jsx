import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from "react-bootstrap/Form";
import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const cardsData = [
  {
    id: 1,
    title: "Black Wallet",
    category: "Accessories",
    location: "Library",
    date: "2026-10-12",
    status: "Available",
    description: "Black leather wallet with multiple card slots.",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
  },
  {
    id: 2,
    title: "House Keys",
    category: "Keys",
    location: "Academic Block",
    date: "2026-10-10",
    status: "Available",
    description: "A set of keys found near the academic block.",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800",
  },
  {
    id: 3,
    title: "Water Bottle",
    category: "Bottles",
    location: "Cafeteria",
    date: "2026-10-08",
    status: "Available",
    description: "Blue reusable water bottle found in the cafeteria.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
  },
  {
    id: 4,
    title: "Earphones",
    category: "Electronics",
    location: "Library",
    date: "2026-10-06",
    status: "Available",
    description: "White wireless earphones found near a study desk.",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800",
  },
  {
    id: 5,
    title: "Student ID Card",
    category: "Documents",
    location: "Main Gate",
    date: "2026-10-05",
    status: "Returned",
    description: "Student identification card found near the main gate.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
  },
  {
    id: 6,
    title: "Notebook",
    category: "Stationery",
    location: "Academic Block",
    date: "2026-10-04",
    status: "Available",
    description: "A notebook left behind in a classroom.",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800",
  },
  {
    id: 7,
    title: "Backpack",
    category: "Bags",
    location: "Sports Ground",
    date: "2026-10-03",
    status: "Available",
    description: "Black backpack found near the sports ground.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    id: 8,
    title: "Smartphone",
    category: "Electronics",
    location: "Cafeteria",
    date: "2026-10-02",
    status: "Available",
    description: "Smartphone found on a cafeteria table.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  },
  {
    id: 9,
    title: "Wrist Watch",
    category: "Accessories",
    location: "Library",
    date: "2026-10-01",
    status: "Available",
    description: "Wristwatch found near the library entrance.",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
  },
  {
    id: 10,
    title: "Umbrella",
    category: "Personal Items",
    location: "Parking Area",
    date: "2026-09-29",
    status: "Returned",
    description: "Foldable umbrella found in the parking area.",
    image:
      "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800",
  },
];





function Home() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const handleSearch = () => {
    console.log("Search item:", search);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
    console.log("Selected option:", e.target.value);
  };

  return (
    < div style={{margin:"100px"}}>
    <div style={{display:"flex", margin:"50px" ,backgroundColor:"rgb(237, 246, 246)"}}>
      <div style={{
      width: "60%",
      height: "400px",
      
      
      padding: "20px",
     
      boxSizing: "border-box",
    }}>
        <h1 style={{fontSize:"250%"}}>Lost Something</h1>
        <h1 style={{fontSize:"250%"}}>on Campus?</h1>

        <h5 style={{fontSize:"100%"}}>Find lost items or return something you found.</h5>
        <h5 style={{fontSize:"100%"}}>Let's make our campus a safer and kinder place!</h5>

        <input
          style={{ height: "10%", width: "70%" }}
          placeholder="Search for items (e.g., wallet, keys, bottle...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={handleSearch}
          style={{ backgroundColor: "blue", height: "10%" }}
        >
          🔍
        </button>

        <Form.Select
        style={{width:"60%", marginTop:"5%"}}
          value={selected}
          onChange={handleChange}
          aria-label="Default select example"
        >
          <option value="">All Location</option>
          <option value="Libray">Libray</option>
          <option value="Academic Block">Academic Block</option>
          <option value="Cafeteria">Cafeteria</option>
        </Form.Select>
      </div>
      <div style={{
      width: "40%",
      maxHeight: "350px",
      backgroundColor:"black",
     
     
      flexShrink: 0,
    }}>

      </div>
      
    </div>
    <div >
        <h2 style={{fontSize:"200%"}}>Recent Found Items</h2>
        <div >
          <Row className="g-1" >
         {

          cardsData.map((item)=>{
            return( <Col key={item.id}  xs={12} sm="6" md="4"  >
            
              <Card  className="mb-5" style={{ width: '80%',height:"27rem", margin:"0"}}>
      <Card.Img variant="top" style={{height:"250px" ,position: "relative"}} src={item.image} />
      <span style={{position: "absolute" ,backgroundColor: item.status === "Available" ? "#198754" : "#dc3545",color:"white", top:"3%", right:"3%" ,padding:"1%", borderRadius:"10%"}}>{item.status}</span>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          📍{item.location}
        </Card.Text>
        <Card.Text>
          📅{item.date}
        </Card.Text>

        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
          
              </Col>)


          })
         }
         </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
