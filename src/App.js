import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Shop from "./Pages/Shop";
import ScrollToTop from "./Components/ScrollToTop";
import Cart from "./Pages/Cart";
import ItemDetail from "./Pages/ItemDetail";
import ItemPage from "./Pages/ItemPage";
import PaymentGateway from "./Pages/PaymentGateway";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="shop" element={<Shop />} />
            <Route path="itempage" element={<ItemPage />} />
            <Route path="/paygate" element={<PaymentGateway cart={cart} />} />

            <Route path="item/:id" element={<ItemDetail cart={cart} setCart={setCart} />} />
            <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
