import React from 'react'
import './productCard.css'

export default function ProductCard({img,name,price,color, link}) {
  return (
    <div className='productCard'>
        <a href="/product">
        <img src={`img/${img}`} alt="" />
        <div className="name">
            <p>{name}</p>
        </div>
        <div className='info'>
            <p>{price}</p>
            <p>{color}</p>
        </div>
        </a>
    </div>
  )
}
