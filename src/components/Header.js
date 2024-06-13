import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import compare from '../images/compare.svg'
import wishlist from '../images/wishlist.svg'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize Bootstrap offcanvas
    const offcanvasElement = document.getElementById('offcanvasRight');
    const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);

    // Handle hidden event to close offcanvas
    offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
      // You can perform any cleanup here if needed
    });

    return () => {
      // Cleanup event listener
      offcanvasElement.removeEventListener('hidden.bs.offcanvas', () => {
        // Cleanup if needed
      });
    };
  }, []);

  const handleViewCartClick = () => {
    navigate('/cart');
    const offcanvasElement = document.getElementById('offcanvasRight');
    const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvas.hide(); // Manually hide the offcanvas after navigating
  };
  const handleViewCartCheckoutClick = () => {
    navigate('/checkout');
    const offcanvasElement = document.getElementById('offcanvasRight');
    const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvas.hide(); // Manually hide the offcanvas after navigating
  };
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>
                Welcome to PakZone! Where Local Brands are Promoted.</p>
            </div>
            <div className="col-6">
              <p className='text-end text-white mb-0'>
                Hotline: <a className="text-white" href="tel: +92 3115450875">+92 3115450875</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to='/' className='text-white'>PakZone</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product" aria-label="Search Product" aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to='/compare-product'>
                    <img src={compare} alt="compare" className='flip' />
                    <p className='mb-0'>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src={wishlist} alt="wishlist" className='flip' />
                    <p className='mb-0'>
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img src={user} alt="yser" className='flip' />
                    <p className='mb-0'>
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white canvas'
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
                    <div className="offcanvas offcanvas-end text-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                      <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Cart</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div className="offcanvas-body">
                        <div className=".col-12">
                          <div className="d-flex flex-column">
                            {/* INSERT PRODUCT CART CARD HERE */}
                            <div className="div d-flex flex-column home-wrapper-2 card-shadow total-card p-3">
                              <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex flex-column'>
                                  <h5>Total Item:</h5>
                                  <p>1</p>
                                </div>
                                <div className='d-flex flex-column align-items-right'>
                                  <h5>Subtotal:</h5>
                                  <p>Rs. 6000</p>
                                </div>
                              </div>
                              <div className='d-flex align-items-center justify-content-between'>
                                <button className="button border-0" onClick={handleViewCartClick}>View Cart</button>
                                <button className="button border-0" onClick={handleViewCartCheckoutClick}>Checkout</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img src={cart} alt="cart" className='flip' />
                    <div className='d-flex flex-column'>
                      <span className="badge bg-white text-dark h">0</span>
                      <p className='mb-0 h'>$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="/images/menu.svg" alt="" />
                      <span className='me-5 d-inline-block'>Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="text-white dropdown-item" to="">Action</Link></li>
                      <li><Link className="text-white dropdown-item" to="">Another action</Link></li>
                      <li><Link className="text-white dropdown-item" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header