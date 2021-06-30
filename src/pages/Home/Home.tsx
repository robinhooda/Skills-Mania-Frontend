import React from 'react'
import TestSVG from "../../assets/images/test.svg"
import "./Home.css"
function Home() {
    return (
        <header className="header">
            <div>
                <img src={TestSVG} alt="test-pic" className="hero-image" />
            </div>
            <div className="header-content">
                <h2>Test your programming skills</h2>
                <button className="primary-button large-button">
                    Explore categories 
                    <i className="fas fa-arrow-right pad-l-sm"></i>
                </button>
            </div>
        </header>
    )
}

export default Home
