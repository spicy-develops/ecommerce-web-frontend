import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom'
import watch from '../images/watch.jpg'

const SpecialProductCard = () => {
  return (
    <div className='col-6 mb-4'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                  <div>
                    <img src={watch} className='img-fluid' alt="watch" />
                  </div>
                  <div>
                    <div className="special-product-content">
                        <h5 className="brand">Realme</h5>
                        <h6 className="title">Samsung Galaxy S24 Ultra 512gb /12gb</h6>
                          <ReactStars
                              count={5}
                              size={24}
                              activeColor={"#ffd700"}
                              value={3}
                              edit={false}
                          />
                          <p className="price">
                            <span className="red-p">Rs.5000</span> &nbsp; <strike>Rs.6500</strike>
                          </p>
                          <div className="discount-till d-flex align-items-center gap-10">
                            <p className='mb-0'><b>5</b> Days</p>
                            <div className="d-flex gap-10 align-items-center">
                                  <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                  <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                  <span className='badge rounded-circle p-3 bg-danger'>1</span>
                            </div>
                          </div>
                          <div className="prod-count my-3">
                              <p>
                                  Products: 5
                              </p>
                              <div className="progress">
                                  <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                          <div className='d-flex align-items-center justify-content-between'>
                          <Link className='button'>View</Link>
                          <Link className='button'>Add to Cart</Link>
                          </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProductCard