import React from 'react'
import { Helmet } from 'react-helmet'
import Color from '../components/Color'
import cross from '../images/cross.svg'
import watch from '../images/watch.jpg'

const CompareProduct = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Compare Product</title>
            </Helmet>
            <div className="compare-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <div className='d-flex align-items-center cross-div position-absolute'>
                                    <img src={cross} alt="cross" className="cross img-fluid d-block" />
                                </div>
                                <div className="product-card-image">
                                    <img src={watch} alt="compare product image" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">SAMSUNG GALAXY S24 ULTRA NIGGA EDITION</h5>
                                    <h6 className="price mb-3 mt-3">Rs. 4000</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Samsung</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Smartphone</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <div className='d-flex align-items-center cross-div position-absolute'>
                                    <img src={cross} alt="cross" className="cross img-fluid d-block" />
                                </div>
                                <div className="product-card-image">
                                    <img src={watch} alt="compare product image" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">SAMSUNG GALAXY S24 ULTRA NIGGA EDITION</h5>
                                    <h6 className="price mb-3 mt-3">Rs. 4000</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Samsung</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Smartphone</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            <Color />
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CompareProduct