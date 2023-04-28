import React from 'react'
import'./feedCard.css'

export default function FeedCard({img, subtitle, title}) {
  return (
    <div className='feedNew'>
        <figure id='feedFig'>
          <img src={`img/${img}`} alt="" id='imgFeed'/>
          <figcaption id="feedFigCap">
            <p>{subtitle}</p>
            <h4>{title}</h4>
          </figcaption>
        </figure>
    </div>
  )
}