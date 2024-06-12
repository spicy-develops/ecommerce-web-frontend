import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';


const ForgotPassword = () => {
  return (
    <>
          <Helmet>
              <meta charSet='utf-8' />
              <title>Forgot Password</title>
          </Helmet>
          <div className="login-wrapper home-wrapper-2 py-5">
              <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="auth-card">
                              <h3 className='text-center mb-3'><CgProfile className='profile-pic' size={70} /></h3>
                              <h4 className="title text-center">Reset your Password</h4>
                              <form action="" className="d-flex flex-column">
                                  <div className="mb-3">
                                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                                  </div>
                                  <div className="d-flex align-items-center">
                                      <button className="button border-0 w-100">Confirm</button>
                                  </div>
                                  <p className="info mb-0 mt-3 text-center">We will send you a link to your email address to reset your password.</p>
                                  <div className='d-flex align-items-center  mt-3 gap-10'>
                                      <p className="info mb-0"></p>
                                      <p className='mb-0'>Go Back?</p>
                                      <Link to="/login">Login</Link></div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          </>
  )
}

export default ForgotPassword