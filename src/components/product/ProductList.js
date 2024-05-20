// import React from 'react';
// import ProductItem from "../product/ProductItem";
// import "./ProductList.css"

// const ProductList = ({ products, onAddToCart }) => {
//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;


import React from 'react';
import ProductItem from "./ProductItem";
import "./ProductList.css";

const ProductList = ({ products, onAddToCart }) => {
  if (!products.length) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;

