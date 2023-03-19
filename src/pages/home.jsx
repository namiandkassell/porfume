import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";

import Header from "../components/Header/Header";
import cart from "../services/cart";

function Home(props) {
  function addToCart(productId) {
    cart.add(productId);

    alert(`продукт №${productId} добавлен`);
  }

  function removeFromCart(productId) {
    cart.remove(productId);

    alert(`продукт №${productId} удален`);
  }

  return (
    <div className="main_page">
      <Header />

      <div>
        <div>
          <h3>Product #1</h3>
          <button onClick={() => addToCart(1)}>Add</button>
          <button onClick={() => removeFromCart(1)}>Remove</button>
        </div>

        <div>
          <h3>Product #2</h3>
          <button onClick={() => addToCart(2)}>Add</button>
          <button onClick={() => removeFromCart(2)}>Remove</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
