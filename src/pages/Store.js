import React from 'react'
import { Helmet } from 'react-helmet'
import ReactStars from "react-rating-stars-component";

const Store = () => {
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
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Store