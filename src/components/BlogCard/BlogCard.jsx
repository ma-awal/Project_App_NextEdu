import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';
import { BsArrowRightShort } from 'react-icons/bs';
const BlogCard = ({ data }) => {
  return (
    <div className="BlogCard row gy-3 gy-md-4 gy-lg-5">
      {data.map((item) => {
        return (
          <div className="col-12 col-md-6" key={item.id}>
            <div className="single-card border shadow-sm">
              <img src={item.img} className="img-fluid" alt="img" />
              <div className="info  px-3 py-3">
                <span>{item.title}</span>
                <h5 className="mt-2">{item.heading}</h5>
                <p className="">{item.text}</p>
                <Link to={`/blogCard/:${item.id}`}>
                  Read Moer <BsArrowRightShort className="fs-5" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
