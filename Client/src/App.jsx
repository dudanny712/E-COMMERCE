import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
   
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        {user ? <Navigate  to="/" /> :
        <Route path="/login"   element={<Login/>}/>
  }
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;