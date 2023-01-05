import ReactDOM from "react-dom/client";
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Foods from "./components/pages/Foods.jsx";
import Cart from "./components/pages/Cart.jsx";
import ItemDetail from "./components/pages/ItemDetail";
export default function App() {
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    // Update cart item quantity if already in cart
    if (cart.some((cartItem) => cartItem.name === item.name)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                amount: cartItem.amount + 1
              }
            : cartItem
        )
      );
      return;
    }

    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
  };


  const handleChange = (name, d) => {
    setCart((cart) =>
      cart.flatMap((cartItem) =>
        cartItem.name === name
          ? cartItem.amount + d < 1
            ? [] // <-- remove item if amount will be less than 1
            : [
                {
                  ...cartItem,
                  amount: cartItem.amount + d
                }
              ]
          : [cartItem]
      )
    );
  };


  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="foods" element={<Foods  handleClick={handleClick}/>} />
          {/* <Route path="cart" element={<Cart />} /> */}
          <Route
          path="/itemDetail/:name/:price/:id"
          element={<ItemDetail handleClick={handleClick} />}
        />
          <Route path="/cart/" element={(<Cart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          )}
        />

        
      </Routes>
    </BrowserRouter>
  );
}
