import React from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Cat Toy", price: 200, imageSrc: "https://m.media-amazon.com/images/I/715EiqpJ6XL.jpg" },
  { id: 2, name: "Cat Food", price: 500, imageSrc: "https://down-th.img.susercontent.com/file/dae3fe4f89c75b7760b0cc305a8b4c9b" },
  { id: 3, name: "Cat Bed", price: 800, imageSrc: "https://th-test-11.slatic.net/p/cb8cde5d458d5c7194665f48a3ae11cc.jpg" },
  { id: 4, name: "Cat Collar", price: 150, imageSrc: "https://i.ebayimg.com/images/g/WW8AAOSws4Rh5R3S/s-l1200.jpg" },
  { id: 5, name: "Cat Litter", price: 300, imageSrc: "https://shop.smallpetselect.com/cdn/shop/products/Cat-Litter-Pellet-Litter-Angle-5copy_2000x.jpg?v=1690550829" },
  { id: 6, name: "Cat Scratcher", price: 600, imageSrc: "https://i5.walmartimages.com/asr/58944de0-517a-4413-b144-11a56042541c_1.1756d84022146b9d637308ba423be184.jpeg" },
  { id: 7, name: "Cat Brush", price: 100, imageSrc: "https://m.media-amazon.com/images/I/71qfz1I1S+L._AC_UF1000,1000_QL80_.jpg" },
  { id: 8, name: "Cat Shampoo", price: 120, imageSrc: "https://www.petsuka.com/wp-content/uploads/2020/08/shampoo-cat-600x600.png" },
  { id: 9, name: "Cat Carrier", price: 1000, imageSrc: "https://m.media-amazon.com/images/I/81ST1RmTF-L._AC_UF1000,1000_QL80_.jpg" },
  { id: 10, name: "Cat House", price: 2000, imageSrc: "https://m.media-amazon.com/images/I/71NlI2zcHiL._AC_SL1500_.jpg" },
  { id: 11, name: "Find cat", price: 2500, imageSrc: "https://buddiespetshop.com/cdn/shop/files/buddies-pet-shop-pet-collars-harnesses-furryfind-airtag-pet-collar-40637448683759.png?v=1714136591" },
  { id: 12, name: "Cat treat", price: 300, imageSrc: "https://catit.us/cdn/shop/files/fzrjy5i5sy5wkud0oqzy.jpg?v=1712772479&width=1946" }
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
