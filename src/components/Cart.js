import React from "react";

const Cart = ({ total }) => (
  <div className="cart-summary text-end pe-4 pb-4">
    <span className="cart-box">
      <strong>Cart Total: </strong>
      <span className="text-success fw-bold">₹{total}</span>
    </span>
  </div>
);

export default Cart;
