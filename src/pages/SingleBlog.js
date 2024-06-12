import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const SingleBlog = () => {
  return (
    <>
          <Helmet>
              <meta charSet='utf-8' />
              <title>Dynamic Blog Name</title>
          </Helmet>
          <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card card-shadow p-4">
                            <Link to='/blogs' className='d-flex align-items-center gap-10 mb-3'> <HiOutlineArrowLeft /> Go back to Blogs</Link>
                            <h3 className="title">I am inserting a dummy title</h3>
                            <img src="images/blog-3.webp img-fluid w-100 my-4" alt="blog" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit incidunt, nostrum quo, cupiditate laborum esse iusto recusandae laudantium veritatis est beatae dignissimos saepe harum optio. In blanditiis libero voluptatem corrupti.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas odio animi ex tempore, praesentium maiores placeat eligendi voluptatem corporis dignissimos minus autem optio unde qui nulla suscipit! Eveniet, iusto sunt.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quaerat accusantium ratione quam, delectus similique ipsum numquam quibusdam sint, expedita ex necessitatibus veniam, est voluptate? Placeat nam omnis soluta neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem adipisci, exercitationem eum consequatur dolorum facere, ex molestiae, numquam sed architecto perferendis perspiciatis impedit debitis officiis blanditiis. Illo dolorum facere consequuntur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus molestiae animi velit eum ut iste tempora numquam illo est, accusamus quia cupiditate odio facere nemo quidem maiores nobis et consectetur.
                            </p>
                        </div>
                    </div>
                      <div className="col-12 mt-5">
                          <div className="blog-inner-wrapper d-flex">
                              <div className='w-100'><h3 className="contact-title mb-4">Leave a Comment</h3>
                                  <form action="" className='d-flex flex-column gap-10'>
                                      <div className='d-flex align-items-center gap-10'>
                                          <div className='w-50'>
                                              <input type="text" className='form-control' placeholder='Name' />
                                          </div>
                                          <div className='w-50'>
                                              <input type="email" className='form-control' placeholder='Email' />
                                          </div>
                                      </div>
                                      <div>
                                          <textarea name="" id="" className='w-100 form-control' cols="30" rows="5" placeholder='Comment'></textarea>
                                      </div>
                                      <div>
                                          <button className='button border-0'>Post Comment</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
          </div>
    </>
  )
}

export default SingleBlog