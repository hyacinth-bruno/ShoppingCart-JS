// import React from "react";

// export default function Cart() {
//   return <div>Cart</div>;
// }


import React from "react";
import CartList from "../components/cart/CartList";

const Cart = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <CartList 
      cartItems={cartItems} 
      onRemoveFromCart={onRemoveFromCart} 
      onIncreaseQuantity={onIncreaseQuantity} 
      onDecreaseQuantity={onDecreaseQuantity} 
    />
  );
};

export default Cart;
