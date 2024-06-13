import React from 'react'
import { Helmet } from 'react-helmet'
import BlogCard from '../components/BlogCard'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react'
import watch from '../images/watch.jpg'
const Blog =     () => {
    const [blogGrid, setGrid] = useState(6);
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Blogs</title>
            </Helmet>
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Find by Categories
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Product Tags
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphones</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tabler</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Shampoo</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Cosmetics</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Samsung</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Random Products
                                </h3>
                                <div>
                                    <div className="random-products d-flex align-items-center">
                                        <div className="w-50"><img src={watch} className='img-fluid' alt="randomproductimage" /></div>
                                        <div className="w-50">
                                            <h5>Samsung Galaxy 24 Ultra Nigga Edition</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor={"#ffd700"}
                                                value={3}
                                                edit={false}
                                            />
                                            <b>Rs. 5000</b>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex align-items-center">
                                        <div className="w-50"><img src={watch} className='img-fluid' alt="randomproductimage" /></div>
                                        <div className="w-50">
                                            <h5>Samsung Galaxy 24 Ultra Nigga Edition</h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                activeColor={"#ffd700"}
                                                value={3}
                                                edit={false}
                                            />
                                            <b>Rs. 5000</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="d-flex gap-10 flex-wrap">
                                <BlogCard blogGrid = {blogGrid}></BlogCard>
                                <BlogCard blogGrid={blogGrid}></BlogCard>
                                <BlogCard blogGrid={blogGrid}></BlogCard>
                                <BlogCard blogGrid={blogGrid}></BlogCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog