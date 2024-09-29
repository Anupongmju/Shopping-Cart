import React, { useState } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="shop-title">Cat Shop Market</h1>
        
        <button onClick={toggleCart} className="cart-button">
          {isCartOpen ? "Close Cart" : "Open Cart"}
        </button>
      </header>
      
      {/* ป้ายประกาศอยู่ใต้บาร์ด้านบน */}
      <div className="announcement-banner">
        <p>ใช้โค้ด "lovecat100" ลดทันที 100 บาท</p>
      </div>

      <ProductList addToCart={addToCart} />
      
      <div className={`shopping-cart ${isCartOpen ? "open" : ""}`}>
        <ShoppingCart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          toggleCart={toggleCart}
        />
      </div>
    </div>
  );
};

export default App;
