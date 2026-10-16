import {Header} from "./Component/Header"
import {Routes,Route} from 'react-router-dom';
import { Home } from "./Screen/Home";
import { UploadItems } from "./Screen/UploadItems";
import { MyPosts } from "./Screen/MyPosts";
import { LogIn } from "./Screen/LogIn/login";
import { SignUp } from "./Screen/SignUp/signup";
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/item" element={<UploadItems />}></Route>
      <Route path="/posts" element={<MyPosts />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
    </>
  )
}

export default App
