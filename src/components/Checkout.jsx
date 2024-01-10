import React from 'react';
import ShoppLogo from "../assets/shopping-cart-solid.svg"

export const Checkout = ({data}) => {

  const counter = data.filter((item) => {
    if(item.bought === true) {
      return item
    }
  })

  return (
    <>
    <div className='checkout'>
        <img src={ShoppLogo} />
        <span className='counter'>{counter.length}</span>
    </div>
    <a href="#">Выход</a>
    </>
  );
}