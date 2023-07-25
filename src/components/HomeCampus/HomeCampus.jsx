import React from 'react';
import './H-campus.css';
import img from '../../assets/welcome.jpg';
import { BsCheck } from 'react-icons/bs';
const HomeCampus = () => {
  return (
    <section className="H-campus py-3 py-md-4 py-lg-5">
      <div className="container">
        <div className="row justify-content-between gx-0 gx-lg-5 gy-3 gy-lg-0">
          <div className="col-12 col-lg-6">
            <div className="image">
              <img src={img} className="img-fluid" alt="img" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="info">
              <h2>
                Welcome To <br /> Campus
              </h2>
              <p>
                Smply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry’s standard dummy text ever since the
                <br />
                1500s, Smply dummy text of the Smply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry’s
              </p>
              <div className="row row-cols-2">
                <div>
                  <ul className="list list-unstyled">
                    <li>
                      <BsCheck className="icon rounded-circle" /> Great
                      Technology
                    </li>
                    <li>
                      <BsCheck className="icon rounded-circle" /> Great
                      Technology
                    </li>
                    <li>
                      <BsCheck className="icon rounded-circle" /> Great
                      Technology
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list list-unstyled">
                    <li>
                      <BsCheck className="icon rounded-circle" /> Great
                      Technology
                    </li>
                    <li>
                      <BsCheck className="icon rounded-circle" /> Great
                      Technology
                    </li>
                    <li>
                      <BsCheck className="icon rounded-circle" /> Great
                      Technology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCampus;
