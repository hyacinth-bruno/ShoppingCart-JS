// import React from 'react';

// const CartItem = ({ item, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
//   // Calculate total price for this item based on the quantity
//   const totalPrice = item.price * item.quantity;

//   return (
//     <tr>
//       <td>{item.id}</td>
//       <td>{item.title}</td>
//       <td><img src={item.image} alt={item.title} style={{ width: '50px' }} /></td>
//       <td>
//         <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
//         {item.quantity}
//         <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
//       </td>
//       <td>${totalPrice.toFixed(2)}</td>
//       <td>
//         <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
//       </td>
//     </tr>
//   );
// };

// export default CartItem;



import React from 'react';

const CartItem = ({ item, onRemoveFromCart, onIncreaseQuantity, onDecreaseQuantity }) => {
  const totalPrice = item.price * item.quantity;

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td><img src={item.image} alt={item.title} style={{ width: '50px' }} /></td>
      <td>
        <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
        {item.quantity}
        <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
      </td>
      <td>${totalPrice.toFixed(2)}</td>
      <td>
        <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
      </td>
    </tr>
  );
};

export default CartItem;
