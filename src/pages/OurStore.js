import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';

const OurStore = () => {
  const [grid,setGrid] = useState(4);


  return (
    <>
      <Meta title={"0ur Store"} />
      <BreadCrumb title='Our Store'/>
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Iphone</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Fillter By</h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type="checkbox" value="" />
                      <label className='form-check-label' htmlFor="">
                        In Stock (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type="checkbox" value="" />
                      <label className='form-check-label' htmlFor="">
                        Our of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div>
                    <div>
                      <ul className='colors ps0'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className='form-check'>
                      <input className='form-check-input' type="checkbox" id='color-1' value="" />
                      <label className='form-check-label' htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type="checkbox" id='color-2' value="" />
                      <label className='form-check-label' htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tag</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3 fs-5'>Headphones</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3 fs-5'>Laptop</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3 fs-5'>Mobile</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3 fs-5'>Iphone</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3 fs-5'>Speaker</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3 fs-5'>Tablet</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3 fs-5'>Samsung</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3 fs-5'>Nokia</span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Products</h3>
                <div>
                  <div className='random-products d-flex mb-3'>
                    <div className='w-50'>
                      <img src="images/watch-01.png" className='img-fluid' alt="watch" />
                    </div>
                    <div className='w-50'>
                      <h5>
                        Kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      <p>$500</p>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src="images/watch-01.png" className='img-fluid' alt="watch" />
                    </div>
                    <div className='w-50'>
                      <h5>
                        Kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      <p>$500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9 full-width'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block fs-5' style={{"width":"100px"}}>Sort By:</p>
                    <select className='form-control form-select fs-5' id=''>
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected='selected'>Best selling</option>
                      <option value="tile-ascending">Alphabetically, A-Z</option>
                      <option value="tile-ascending">Alphabetically, A-Z</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='totalproducts mb-0 fs-5'>21 Products</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img onClick={()=>{setGrid(3);}} src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={()=>{setGrid(4);}} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={()=>{setGrid(6);}} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                      <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                  <ProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore