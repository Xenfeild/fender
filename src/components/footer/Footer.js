import React from 'react'
import './footer.css'
import ListCard from '../list-card/ListCard'
import { DataFooter } from '../../data/DataFooter'
import { TfiFacebook, TfiTwitterAlt, TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";

export default function Footer() {
  return (
    <footer>
        <div className='highHeader'>
          <div className='logo'>
            <img src="img/fender-3.svg" alt="" id="fender"/>
          </div>
          <div id='topHeader'>
            <h2>Ne ratez rien</h2>  
            <div>
              <p>Soyez le premier à être informé des nouveaux produits, contenus, offres exclusives et cadeaux.</p>
              <form>
                <input type="email" placeholder='ENTREZ VOTRE EMAIL' id='newsletter'/>
                <button>S'inscrire</button>
              </form>
            </div>
          </div>
        </div>
        <div className="midFooter">
        {DataFooter.map((data, index) => (
          <div key={index.id}>
            <ListCard
              contentTitle={data.contentTitle}
              content={data.content}
            />
          </div>
        ))}
      </div>
      <div id="mid2">
        <div id='localisation'>
          <img src="img/fr.svg" alt="" />
          <p>france</p>
        </div>
        <div className="socialLink">
          <TfiFacebook/>
          <TfiTwitterAlt/>
          <ImInstagram/>
          <TfiYoutube/>
        </div>
      </div>
      <div className="footerBottom">
        <div className="left">
          <p>Copyright ©2023. Fender Musical Instruments Corporation. All Rights Reserved.</p>
        </div>
        <div className="right">
        <div className="rLeft">
          <p>Politique de confidentialité</p>
          <p>Transparence de la chaîne d'approvisionnement</p>
          </div>
          <div className="rRight">
          <p>Conditions générales</p>
          <p>Déclaration d'accessibilité</p>
          <p>Droit de la concurrence</p>
        </div>
        </div>
      </div> 
    </footer>
  )
}
