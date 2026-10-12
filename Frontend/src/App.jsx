
import Home from "./Pages/Home"
import Myposts from "./Pages/Myposts"
import Upload_Item from "./Pages/Upload_Item"
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from "./Component/Navbar"
function App() {

  return (
    <>
       <Navbar/>
       <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/Login" element={<Login />} /> */}
              <Route path="/Myposts" element={<Myposts/>}/>
              <Route path="/Upload_Item" element={<Upload_Item/>} />
      </Routes>

    </>
  )
}

export default App
