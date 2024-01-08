import React from 'react';
import ShoppLogo from "../assets/shopping-cart-solid.svg"
import { useState } from 'react';

export const Checkout = ({data}) => {

  const [count, setCount] = useState(0)


  return (
    <>
    <div className='checkout'>
        <img src={ShoppLogo} />
        <span className='counter'>{count}</span>
    </div>
    <a href="#">Выход</a>
    </>
  );
}