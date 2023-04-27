import React from 'react'
import'./listCard.css'



export default function ListCard({contentTitle, content}) {
  return (
    <div className='card'>
      <ul>
        <li className='title'>{contentTitle}</li>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
