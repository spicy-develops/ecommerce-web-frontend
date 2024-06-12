import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const ResetPassword = () => {
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
                <title>Reset Password</title>
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
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <div className="input-group">
                                            <input
                                                type={passwordVisible ? "text" : "password"}
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter New Password"
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
                                                placeholder="Confirm Password"
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
                                        <button className="button border-0 w-100">Reset Password</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword