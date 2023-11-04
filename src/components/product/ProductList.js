import React from 'react';
import ProductItem from "../product/ProductItem";
import "./ProductList.css"

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-item">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
