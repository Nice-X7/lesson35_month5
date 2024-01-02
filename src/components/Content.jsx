import React from 'react';
import { Button } from './Button';

// useState
import { useState } from "react"

// Import images
import macbook from "../assets/mack-book-card-1.jpg"
import Galaxy from "../assets/Galaxy-card-2.jpg"
import Skuter from "../assets/skuter-card-3.jpg"
import SamsungTV from "../assets/samsung-Tv-card-4.jpg"
import Mask from "../assets/mask-card-5.jpg"
import WashMashine from "../assets/wasch-maschine-card-6.jpg"
import Holodilnik from "../assets/holodilnik-card-7.jpg"
import SubCard from "../assets/sub-card-8.jpg"
import Naushniki from "../assets/nauschniki-card-9.jpg"
import Video from "../assets/video-carta.png"

// Content 
export const Content = () => {
  const [database, setDatabace] = useState([
    {
      id: 1,
      name: "MacBook",
      price: 100000,
      bought: true,
      rating: 5,
      image: `${macbook}`
    },
    {
      id: 2,
      name: "Galaxy",
      price: 35999,
      bought: false,
      rating: 4,
      image: `${Galaxy}`
    },
    {
      id: 3,
      name: "Скутер",
      price: 65500,
      bought: false,
      rating: 5,
      image: `${Skuter}`
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      bought: false,
      rating: 3,
      image: `${SamsungTV}`
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: 500,
      bought: false,
      rating: 5,
      image: `${Mask}`
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      bought: false,
      rating: 3,
      image: `${WashMashine}`
    },
    {
      id: 7,
      name: "Белый холодильник",
      price: 43100,
      bought: false,
      rating: 5,
      image: `${Holodilnik}`
    },
    {
      id: 8,
      name: "Колонка",
      price: 3000,
      bought: false,
      rating: 4,
      image: `${SubCard}`
    },
    {
      id: 9,
      name: "Наушники",
      price: 1500,
      bought: false,
      rating: 5,
      image: `${Naushniki}`
    },
    {
      id: 10,
      name: "Видеокарта RTX 3060",
      price: 41000,
      bought: false,
      rating: 8,
      image: `${Video}`
    }
  ])


  return (
    <div className='content'>
      {database.map((product) => {
        return (
        <div className='card'>

          <div className="card-image">
            <img src={product.image}/>
          </div>
          <div className="card-info">
            <div className="card-name">{product.name}</div>
            <div className="card-price">{product.price}₽</div>
            <Button />
          </div>
          
        </div>
        )
      })}
    </div>
  );
}
