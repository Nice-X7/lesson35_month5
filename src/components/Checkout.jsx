import React from 'react';
import ShoppLogo from "../assets/shopping-cart-solid.svg"

export const Checkout = ({data, setData}) => {

  return (
    <>
    <div className='checkout'>
        <img src={ShoppLogo} />
        <span className='counter'>0</span>
    </div>
    <a href="#">Выход</a>
    </>
  );
}