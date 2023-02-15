import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import {BsInfoCircle} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title='Contact Us'/> 
      <div className='contact-wraper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596660.6433354861!2d106.38254481228898!3d10.752660729527062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2sH%C3%B4%20Chi%20Minh-Ville%2C%20H%C3%B4%20Chi%20Minh%2C%20Vietnam!5e0!3m2!1sfr!2s!4v1676444545737!5m2!1sfr!2s" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text"  className='form-control' placeholder='Name' />
                    </div>
                    <div>
                      <input type="email"  className='form-control' placeholder='Email*' />
                    </div>
                    <div>
                      <input type="number"  className='form-control' placeholder='Phone Number' />
                    </div>
                    <div>
                      <textarea className='w-100 form-control' rows="4" cols="30" placeholder='Comment'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title'>Get In Touch With Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-3' />
                        <address className='mb-0'>Ho Chi Minh City</address>
                      </li>
                      <li className='d-flex gap-15 align-items-center'>
                        <FiPhoneCall className='fs-3' />
                        <a href="tel: +81 123 456 789">+81 123 456 789</a>
                      </li>
                      <li className='d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-3' />
                        <a href="mailto: trungreacjs@gmail.com">trungreacjs@gmail.com</a>
                      </li>
                      <li className='d-flex gap-15 align-items-center'>
                        <BsInfoCircle className='fs-3' />
                        <p className='mb-0'>Monday - Saturday 8AM - 10PM</p>
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