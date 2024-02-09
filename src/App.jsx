import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar"
import Home from "../src/pages/Home"
import Cart from "../src/pages/Cart"


const App = () => {
  return (
    <div>

           <div>
                <Navbar></Navbar>
                
                
           </div>

           <Routes>
                 <Route path="/" element={<Home></Home>}></Route>
                 <Route path="/cart" element={<Cart></Cart>}></Route>
           </Routes>
    </div>
  );
};

export default App;
