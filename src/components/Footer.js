import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='py-4 border-mb'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4' >Contact Us</h4>
            <div className='footer-links d-flex flex-column'>
              <address className='text-white fs-5'>
                Trung Shop <br />
                Ho Chi Minh City <br />
                +81 123 456 789 <br />
              </address>
              <a href="tel:+81 123 456 789" className='text-white mt-3 d-block mb-1'>
                +81 123 456 789
              </a>
              <a href="mailto:trungreacjs@gmail.com" className='text-white mt-2 d-block mb-0'>
                trungreacjs@gmail.com
              </a>
              <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                <a className='text-white' href="#">
                  <BsLinkedin className='fs-4' />
                </a>
                <a className='text-white' href="#">
                  <BsYoutube className='fs-4' />
                </a>
                <a className='text-white' href="#">
                  <BsInstagram className='fs-4' />
                </a>
                <a className='text-white' href="#">
                  <BsGithub className='fs-4' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4' >Infomation</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link className='text-white py-2 mb-1'>Terms Of Service</Link>
              <Link className='text-white py-2 mb-1'>Blogs</Link>
            </div>
          </div>
          <div className='col-3'>
            <h4 className='text-white mb-4' >Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Search</Link>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
              <Link className='text-white py-2 mb-1'>Size Chart</Link>
            </div>
          </div>
          <div className='col-2 quickLink '>
            <h4 className='text-white mb-4' >Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Accessorles</Link>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Smart Watches</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 m-0 text-white'>
            <p className='text-center fs-5'>&copy; {new Date().getFullYear()}; Powered by MinhTrung Developer's </p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer