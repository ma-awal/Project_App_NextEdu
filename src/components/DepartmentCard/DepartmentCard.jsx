import React from 'react';
import { Link } from 'react-router-dom';
import './D-card.css';
import { FiArrowRight } from 'react-icons/fi';
const DepartmentCard = ({ data }) => {
  return (
    <div className="row D-card gy-3 gy-md-4">
      {data.map((item) => {
        return (
          <div className="col-12 col-md-6 col-lg-4">
            <div className="single-card text-center    py-4 px-2">
              <img src={item.icon} className="mb-3 img-fluid" alt="icon" />
              <h4 className="mb-3">{item.title}</h4>
              <p>{item.text}</p>
              <Link to={`/department/${item.id}`}>
                Red More <FiArrowRight />
              </Link>
            </div>
          </div>
        );
      })}
      <div className="view text-center">
        <button className=" btn   rounded-0 d-inline px-4 py-2 ">
          View More
        </button>
      </div>
    </div>
  );
};

export default DepartmentCard;
