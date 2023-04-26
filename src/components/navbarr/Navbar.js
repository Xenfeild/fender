import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import './navBar.css';
import { TfiLocationPin } from "react-icons/tfi";

export default function Navbar() {
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
                <div>
                    <img src="img/fender-guitars-logo.svg" alt="" width="70px"/>
                </div>
                <div>
                    <input type="search" />
                </div>
                <div>
                    <img src="" alt="" />
                    <AiOutlineShoppingCart/>
                    <TfiLocationPin/>
                </div>
            </div>
            <nav>
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
    </header>
  )
}
