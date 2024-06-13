import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import blog from '../images/blog-1.jpg'
const BlogCard = (props) => {
  const { blogGrid } = props
  let location = useLocation()
  return (
    <div className={`${location.pathname == "/blogs" ? `br-${blogGrid}` : "col-3"}`}>
        <div className="blog-card">
            <div className="card-image">
                <img src={blog} className='img-fluid w-100' alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">June 2, 2024</p>
                <h5 className="title">I am inserting a dummy title</h5>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut ipsa at fugiat nemo? Explicabo debitis voluptas obcaecati vitae a, doloremque provident, doloribus totam magnam atque ea. Eos, nemo! Porro!</p>
                <Link to="/blog/:id" className="button">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard