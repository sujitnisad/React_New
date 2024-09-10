import { Routes, Route } from "react-router-dom";
import ProductList from "./Pages/productList/ProductList";
import CartList from "./Pages/cartList/CartList";
import ProductDetails from "./Pages/productDetails/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/CartList" element={<CartList />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
