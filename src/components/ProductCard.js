import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
  const {grid} = props;
  let location = useLocation();
  return (
    <>
      <div 
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3" } `}
      >
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className='product-image'>
            <img src="images/watch-01.png" className='img-fluid' alt="product image" />
            <img src="images/watch-02.png" className='img-fluid' alt="product image" />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"
            />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quos aliquam unde veritatis libero, culpa nesciunt itaque, expedita tempora.
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addCart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div 
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3" } `}
      >
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className='product-image'>
            <img src="images/watch-01.png" className='img-fluid' alt="product image" />
            <img src="images/watch-02.png" className='img-fluid' alt="product image" />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Havels</h6>
            <h5 className='product-title'>
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700"
            />
            <p className={`description ${grid=== 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quos aliquam unde veritatis libero, culpa nesciunt itaque, expedita tempora.
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src="images/prodcompare.svg" alt="prodcompare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addCart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard