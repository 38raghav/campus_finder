import Home from "./Pages/Home.jsx"
import Myposts from "./Pages/Myposts.jsx"
import Upload_Item from "./Pages/Upload_Item.jsx"
import Signup from "./Pages/Signup.jsx"
import Login from "./Pages/Login.jsx"
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from "./Component/Navbar"

function App() {

  return (
    <>
       <Navbar/>
       <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Myposts" element={<Myposts/>}/>
              <Route path="/Upload_Item" element={<Upload_Item/>} />
      </Routes>

    </>
  )
}

export default App
