import React from 'react'
import './newProductCard.css'

export default function NewProductCard({img, figTitle, figDesc}) {
  return (
    <div className='cardNew'>
        <figure id='newFig'>
          <img src={`img/${img}`} alt="" id='imgCard'/>
          <figcaption id="newFigCap">
            <h4>{figTitle}</h4>
            <p>{figDesc}</p>
          </figcaption>
        </figure>
    </div>
  )
}
