import React from 'react'
import { Link, useLocation} from 'react-router-dom'
const BlogCard = (props) => {
  const { blogGrid } = props
  let location = useLocation()
  return (
    <div className={`${location.pathname == "/blogs" ? `br-${blogGrid}` : "col-3"}`}>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">June 2, 2024</p>
                <h5 className="title">I am inserting a dummy title</h5>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut ipsa at fugiat nemo? Explicabo debitis voluptas obcaecati vitae a, doloremque provident, doloribus totam magnam atque ea. Eos, nemo! Porro!</p>
                <Link to="/" className="button">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard