import React from 'react';
import CartItem from "../cart/CartItem";

const CartList = ({ cartItems, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  const totalCartPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
       <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemoveFromCart={onRemoveFromCart} 
              onIncreaseQuantity={onIncreaseQuantity} 
              onDecreaseQuantity={onDecreaseQuantity}
            />
          ))
        ) : (
          <tr>
            <td colSpan="6">Your cart is empty.</td>
          </tr>
        )}
      </tbody>
    </table>
    <div>Total Price: ${totalCartPrice.toFixed(2)}</div>

    </div>
   
  );
};

export default CartList;
