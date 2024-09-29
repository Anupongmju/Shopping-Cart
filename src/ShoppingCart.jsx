import React, { useState } from "react";

const ShoppingCart = ({
  cartItems,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCart // รับ props toggleCart มาจาก App เพื่อให้ปิด cart ได้
}) => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shippingCost = 100;

  const handleApplyCoupon = () => {
    if (couponCode === "lovecat100") {
      setDiscount(100);
    } else {
      alert("Invalid coupon code");
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const finalPrice = totalPrice + shippingCost - discount;

  return (
    <div className="shopping-cart-content p-4">
      {/* เพิ่มปุ่มปิดด้านบน */}
      <div className="flex justify-between items-center mb-4">
        <h2>Shopping Cart</h2>
        <button onClick={toggleCart} className="bg-red-500 text-white p-2">
          Close
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item flex justify-between">
              <div>
                <h3>{item.name}</h3>
                <p>฿{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="coupon-section mt-4">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="p-2 border"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-green-500 text-white p-2 ml-2"
            >
              Apply Coupon
            </button>
          </div>
          <div className="cart-summary mt-4">
            <p>Subtotal: ฿{totalPrice}</p>
            <p>Shipping: ฿{shippingCost}</p>
            <p>Discount: ฿{discount}</p>
            <p>Total: ฿{finalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
