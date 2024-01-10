import React from 'react';
import { Button } from './Button';

// Content 
export const Content = ({data, setBought}) => {
  
// Cards
  return (
    <div className='content'>
      {data.map((product, index) => {
        return (
        <div className='card' key={index}>
          <div className="card-image">
            <img src={product.image}/>
          </div>
          <div className="card-info">
            <div className="card-name">{product.name}</div>
            <div className="card-price">{product.price}₽</div>

            <Button 
            index={index} 
            setBought={setBought} 
            item={product} />
          </div>
        </div>
        )
      })}
    </div>
  );
}