import React from 'react';
import Meta from '../components/Meta'
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  // alert('đây là home');
  return (
    <>
      <Meta title={"Thời trang news"} />
      <section className='home-wrapper-1 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 banner-mobile-full'>
              <div className='main-banner position-relative'>
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className='main-banner-content position-absolute'>
                  <h4>Supercharged for pros.</h4>
                  <h5>iPad S14+ Pro</h5>
                  <p>From $999.00 or $51.92/mo.</p>
                  <Link className='button'>Buy now</Link>
                </div>
              </div>
            </div>
            <div className='col-6 full-width'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>Best sale</h4>
                    <h5>Laptops Max</h5>
                    <p>From $999.00 <br /> or $51.92/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>New arrival</h4>
                    <h5>But Ipad Air</h5>
                    <p>From $999.00 <br /> or $51.92/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>30% off</h4>
                    <h5>Smartwatch 7</h5>
                    <p>From $999.00 <br /> or $51.92/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative'>
                  <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className='small-banner-content position-absolute'>
                    <h4>Free engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>From $999.00 <br /> or $51.92/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='servies d-flex align-items-center justify-content-between'>
                <div className='servies-mobile-full d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="servies" />
                  <div>
                    <h6 className='fs-5' >Free Shipping</h6>
                    <p className='mb-0 fs-5' >From all orders overs $200</p>
                  </div>
                </div>
                <div className='servies-mobile-full d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="servies" />
                  <div>
                    <h6 className='fs-5' >Daily Surprise Offers</h6>
                    <p className='mb-0 fs-5' >Save up to 40% off</p>
                  </div>
                </div>
                <div className='servies-mobile-full d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="servies" />
                  <div>
                    <h6 className='fs-5' >Support 24/7</h6>
                    <p className='mb-0 fs-5' >Shop with an expert</p>
                  </div>
                </div>
                <div className='servies-mobile-full d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="servies" />
                  <div>
                    <h6 className='fs-5' >Affordable Prices</h6>
                    <p className='mb-0 fs-5' >Get Factory direct price</p>
                  </div>
                </div>
                <div className='servies-mobile-full d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="servies" />
                  <div>
                    <h6 className='fs-5' >Secure Payments</h6>
                    <p className='mb-0 fs-5' >100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex align-items-center flex-wrap justify-content-between'>
                <div className='d-flex gap-5 align-items-center'>
                  <div>
                    <h6 className='fs-5'>Computers & Laptop</h6>
                    <p className='fs-5' >9 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Camera</h6>
                    <p className='fs-5' >10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Smart Television</h6>
                    <p className='fs-5' >10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Camera</h6>
                    <p className='fs-5' >10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Camera</h6>
                    <p className='fs-5' >10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Computers & Laptop</h6>
                    <p className='fs-5' >9 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Camera</h6>
                    <p className='fs-5' >10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Smart Television</h6>
                    <p className='fs-5' >10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Camera</h6>
                    <p className='fs-5' >10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6 className='fs-5'>Camera</h6>
                    <p className='fs-5' >10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src="images/famous-1.webp" className='img-fluid' alt="famous" />
                {/* <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $600 or $20.52/mo. for 24 mo.*</p>
                </div> */}
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card'>
                {/* <div className='famous-content'>
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness.</h6>
                  <p className='text-dark'>27-inch 5K Retina Display</p>
                </div> */}
                <img src="images/famous-1.webp" className='img-fluid' alt="famous" />
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card'>
                {/* <div className='famous-content'>
                  <h5 className='text-dark'>Big Screen</h5>
                  <h6 className='text-dark'>Smart Watch Series 7</h6>
                  <p className='text-dark'>From $600 or $20.52/mo. for 24 mo.*</p>
                </div> */}
                <img src="images/famous-1.webp" className='img-fluid' alt="famous" />
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card'>
                {/* <div className='famous-content'>
                  <h5 className='text-dark'>Big Screen</h5>
                  <h6 className='text-dark'>Smart Watch Series 7</h6>
                  <p className='text-dark'>From $600 or $20.52/mo. for 24 mo.*</p>
                </div> */}
                <img src="images/famous-1.webp" className='img-fluid' alt="famous" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Product</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='marque-wrapper home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest News</h3>
            </div>
            
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home