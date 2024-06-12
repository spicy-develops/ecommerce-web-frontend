import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageMagnify from 'react-image-magnify';
import watch from '../tab.jpg'
import Color from '../components/Color'
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineLocalShipping } from "react-icons/md";
import { SiMaterialformkdocs } from "react-icons/si";
import { RxDimensions } from "react-icons/rx";
import { FaRegCopy } from "react-icons/fa";




const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Dynamic Product Name</title>
            </Helmet>
            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-product-inner-wrapper card-shadow d-flex gap-30">
                                <div className='product-images-wrapper w-50'>
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
                                                enlargedImagePosition: "over",
                                                className: 'w-100'
                                            }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="product-main-detail w-50">
                                    <div className='border-bottom'>
                                        <h3>Samsung Galaxy S24 Ultra Nigga edition</h3>
                                    </div>
                                    <div className='border-bottom'>
                                        <p className='price mb-0'>Rs. 4000</p>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor={"#ffd700"}
                                                value={3}
                                                edit={false}
                                            />
                                            <p className='mb-0 mt-1'>2 Reviews</p>
                                        </div>
                                        {
                                            orderedProduct && (<div>
                                                <a href="#review-form-id" className='review-link text-decoration-underline' >Write a Review</a>
                                            </div>)
                                        }
                                    </div>
                                    <div className="border-bottom mt-3 product-data">
                                        <div className="d-flex gap-10 align-items-center  my-2 ">
                                            <h3 className='mb-0'>Type:</h3>
                                            <p className='mb-1'>Watches</p>
                                        </div>
                                        <div className="d-flex gap-10 align-items-center my-2">
                                            <h3 className='mb-0'>Brand:</h3>
                                            <p className='mb-1'>Realme</p>
                                        </div>
                                        <div className="d-flex gap-10 align-items-center my-2">
                                            <h3 className='mb-0'>Categories:</h3>
                                            <p className='mb-1'>Watches, Electronic, Nigga</p>
                                        </div>
                                        <div className="d-flex gap-10 align-items-center my-2">
                                            <h3 className='mb-0'>Tags:</h3>
                                            <p className='mb-1'>Test</p>
                                        </div>
                                        <div className="d-flex gap-10 align-items-center my-2">
                                            <h3 className='mb-0'>Availability:</h3>
                                            <p className='mb-1'>In Stock</p>
                                        </div>
                                        <div className="d-flex gap-10 flex-column mt-3 my-2">
                                            <h3 className='mb-0'>Size:</h3>
                                            <div className="d-flex flex-wrap gap-10">
                                                <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                                <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                                <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                                <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-10 flex-column mt-4 my-2">
                                            <h3 className='mb-0'>Color:</h3>
                                            <Color />
                                        </div>
                                        <div className="d-flex gap-10 align-items-center mt-4 my-2">
                                            <h3 className='mb-0'>Quantity:</h3>
                                            <div>
                                                <input type="number" min={1} max={10} style={{ width: "60px", height: "30px" }} name="" id="" className='form-control' />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center gap-20">
                                            <button className="button border-0">Add to Cart</button>
                                            <button className="button border-0">Buy it Now</button>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center gap-30 my-3">
                                            <div className='d-flex align-items-center gap-10'>
                                                <AiOutlineHeart className='fs-5' />
                                                <a href="" className='mb-0 text-dark'>Add to Wishlist</a>
                                            </div>
                                            <div className='d-flex align-items-center gap-10'>
                                                <TbGitCompare className='fs-5' />
                                                <a href="" className='mb-0 text-dark'>Compare Product</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-bottom">
                                        <div className="accordion mt-3 mb-3" id="accordionExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button gap-10 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <MdOutlineLocalShipping className='fs-5' />
                                                        Shipping & Returns
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button gap-10 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <SiMaterialformkdocs className='fs-5' />
                                                        Materials
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button gap-10 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <RxDimensions className='fs-5' />
                                                        Dimentions
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFour">
                                                    <button className="accordion-button gap-10 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        <AiOutlineHeart className='fs-5' />
                                                        Care Instructions
                                                    </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center mt-3 gap-10'>
                                        <FaRegCopy
                                            className='fs-5' />
                                        <a href="javascript:void(0)" onClick={() =>{
                                            copyToClipboard('http://localhost:3001/store/product/:id#review-form-id')
                                        }} className='mb-0 text-dark'>Copy Product Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            <section id='review-form-id' className="reviews-wrapper py-5 home-wrapper-2">
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
                                            <a href="" className='text-decoration-underline review-link' >Write a Review</a>
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