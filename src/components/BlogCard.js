import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = () => {
  console.log('Đây là trang')
  return (
      <div className='blog-card'>
        <div className='card-image'>
          <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
        </div>
        <div className='blog-content'>
          <p className='date'>1 Feb, 2023</p>
          <h5 className='title'>A beautiful sunday morning renaissance</h5>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestias nesciunt.
          </p>
          <Link to="/" className='button'>Read More</Link>
        </div>
      </div>
  )
}

export default BlogCard