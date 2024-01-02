// React import 
import React from 'react';

// import header components
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Checkout } from './Checkout';

// Header
export const Header = ({data, setData}) => {
  return (
    <div className='header'>
      <Logo />
      <Menu />
      <Checkout data={data} setData={setData}/>
    </div>
  );
}
