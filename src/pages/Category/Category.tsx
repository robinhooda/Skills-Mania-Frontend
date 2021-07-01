import React from 'react'
import "./Category.css"
import CategoryHeroImage from "../../assets/images/Category.svg"
function Category() {
    return (
        <div className="Category">
            <h5 className="path">Home <i className="fas fa-chevron-right"></i> Category</h5>
            <img src={CategoryHeroImage} alt="category-hero-pic" className="category-hero--image" />
            <div className="category-list">
                <div className="category-card">
                    <h3>Category 1</h3>
                    <h2>HTML</h2>
                </div>
                <div className="category-card">
                <h3>Category 2</h3>
                    <h2>CSS</h2>
                </div>
                <div className="category-card">
                <h3>Category 3</h3>
                    <h2>Javascript</h2>
                </div>
            </div>
        </div>
    )
}

export default Category
