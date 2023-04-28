// import React, { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import './navBar.css';
import { TfiLocationPin } from "react-icons/tfi";
import { BsBoxSeam } from "react-icons/bs";
// import './menu.js'

export default function Navbar() {
    // const[click, setClick] = useState(false);
    // const handleClick = () =>setClick(!click);
  return (
    
    <header>
        {/* top header */}
            <nav id="fenderApp">
                <div id='left'>   
                    <p>Fender.com</p>
                    <p>Play</p>
                    <p>Tune</p>
                    <p>Beginers</p>
                    </div>
                    <div id="right">
                    <p id='connect'><AiOutlineUser/> s'inscrire</p>
                </div>
            </nav>
            {/* mid header */}
            <div id="mid">
                <div id="svgs">
                    <img src="img/hamburger-menu.svg" alt="" id="menu_burger"/>
                    <img src="img/fender-guitars-logo.svg" alt="" id='fender'/>
                    {/* <i src="img/fender-guitars-logo.svg"></i> */}
                </div>
                <div>
                    <input type="search" placeholder='recherchez www.fender.com' id="search"/>
                </div>
                <div >
                    <AiOutlineShoppingCart id='iconLeft'/>
                    <TfiLocationPin/>
                </div>
            </div>
            {/* bottom header */}
            <nav id="shopApp">
                <p>mod shop</p>
                <p>guitars</p>
                <p>acoustasonic</p>
                <p>acoustique</p>
                <p>basses</p>
                <p>amplis</p>
                <p>pédales</p>
                <p>accessoires</p>
                <p>squier</p>
            </nav>
            {/* livraison */}
            <div id='livraison'>
                <BsBoxSeam/>
                <p><span>Livraison gratuite</span> à partir de 50€ d'achat</p>
            </div>
    </header>
  )
}
