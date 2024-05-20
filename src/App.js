// import React, { useState } from 'react';
// import Home from './pages/Home';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CartList from './components/cart/CartList';
// import NavBar from './components/navbar/NavBar';


// const App = () => {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => {
//       const isProductInCart = prevCart.find((item) => item.id === product.id);
//       if (isProductInCart) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const handleRemoveFromCart = (productId) => {
//     setCart((prevCart) => {
//       return prevCart.filter((item) => item.id !== productId);
//     });
//   };

//   const handleIncreaseQuantity = (productId) => {
//     setCart((prevCart) => {
//       return prevCart.map((item) => 
//         item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       );
//     });
//   };

//   const handleDecreaseQuantity = (productId) => {
//     setCart((prevCart) => {
//       return prevCart.map((item) => {
//         if (item.id === productId) {
//           // Ensures quantity doesn't go below 1
//           const newQuantity = item.quantity - 1 > 0 ? item.quantity - 1 : 1;
//           return { ...item, quantity: newQuantity };
//         }
//         return item;
//       });
//     });
//   };

//   return (
//     <div>
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
//           <Route path="/cart" element={
//             <CartList 
//               cartItems={cart} 
//               onRemoveFromCart={handleRemoveFromCart} 
//               onIncreaseQuantity={handleIncreaseQuantity} 
//               onDecreaseQuantity={handleDecreaseQuantity} 
//             />
//           } />
//           {/* Add other routes here */}
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/navbar/NavBar';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleIncreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1 > 0 ? item.quantity - 1 : 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              onRemoveFromCart={handleRemoveFromCart}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

