import React from 'react'

function SliderHero() {
    return (
        <div>
            <section className="slider-hero">
                <div className="slider-home-1 owl-carousel owl-theme">
                    <div className="hero-section item" >
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-xl-6">
                                    <div className="featured-area">
                                        <h2>The Perfect Space to Enjoy Fantastic Food</h2>
                                        <h5>The animal world contains diversity and richness, from small species to magnificent wild creatures</h5>
                                        <div className="d-md-flex align-items-center">
                                            <a href="menu-1.html" className="button">See Our Menus</a>
                                            <div className="video">
                                                <a data-fancybox="" href="https://www.youtube.com/watch?v=1La4QzGeaaQ"><i>
                                                    <svg width="15" height="22" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 8.5L0.5 0.272758L0.5 16.7272L11 8.5Z" fill="#fff" />
                                                    </svg>
                                                </i>Watch Video</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-section item" >
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-xl-6">
                                    <div className="featured-area">
                                        <h2>Lepidoptera</h2>
                                        <h1>BUTTERFLY</h1>
                                        <h6>Butterflies are outstanding insects with unique color beauty and magical transformations in life.</h6>
                                        <div className="d-md-flex align-items-center">
                                            <a href="menu-1.html" className="button">get offer today</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-section item" >
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-xl-6">
                                    <div className="featured-area">
                                        <h2>Felidae</h2>
                                        <h1>LION </h1>
                                        <h6>Lion is a large carnivorous animal that often lives in prides and is known for its strength and top position in their food chain.</h6>
                                        <div className="d-md-flex align-items-center">
                                            <a href="menu-1.html" className="button">get offer today</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-section item">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-xl-6">
                                    <div className="featured-area">
                                        <h2>Sciuridae</h2>
                                        <h1>SQUIRREL</h1>
                                        <h6>Squirrel is a small animal with thick fur and a long tail. It typically lives independently and enjoys climbing on trees and other structures. Squirrels primarily eat nuts, fruits, and plant-based foods.</h6>
                                        <div className="d-md-flex align-items-center">
                                            <a href="menu-1.html" className="button">get offer today</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="weekly-special">
                    <span>Weekly Special</span>
                    <div>
                        <h4><sup>$</sup>90.85</h4>
                        <h5>Sicilian Pizza</h5>
                        <ul className="star">
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                    <img alt="Pizza" src="https://via.placeholder.com/129x129" />
                </div>
            </section>
        </div>
    )
}

export default SliderHero