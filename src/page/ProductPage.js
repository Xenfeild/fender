import React from 'react'
import './homePage.css'
import Layout from '../components/layout/Layout'
import './productPage.css'
import { BsBoxSeam } from "react-icons/bs";


export default function ProductPage() {
  return (
    <div>
      <Layout>
        <div className='visualProduct'>
          <div className="topProduct">
            <div className="infoProduct">
              <div className='new'>
                <p>nouveau</p>
              </div>
              {/* title product */}
            <h2>SQUIER SONIC™ STRATOCASTER® HT</h2>
            <p>Modèle n° : 0373250558</p>
            {/* product images */}
            <img src="img/squier horizontal.jpg" alt="" />
            <div className='imgList'>
              <img src="img/0373250558_sqr_ins_frt_1_rr (2).jpg" alt="" className='mini'/>
              <img src="img/0373250558_sqr_ins_bck_1_rl (1).jpg" alt="" className='mini'/>
              <img src="img/0373250558_sqr_ins_fbd_1_nr (1).jpg" alt="" className='mini'/>
              <img src="img/0373250558_sqr_ins_cbr_1_nr (1).jpg" alt="" className='mini'/>
              <img src="img/0373250558_sqr_ins_hft_1_nr (1).jpg" alt="" className='mini'/>
              <img src="img/0373250558_sqr_ins_hbk_1_nr (1).jpg" alt="" className='mini'/>
            </div>
            </div>
            {/* details choices */}
            <div className='detailInfo'>
              <div className="colorInformation">
                <p><span>color</span></p>
                <p>Torino Red</p>
                <div className="colorChoice">
                  <img src="img/torino-red.png" alt="" />
                  <img src="img/arctic-white.png" alt="" />
                </div>

              </div>
              <div className="fingerBoard">
                <p><span>FINGERBOARD MATERIAL</span></p>
                <p>Indian Laurel</p>
                <div className="fingerBoardChoice">
                    <img src="img/indian laurel.png" alt="" />
                </div>
              </div>
              <dir className='price'>
                <p><span>199,99 €</span></p>
              </dir>
              <div className="delivery">
                <p><span><BsBoxSeam/> En stock</span></p>
                <p>disponible</p>
              </div>
              <br />
              <button>Ajouter au panier</button>
            </div>
          </div>
          {/* product description */}
          <div className="descriptionProduct">
            <p>La Squier Sonic™ Stratocaster® HT permet aux guitaristes de tous niveaux de retrouver le style mythique et le son inspirant de Fender. Si vous souhaitez vous lancer dans une nouvelle aventure musicale sans perdre un instant, elle n’attend que vous. Cette Strat® présente un profil de manche fin en ”C” très agréable, un corps mince et léger qui garantit un confort de jeu optimal, ainsi qu’un trio de micros Squier® à simples bobinages dont le timbre clair et brillant sera parfait, quel que soit le son que vous recherchiez. Ce modèle dispose également d’un chevalet fixe (HT) à six pontets qui garantit une intonation impeccable, de mécaniques scellées permettant d’accorder la guitare tout en douceur, et d’un accastillage chromé particulièrement résistant qui fera sensation sous les projecteurs.</p>
            {/* product characteristics */}
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
              </div>
              {/* presentation video*/}
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/_caRd5BNocM?enablejsapi=1&origin=https%3A%2F%2Fwww.fender.com&widgetid=1" frameborder="0" title='presentation'/>
            </div>
            <div className="other">
              <button>faits marquants</button>
              <button>faits marquants</button>
              <button>faits marquants</button>
              <div className="otherList">
                <div className="otherListSec"> 
                  <ul>
                    <li><span>CHEVALET FIXE À 6 PONTETS</span></li>
                    <hr />
                    <li>Un chevalet fixe à six pontets garantit un jeu optimal car il permet de régler individuellement la hauteur et l’intonation de chaque corde.</li>
                  </ul>
                </div>
                <div className="otherListSec">
                  <ul>
                    <li><span>MICROS SQUIER À SIMPLES BOBINAGES</span></li>
                    <hr />
                    <li>Ces micros Squier à simples bobinages ont été réglés chez Fender. Ils produisent un son puissant et précis qui convient à des styles musicaux très divers.</li>
                  </ul>
                  </div>
                <div className="otherListSec">
                  <ul>
                    <li><span>MÉCANIQUES MOULÉES/SCELLÉES</span></li>
                    <hr />
                    <li>Les mécaniques moulées/scellées ont une action fluide qui permet d’accorder la guitare avec une grande précision.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Layout>
    </div>
  )
}
