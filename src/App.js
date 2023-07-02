import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Flags from "./components/Flags";



function App() {
  return (
    
    <div className='bg-nwhite  dark:bg-nblack min-h-screen '>
      <Nav/>
     
<div  className=" 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto py-10">
<Routes>
        
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
</div>
    </div>
  );
}

export default App;
