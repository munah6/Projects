import React from "react"
import "./Header.css"
import logo from '../images/doge.png';

export default function Header()
{
    return (
        <header>
            <img 
                src={logo}
                className="header--img"
            />

            <h2>Meme Generator</h2>
        </header>
    )
}