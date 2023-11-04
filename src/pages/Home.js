import React, { useState, useEffect } from 'react';
import ProductList from '../components/product/ProductList';
import axios from 'axios';

const Home = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Home;
