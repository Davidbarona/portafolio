import React from 'react'
import Typed from 'react-typed'

export const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development and promotions</h1>
                <Typed
                className="typed-text"
                strings={["web design", "web-development", "electronic engineer"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <a href="#" className="btn-main-offer">Contact me </a>
            </div>

        </div>
    )
}
