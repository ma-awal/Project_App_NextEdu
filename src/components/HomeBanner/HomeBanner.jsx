import React from 'react';
import './H-banner.css';
import { Link } from 'react-router-dom';
const HomeBanner = () => {
  return (
    <section className="H-banner">
      <div className="container">
        <div className="info">
          <h1 className="text-white text-capitalize    fw-semibold mb-4 display-2 ">
            better education for <br /> better world
          </h1>
          <div className="H-btn d-flex gap-3">
            <button className="btn rounded-0 px-3 ">
              <Link to="/contact">Contact us</Link>
            </button>
            <button>
              <Link className="btn rounded-0 px-3 " to="/apply">
                Apply
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
