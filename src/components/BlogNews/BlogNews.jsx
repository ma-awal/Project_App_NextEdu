import React from 'react';
import './BlogNews.css';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const BlogNews = ({ data }) => {
  return (
    <div className="BlogNews d-flex flex-column justify-content-between gap-5">
      <div className="input-search d-flex justify-content-between align-items-center">
        <input type="text" />
        <button type="search " className="btn rounded-0 px-4 py-2">
          <BiSearch className="fs-4 fw-bold" />
        </button>
      </div>

      <div className="news border p-3">
        <h5 className="mb-3  text-center">Latest News</h5>
        {data.map((item) => {
          return (
            <div
              className=" row   mb-3  single-news border-bottom pb-2  justify-content-between  align-items-center"
              key={item.id}
            >
              <div className="image col-3  p-0  ">
                <img src={item.img} className=" img-fluid  " alt="img" />
              </div>
              <div className="info col-9 p-0 ps-3 ">
                <h6 className="p-0 m-0">{item.heading}</h6>
                <p className="p-0 m-0">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="tag p-3 border">
        <h5 className="mb-3 text-center">Popualar Tag</h5>
        <div className=" d-flex gap-2 flex-wrap    ">
          <button className="btn  ">
            <Link to="#" className="text-uppercase">
              FINACE
            </Link>
          </button>
          <button className="btn  ">
            <Link to="#" className="text-uppercase">
              FINACE
            </Link>
          </button>
          <button className="btn ">
            <Link to="#" className="text-uppercase">
              FINACE
            </Link>
          </button>
          <button className="btn  ">
            <Link to="#" className="text-uppercase">
              FINACE
            </Link>
          </button>
          <button className="btn  ">
            <Link to="#" className="text-uppercase">
              FINACE
            </Link>
          </button>
          <button className="btn  ">
            <Link to="#" className="text-uppercase">
              FINACE
            </Link>
          </button>
          <button className="btn  ">
            <Link to="#" className="text-uppercase">
              FINACE
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
