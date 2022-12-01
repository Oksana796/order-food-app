import Modal from "../UI/Modal";
import "./Cart.css";

import React from "react";

const Cart = (props) => {
  const cartItems = (
    <ul className="cart-items">
      {[{ id: "c1", name: "Sushi", amoun: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
