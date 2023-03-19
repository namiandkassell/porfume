import React, { useState, useEffect } from "react";
import cart from "../services/cart";

function Cart(props) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart.getForCurrentUser());
  }, []);

  return (
    <div>
      <h1>Корзина</h1>

      <div>
        Your cart <br />
        {cartItems.length === 0 ? (
          <span>Корзина пуста</span>
        ) : (
          <div style={{ display: "flex", gap: "16px" }}>
            {cartItems.map((x) => (
              <span>Your cart product #{x.productId}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;