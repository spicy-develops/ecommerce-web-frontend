import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProductCard from '../components/SpecialProductCard'

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>DO WHAT YOU CAN'T</h4>
                  <h5>Galaxy 24 Ultra</h5>
                  <p>From Rs.450000 or Rs.50000/mo</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Galaxy 24 Ultra</h5>
                    <p>From Rs.9000</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Galaxy 24 Ultra</h5>
                    <p>From Rs.50000</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Galaxy Tab A7</h5>
                    <p>From Rs.39000</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="small banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Audionic A-110</h5>
                    <p>From Rs.4000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">For all orders over 1 lac</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6>Daily Surpirse Offers</h6>
                    <p className="mb-0">Save upto 10% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory deault price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Speakers</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Speakers</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-30 align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/tab1.jpg" className='img-fluid' alt="famous" />
                <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Phone Series 24</h6>
                <p>From Rs.450000 or Rs.50000/mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/tab1.jpg" className='img-fluid' alt="famous" />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Phone Series 24</h6>
                  <p>From Rs.450000 or Rs.50000/mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/tab1.jpg" className='img-fluid' alt="famous" />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Phone Series 24</h6>
                  <p>From Rs.450000 or Rs.50000/mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/tab1.jpg" className='img-fluid' alt="famous" />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Phone Series 24</h6>
                  <p>From Rs.450000 or Rs.50000/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col12">
            <div className="section-heading">Special Products</div>
          </div>
        </div>
        <div className="row"> 
            <SpecialProductCard />
            <SpecialProductCard />
            <SpecialProductCard />
        </div>
      </div>
      </section>
      <section className="popular-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popular Products</h3>
            </div>
          </div>
          <div className="row">

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marquee-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                  <div className='mx-4 w-25'><img src="images/brand-01.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-02.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-03.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-04.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-05.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-06.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-07.png" alt="brand" /></div>
                  <div className='mx-4 w-25'><img src="images/brand-08.png" alt="brand" /></div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home