import React from 'react'
import { Helmet } from 'react-helmet'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Wishlist = () => {
    const [grid, setGrid] = useState(3);
  return (
    <>
          <Helmet>
              <meta charSet='utf-8' />
              <title>Wishlist</title>
          </Helmet>
          <div className="wishlist-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                      <div className="col-12">
                          <div className="filter-sort-grid mb-4 px-4">
                              <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center gap-10 w-50">
                                      <p className='mb-0' style={{ width: "200px" }}>Sort By:</p>
                                      <select name="" className="form-control form-select" id="">
                                          <option value="title-ascending" selected="selected">Alpahabetically, A-Z</option>
                                          <option value="title-descending">Alpahabetically, Z-A</option>
                                          <option value="price-ascending">Price, low to high</option>
                                          <option value="price-descending">Price, high to low</option>
                                          <option value="created-ascending">Date, old to new</option>
                                          <option value="created-descending">Date, new to old</option>
                                      </select>
                                      <p className='mb-0' style={{ width: "200px" }}>Category:</p>
                                      <select name="" className="form-control form-select" id="">
                                          <option value="smartphone-category" selected="selected">Smart Phones</option>
                                          <option value="watches-category">Watches</option>
                                          <option value="laptop-category">Laptops</option>
                                      </select>
                                  </div>
                                  <div className="d-flex align-items-center gap-10">
                                      <p className="total-products mb-0">21 Products</p>
                                      <div className='d-flex gap-10 align-items-center grid'>
                                          <img onClick={() => {
                                              setGrid(3);
                                          }} src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                                          <img onClick={() => {
                                              setGrid(4);
                                          }} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                                          <img onClick={() => {
                                              setGrid(6);
                                          }} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                                          <img onClick={() => {
                                              setGrid(12);
                                          }} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="product-list pb-5 d-flex gap-10 flex-wrap">
                              <ProductCard grid={grid} />
                              <ProductCard grid={grid} />
                              <ProductCard grid={grid} />
                              <ProductCard grid={grid} />
                          </div>
                      </div>
                </div>
            </div>
          </div>
    </>
  )
}

export default Wishlist