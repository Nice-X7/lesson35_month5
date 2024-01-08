import { useState } from "react"

export const Button = ({index, data, setData}) => {

    // Add to Basket
    const setBought = (ind) => {
      const addToBasket = data.map((item) => {
          if(ind === item.id) {
            return {
              ...item,
              bought: !item.bought
            }
          } else {
            return item
          }
      })
      setData(addToBasket)
    }




    console.log(data);

  return (
    <div className='card-button'>
      <button className='btn' onClick={() => setBought(index)}>Добавить в карзину</button>
    </div>
  );
}