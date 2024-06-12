import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageMagnify from 'react-image-magnify';
import watch from '../tab.jpg'

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Dynamic Product Name</title>
            </Helmet>
            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className='product-images-inner-wrapper'>
                                <div className="main-product-image-wrapper">
                                    <div>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Watch',
                                                isFluidWidth: true,
                                                src: watch
                                            },
                                            largeImage: {
                                                src: watch,
                                                width: 1200,
                                                height: 1200
                                            },
                                            isHintEnabled: true,
                                            shouldHideHintAfterFirstActivation: true,
                                            enlargedImagePosition: "over",
                                            className: 'w-100'
                                        }} />
                                    </div>
                                </div>
                                <div className='remaining-product-images d-flex  flex-wrap gap-30'>
                                    <div>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Watch',
                                                isFluidWidth: true,
                                                src: watch
                                            },
                                            largeImage: {
                                                src: watch,
                                                width: 600,
                                                height: 600
                                            },
                                            isHintEnabled: true,
                                            shouldHideHintAfterFirstActivation: true,
                                            enlargedImagePosition: "over",
                                            className: 'w-100'
                                        }} />
                                    </div>
                                    <div>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Watch',
                                                isFluidWidth: true,
                                                src: watch
                                            },
                                            largeImage: {
                                                src: watch,
                                                width: 1200,
                                                height: 1200
                                            },
                                            isHintEnabled: true,
                                            shouldHideHintAfterFirstActivation: true,
                                            enlargedImagePosition: "over",
                                            className: 'w-100'
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
            <section className="description-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className='bg-white card-shadow description-inner-wrapper'>
                                <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt molestiae omnis illo dignissimos consectetur, iusto corrupti at reprehenderit veritatis, dolore aspernatur aut dicta? Placeat ipsa harum fugit dolor assumenda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Customer Reviews</h4>
                            <div className="review-inner-wrapper card-shadow">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor={"#ffd700"}
                                                value={3}
                                                edit={false}
                                            />
                                            <p className='mb-0 mt-1'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (<div >
                                            <a href="" className='text-decoration-underline' >Write a Review</a>
                                        </div>)
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form action="" className='d-flex flex-column gap-10'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor={"#ffd700"}
                                                value={0}
                                                edit={true}
                                            />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control' cols="30" rows="5" placeholder='Comment'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'> Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex justify-content-between">
                                            <h6 className='mb-0'>John Doe</h6>
                                            <p className='mb-0'>2 days ago</p>
                                        </div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor={"#ffd700"}
                                                value={3}
                                                edit={false}
                                            />
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, commodi reiciendis. Distinctio aspernatur aliquam cumque est molestiae maiores cum blanditiis ex quidem quo quaerat dolore quia, unde ab eius placeat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="popular-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct