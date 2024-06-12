import React from 'react'
import { Helmet } from 'react-helmet'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import { FaInfo } from 'react-icons/fa6'

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Contact Us</title>
      </Helmet>
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 frame">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13282.120705981388!2d72.98838231923436!3d33.6693335811065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95ff25ed8b53%3A0x7e482ec7e99bebe0!2sG-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718096938955!5m2!1sen!2s" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div><h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-10'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className='form-control' placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className='form-control' placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name="" id="" className='w-100 form-control' cols="30" rows="5" placeholder='Comment'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'> Submit</button>
                    </div>
                  </form>
                </div>
                <div><h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-3 d-flex align-items-center gap-10'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>Block 255, Main Markaz Sector G11-1 Islamabad</address>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-10'>
                        <BiPhoneCall className='fs-5' />
                        <a href="tel:+92 3115450875">+92 3115450875</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-10'>
                        <AiOutlineMail className='fs-5' />
                        <a href="mailto:mmushtaq.bscs22seecs@seecs.edu.pk">mmushtaq.bscs22seecs@seecs.edu.pk</a>
                      </li>
                      <li className='mb-3 d-flex align-items-center gap-10'><BiInfoCircle className='fs-5' />
                        <p className="mb-0">Monday - Sunday 8 AM - 10 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact