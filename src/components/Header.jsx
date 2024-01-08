// React import 
import React from 'react';

// import header components
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Checkout } from './Checkout';

// Header
export const Header = ({data}) => {
  return (
    <div className='header'>
      <Logo />
      <Menu />
      <Checkout data={data}/>
    </div>
  );
}
