import React from 'react'
import './homePage.css'
import Layout from '../components/layout/Layout'


export default function ProductPage() {
  return (
    <div>
      <Layout>
        <hr />
        <h2>Product Name</h2>
        <p>model number</p>
        <img src="" alt="" />
        <div className='detailInfo'>
          <div className="colorChoice">
            <p>title</p>
            <p>colorName</p>
          </div>
          <div className="fingerboardChoice">
            <p>title</p>
            <p>boardName</p>
          </div>
          <dir className='price'>
            <p>price</p>
          </dir>
          <div className="delivery">
            <p>en stock</p>
            <p>disponible</p>
          </div>
          <button>Ajouter au panier</button>
          <div className="descriptionProduct">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe earum, placeat voluptatum dicta voluptas cupiditate a quidem asperiores consectetur repellendus maxime aliquid, adipisci voluptatem, totam dolor? Ullam aliquid saepe culpa?</p>
            <div className="characteritics">
              <h3>caractéristiques</h3>
              <div className="CharacList">
                <hr />
                <ul>
                  <li>lorem ipsum</li>
                  <li>dolor sit ame</li>
                  <li>consectetur adipisicing</li>
                  <li>Saepe earum</li>
                  <li>voluptatum dicta</li>
                </ul>
                <iframe src="https://www.youtube.com/embed/_caRd5BNocM?enablejsapi=1&origin=https%3A%2F%2Fwww.fender.com&widgetid=1" frameborder="0"/>
              </div>
            </div>
          </div>
        </div>
        </Layout>
    </div>
  )
}
