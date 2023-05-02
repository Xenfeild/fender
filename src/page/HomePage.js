import React from 'react'
import './homePage.css'
import Layout from '../components/layout/Layout'
import { DataNewProduct } from '../data/DataNewProduct'
import NewProductCard from '../components/home-cards/NewProductCard'
import { DataProduct } from '../data/DataProduct'
import ProductCard from '../components/home-cards/ProductCard'
import { DataFenderFeed } from '../data/DataFenderFeed'
import FeedCard from '../components/home-cards/FeedCard'
import { DataAccessories } from '../data/DataAccessories'

export default function HomePage() {
  return (
    <div>
      <Layout>
        {/* hero image */}
        <div className="hero">
          <img src="/img/Web_Fender_0417_22_NEW_PlayerPlus_HomepageSlide_DESKTOP.jpg" alt="" id='hero'/>
        </div>
        {/* div new Product */}
        <div className="newProduct">
          {DataNewProduct.map((data,index) => (
            <div key={index.data}>
            <NewProductCard
            img={data.img}
            figTitle={data.figTitle}
            figDesc={data.figDesc}
            />
          </div>
          ))}
        </div>
        {/* div product */}
        <div className="productList">
            <div className="heading">
              <hr />
              <h3>Quoi de neuf?</h3>
            </div>
            <div className='product'>
            {DataProduct.map((data,index) =>(
              <div key={index.data}>
              <ProductCard
              img={data.img}
              name={data.name}
              price={data.price}
              color={data.color}
              />
                  <hr />
              </div>
            ))}
            </div>
            {/* div fender feed */}
            <div className="fenderFeed">
              <div className="">
                <figure id="topFeedFig">
                  <figcaption id="TopFeedFigCapt">
                    <p>fender feed</p>
                  </figcaption>
                </figure>
              </div>
              {DataFenderFeed.map((data,index) =>(
                <div key={index.data}>
                  <FeedCard
                  img={data.img}
                  subtitle={data.subtitle}
                  title={data.title}
                  />
                </div>
              ))}
            </div>
            {/* accesories */}
            <div className="productList">
              <div className="heading">
                <hr id='transition'/>
                <h3>Accessories</h3>
              </div>
            <div className="product">
            {DataAccessories.map((data,index) =>(
              <div key={index.data}>
                <ProductCard
                img={data.img}
                name={data.name}
                price={data.price}
                color={data.color}
                />
              </div>
            ))}
            </div>
          </div>
        </div>
        </Layout>
    </div>
  )
}
