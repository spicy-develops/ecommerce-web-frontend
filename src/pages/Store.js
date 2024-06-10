import React from 'react'
import { Helmet } from 'react-helmet'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const Store = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Store</title>
      </Helmet>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">
                  Shop by Categories
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
                  Filter By
                </h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor=""> In Stock (1) </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor=""> Out of Stock (0) </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className='d-flex align-items-center gap-10 justify-content-between'>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="formId1"
                        id="formId1"
                        placeholder="From"
                      />
                      <label htmlFor="formId1">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="formId2"
                        id="formId2"
                        placeholder="To"
                      />
                      <label htmlFor="formId2">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className='colors ps-0'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1"> S (2) </label>
                    </div>
                  </div>
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
                    <div className="w-50"><img src="images/watch.jpg" className='img-fluid' alt="randomproductimage" /></div>
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
                    <div className="w-50"><img src="images/watch.jpg" className='img-fluid' alt="randomproductimage" /></div>
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
              <div className="filter-sort-grid mb-4 px-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10 w-50">
                    <p className='mb-0' style={{ width: "100px" }}>Sort By:</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-ascending">Alpahabetically, A-Z</option>
                      <option value="title-descending">Alpahabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
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
                <ProductCard grid={grid}/>
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

export default Store