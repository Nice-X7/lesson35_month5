import React from 'react';
import { Button } from './Button';

// Content 
export const Content = ({data, setData, setBought}) => {

// Product
  return (
    <div className='content'>
      {data.map((product, index) => {
        return (
        <div className='card'>

          <div className="card-image">
            <img src={product.image}/>
          </div>
          <div className="card-info">
            <div className="card-name">{product.name}</div>
            <div className="card-price">{product.price}₽</div>
            <Button index={index} data={data} setData={setData} setBought={setBought} item={product}/>
          </div>
          
        </div>
        )
      })}
    </div>
  );
}
