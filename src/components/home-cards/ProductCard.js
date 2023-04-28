import React from 'react'
import './productCard.css'

export default function ProductCard({img,name,price,color}) {
  return (
    <div className='productCard'>
        {/* <figure id='productFig'>
            <figcaption id='productFigCapt'>
                <p>NEW</p>
            </figcaption> */}
        <img src={`img/${img}`} alt="" />
        {/* </figure> */}
        <div className="name">
            <p>{name}</p>
        </div>
        <div className='info'>
            <p>{price}</p>
            <p>{color}</p>
        </div>
    </div>
  )
}
