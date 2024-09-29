import React from 'react';

const Product = ({ product, addToCart }) => {
    return (
        <div className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-xl">{product.price} บาท</p>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 rounded">
                เพิ่มในตะกร้า
            </button>
        </div>
    );
};

export default Product;
