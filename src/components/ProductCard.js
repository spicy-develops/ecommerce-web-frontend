import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom'

const ProductCard = (props) => {
    const {grid} = props
    let location = useLocation()
    return (
        <div className={`${(location.pathname == "/store" || location.pathname == "/wishlist") ? `gr-${grid}`:"col-3"}`}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link><img src="images/wish.svg" alt="wishlist" /></Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" className='img-fluid' alt="product image" />
                    <img src="images/tab1.jpg" className='img-fluid' alt="product image" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Samsung</h6>
                    <h5 className="product-title">Samsung Galaxy S24 Ultra 512gb /12gb</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        activeColor={"#ffd700"}
                        value={3}
                        edit={false}
                    />
                    <p className={`description ${(location.pathname === "/store" && grid === 12) || (location.pathname === "/wishlist" && (grid === 6 || grid === 12)) ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et laboriosam minima repellat tempora atque! Exercitationem facere earum eveniet accusantium, sit nihil enim reiciendis voluptate, fugit officia quod, velit dolorum.</p>
                    <p className="price">Rs. 450000</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-10'>
                        <Link><img src="images/prodcompare.svg" alt="addcart" /></Link>
                        <Link><img src="images/view.svg" alt="addcart" /></Link>
                        <Link><img src="images/add-cart.svg" alt="addcart" /></Link>
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default ProductCard