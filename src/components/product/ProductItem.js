// // src/components/product/ProductItem.js
// import React from 'react';

// const ProductItem = ({ product }) => {
//   return (
//     <div className="product">
//       <img src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductItem;


import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
