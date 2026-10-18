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
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
  },
  {
    id: 2,
    title: "House Keys",
    category: "Keys",
    location: "Academic Block",
    date: "2026-10-10",
    status: "Available",
    description: "A set of keys found near the academic block.",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800",
  },
  {
    id: 3,
    title: "Water Bottle",
    category: "Bottles",
    location: "Cafeteria",
    date: "2026-10-08",
    status: "Available",
    description: "Blue reusable water bottle found in the cafeteria.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
  },
  {
    id: 4,
    title: "Earphones",
    category: "Electronics",
    location: "Library",
    date: "2026-10-06",
    status: "Available",
    description: "White wireless earphones found near a study desk.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800",
  },
  {
    id: 5,
    title: "Student ID Card",
    category: "Documents",
    location: "Main Gate",
    date: "2026-10-05",
    status: "Returned",
    description: "Student identification card found near the main gate.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
  },
  {
    id: 6,
    title: "Notebook",
    category: "Stationery",
    location: "Academic Block",
    date: "2026-10-04",
    status: "Available",
    description: "A notebook left behind in a classroom.",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800",
  },
  {
    id: 7,
    title: "Backpack",
    category: "Bags",
    location: "Sports Ground",
    date: "2026-10-03",
    status: "Available",
    description: "Black backpack found near the sports ground.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
  },
  {
    id: 8,
    title: "Smartphone",
    category: "Electronics",
    location: "Cafeteria",
    date: "2026-10-02",
    status: "Available",
    description: "Smartphone found on a cafeteria table.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  },
  {
    id: 9,
    title: "Wrist Watch",
    category: "Accessories",
    location: "Library",
    date: "2026-10-01",
    status: "Available",
    description: "Wristwatch found near the library entrance.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
  },
  {
    id: 10,
    title: "Umbrella",
    category: "Personal Items",
    location: "Parking Area",
    date: "2026-09-29",
    status: "Returned",
    description: "Foldable umbrella found in the parking area.",
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800",
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
    <div style={{
      width: "100%",
      maxWidth: "1700px",
      margin: "0 auto",
      padding: "clamp(12px, 3vw, 32px)",
      
    }}>


      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "clamp(16px, 3vw, 32px)",
        marginBottom: "clamp(24px, 4vw, 40px)",
        padding: "clamp(16px, 4vw, 48px)",
        backgroundColor: "rgb(237, 246, 246)",
        borderRadius: "20px",
        alignItems: "center",
        
      }}>

       
        <div style={{
          flex: "1 1 320px",
          minWidth: 0,
          
        }}>

          <div style={{
            width: "100%",
            maxWidth: "650px",
            marginBottom: "clamp(16px, 3vw, 24px)"
          }}>
            <h1 style={{
              fontSize: "clamp(28px, 5vw, 56px)",
              lineHeight: 1.15,
              fontWeight: 700,
              color: "#193f73",
              margin: 0,
             
            }}>
              Lost Something on Campus?
            </h1>
          </div>

          <div style={{
            width: "100%",
            maxWidth: "600px",
            marginBottom: "clamp(20px, 3vw, 28px)"
          }}>
            <h5 style={{
              fontSize: "clamp(14px, 1.5vw, 20px)",
              lineHeight: 1.7,
              fontWeight: 400,
              color: "#5d6b7e",
              margin: 0
            }}>
              Find lost items or return something you found.
              Let's make our campus a safer and kinder place!
            </h5>
          </div>

          
          <div style={{
            display: "flex",
            width: "100%",
            gap: "8px",
            marginBottom: "16px"
          }}>
            <input
              style={{
                flex: 1,
                minWidth: 0,
                padding: "clamp(10px, 1.5vw, 16px)",
                fontSize: "clamp(12px, 1.2vw, 16px)",
                border: "1px solid #d9e0ea",
                borderRadius: "12px",
                outlineColor: "#0d6efd",
                
              }}
              placeholder="Search for items (e.g., wallet, keys, bottle...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={handleSearch}
              style={{
                backgroundColor: "#0d6efd",
                color: "white",
                minWidth: "48px",
                padding: "10px 14px",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                flexShrink: 0,
                fontSize: "18px"
              }}
            >
              🔍
            </button>
          </div>

        
          <Form.Select
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "12px",
              fontSize: "clamp(13px, 1.2vw, 16px)",
              borderRadius: "12px",
              borderColor: "#d9e0ea",
              cursor: "pointer"
            }}
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
          flex: "1 1 240px",
          minWidth: 0,
          minHeight: "clamp(200px, 30vw, 350px)",
          backgroundColor: "black",
          borderRadius: "16px"
        }}>
        </div>
      </div>

   
      <div>
        <h2 style={{
          fontSize: "clamp(22px, 2.5vw, 32px)",
          fontWeight: 700,
          color: "#193f73",
          marginBottom: "clamp(16px, 3vw, 24px)"
        }}>
          Recent Found Items
        </h2>

        <Row className="g-3 g-md-4">
          {cardsData.map((item) => {
            return (
              <Col key={item.id} xs={6} sm={6} md={4} xl={3}>

                <Card
                  className="h-100"
                  style={{
                    width: "100%",
                    border: "1px solid #e5eaf0",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(20, 50, 90, 0.08)"
                  }}
                >
                  <div style={{
                    position: "relative",
                    width: "100%"
                  }}>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "100%",
                        height: "clamp(120px, 18vw, 230px)",
                        objectFit: "cover",
                        display: "block"
                      }}
                      src={item.image}
                    />

                    <span style={{
                      position: "absolute",
                      backgroundColor: item.status === "Available"
                        ? "#20a464"
                        : "#e89a16",
                      color: "white",
                      top: "10px",
                      right: "10px",
                      padding: "5px 9px",
                      borderRadius: "8px",
                      fontSize: "clamp(10px, 1vw, 14px)",
                      fontWeight: 600
                    }}>
                      {item.status}
                    </span>
                  </div>

                  <Card.Body style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "clamp(10px, 1.5vw, 16px)"
                  }}>
                    <Card.Title style={{
                      fontSize: "clamp(13px, 1.4vw, 19px)",
                      fontWeight: 700,
                      color: "#172b4d",
                      overflowWrap: "break-word",
                      marginBottom: "10px"
                    }}>
                      {item.title}
                    </Card.Title>

                    <Card.Text style={{
                      fontSize: "clamp(11px, 1.1vw, 15px)",
                      color: "#637187",
                      marginBottom: "8px",
                      overflowWrap: "anywhere"
                    }}>
                      📍 {item.location}
                    </Card.Text>

                    <Card.Text style={{
                      fontSize: "clamp(10px, 1vw, 14px)",
                      color: "#637187",
                      marginBottom: "16px"
                    }}>
                      📅 {item.date}
                    </Card.Text>

                    <Button
                      variant="primary"
                      className="mt-auto w-100"
                      style={{
                        borderRadius: "8px",
                        padding: "clamp(7px, 1vw, 11px)",
                        fontSize: "clamp(11px, 1.1vw, 15px)",
                        fontWeight: 600,
                        border: "none"
                      }}
                    >
                      View Details
                    </Button>
                  </Card.Body>
                </Card>

              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Home;