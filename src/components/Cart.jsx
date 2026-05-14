import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} is in your cart.
        </p>
      ))}

      <h3>Total Items: {cart.length}</h3>
    </div>
  )
}

export default Cart
