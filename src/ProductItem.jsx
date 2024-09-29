import React from "react";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item p-4 border">
      <img src={product.imageSrc} alt={product.name} className="w-full h-48" />
      <h2 className="text-lg">{product.name}</h2>
      <p className="text-gray-700">฿{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="add-to-cart-btn bg-blue-500 text-white p-2 mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
