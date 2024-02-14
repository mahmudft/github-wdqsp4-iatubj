import React, { PureComponent } from 'react';
import '../styles.css';

function CartItem() {
  const { title, price } = props;
  return (
    <div className="cart-item">
      <p className="cart-item__title">{title}</p>
      <p className="cart-item__price">{price}.00$</p>
    </div>
  );
}

export default CartItem;
