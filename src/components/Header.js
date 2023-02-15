import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useRef } from 'react'
import {BsSearch} from 'react-icons/bs'
import {FaBars, FaTimes} from 'react-icons/fa'
const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("reponsive_nav");
  }
  // window.onscroll = function() {myFunction()};

  // var header = document.getElementById("header");
  // var sticky = header.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }
  return (
    <header id='header' className='header'>
      <div className='header-top-strip py-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0 fs-5'>
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0 fs-5'>
                Hotline:
                <a className='text-white' href='tel:+81 123 45 678'>
                  +81 123 456 678
                </a> 
              </p>
            </div>
          </div>
        </div>
      </div> 
      <div className='header-upper py-3'>
      <div className='container'>
        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-2 text-logo-mobile'>
            <h2>
              <Link className='text-white'>Trung Shop</Link>
            </h2>
          </div>
          <div className='col-5 input-mobile-full'>
            <div className="input-group">
              <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2"/>
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className='fs-6' />
              </span>
            </div>
          </div>
          <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/compare.svg" alt="Compare"/>
                  <p className='mb-0'>
                    Compare <br /> Product 
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/wishlist.svg" alt="wishlist"/>
                  <p className='mb-0'>
                    Favourite <br /> wishlist 
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/user.svg" alt="user"/>
                  <p className='mb-0'>
                    Login <br /> My account 
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src="images/cart.svg" alt="cart"/>
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='mb-0'>$ 1000</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='header-bottom py-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/images/menu.svg" alt=""/>
                    <span className='me-5 d-inline-block'>Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Laptop
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Iphone
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        TV
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='menu-links d-flex'>
                <nav ref={navRef} className='d-flex align-items-center gap-15'>
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/store'>Our Store</NavLink>
                  <NavLink to='/blogs'>Blogs</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                  <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                  </button>
                </nav>
                <button className='nav-btn' onClick={showNavbar}>
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Header