import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault()
        setPasswordVisible(!passwordVisible);
    };
    const toggleConfirmPasswordVisibility = (e) => {
        e.preventDefault()
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
  return (
    <>
          <Helmet>
              <meta charSet='utf-8' />
              <title>Store</title>
          </Helmet>
          <div className="login-wrapper home-wrapper-2 py-5">
              <div className="row">
                  <div className="col-12">
                      <div className="auth-card">
                          <h3 className='text-center mb-3'><CgProfile className='profile-pic' size={70} /></h3>
                          <h4 className="title text-center">Create an Account</h4>
                          <form action="" className="d-flex flex-column">
                              <div className="mb-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">First name</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Last name</label>
                                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Last Name" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="password" className="form-label">Password</label>
                                  <div className="input-group">
                                      <input
                                          type={passwordVisible ? "text" : "password"}
                                          className="form-control"
                                          id="password"
                                          placeholder="Enter Password"
                                      />
                                      <button
                                          type="button"
                                          className="btn btn-outline-secondary show-hide"
                                          onClick={togglePasswordVisibility}
                                      >
                                          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                      </button>
                                  </div>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="password" className="form-label">Confirm Password</label>
                                  <div className="input-group">
                                      <input
                                          type={confirmPasswordVisible ? "text" : "password"}
                                          className="form-control"
                                          id="password"
                                          placeholder="Enter Password"
                                      />
                                      <button
                                          type="button"
                                          className="btn btn-outline-secondary show-hide"
                                          onClick={toggleConfirmPasswordVisibility}
                                      >
                                          {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                      </button>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center">
                                  <button className="button border-0 w-100">Signup</button>
                              </div>
                              <div className='d-flex align-items-center justify-content-center mt-3 gap-10'>
                                  <p className='mb-0'>Already have an account?</p>
                                  <Link to="/login">Login</Link></div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Signup