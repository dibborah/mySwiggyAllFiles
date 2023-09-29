import React from 'react'
import "./style.css"
import one from "./img/one.jpg"
import two from "./img/two.jpg"
import three from "./img/three.jpg"
import four from "./img/four.jpg"
import five from "./img/five.jpg"
import six from "./img/six.jpg"
import seven from "./img/seven.jpg"
import eight from "./img/eight.jpg"
import nine from "./img/nine.jpg"
import ten from "./img/ten.jpg"
import eleven from "./img/eleven.jpg"
import twelve from "./img/twelve.jpg"

export default function index(){
    return(
        <>
            {/* for this main__Container use grid */}
                <section className="main__Container" id="main">

                        {/* for this productlist use flex */}
                            <div className="product-list">

                                <div className="below__Section">

                                    <img src={one} alt=""/>

                                    <div className="title">
                                       <h3>GOBI EDLI</h3>
                                    </div>

                                    <div className="rating">
                                        <span>*****</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 155</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={two} alt=""/>

                                    <div className="title">
                                       <h3>Hamburger</h3>
                                    </div>

                                    <div className="rating">
                                        <span>****</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 120</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={three} alt=""/>

                                    <div className="title">
                                       <h3>French Fries</h3>
                                    </div>

                                    <div className="rating">
                                        <span>**</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 100</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={four} alt=""/>

                                    <div className="title">
                                       <h3>Cheese Burger</h3>
                                    </div>

                                    <div className="rating">
                                        <span>*****</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 200</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={five} alt=""/>

                                    <div className="title">
                                       <h3>Vegetable Burger</h3>
                                    </div>

                                    <div className="rating">
                                        <span>****</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 180</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={six} alt=""/>

                                    <div className="title">
                                       <h3>Cheese Chap</h3>
                                    </div>

                                    <div className="rating">
                                        <span>*****</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 200</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={seven} alt=""/>

                                    <div className="title">
                                       <h3>Fruit Salad</h3>
                                    </div>

                                    <div className="rating">
                                        <span>***</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 99</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={eight} alt=""/>

                                    <div className="title">
                                       <h3>Cucumbar Sabji</h3>
                                    </div>

                                    <div className="rating">
                                        <span>****</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 180</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={nine} alt=""/>

                                    <div className="title">
                                       <h3>Tandori Biryani</h3>
                                    </div>

                                    <div className="rating">
                                        <span>*****</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 350</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={ten} alt=""/>

                                    <div className="title">
                                       <h3>Donut</h3>
                                    </div>

                                    <div className="rating">
                                        <span>***</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs120</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={twelve} alt=""/>

                                    <div className="title">
                                       <h3>Chinese Food</h3>
                                    </div>

                                    <div className="rating">
                                        <span>**</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 130</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>
                                <div className="below__Section">

                                    <img src={eleven} alt=""/>

                                    <div className="title">
                                       <h3>Plain Rice</h3>
                                    </div>

                                    <div className="rating">
                                        <span>*****</span>
                                    </div>

                                    <div className="price">
                                        <p>Rs 400</p>
                                    </div>
                                    <div className="button">
                                        <button>Add To Cart</button>
                                    </div>

                                </div>

                            </div>

                </section>    
              
        </>
    )
}
