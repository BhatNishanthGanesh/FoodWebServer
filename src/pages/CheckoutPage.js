import React,{useContext} from 'react';
import '../components/Checkout/Checkout.scss'
import {CategoryContext} from '../components/Category/CategoryList'
const CheckoutPage = () => {
  const { cartItems } = useContext(CategoryContext);
  console.log(cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      <div className="checkout-items">
        {cartItems?.map((item) => (
          <div className="checkout-item">
            <div className="item-image">
              <img src={item.thumbnail} alt={item.title} />
              </div>
            <div className="item-description">
              <span>{item.title}</span>
              </div>
            <div className="item-quantity">
              <span>1</span>
              </div>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        <span>Total: $0</span>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CheckoutPage;
