import React from "react"
import '../pages/landing/Header.scss';

function Header() {

    return (
           <header id="header">
                <div id="header__border"></div>
                <div id="header__outer-border"></div>
                
                <img src="/headers/artemisia.png" alt="" className="header__img"/>
                <div id="cta">
                   <h1>Galleria</h1> 
                </div>
                
            </header>
    ) 
}

export default Header