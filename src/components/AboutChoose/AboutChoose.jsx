import React from 'react';
import './AboutChoose.css';
import { Link } from 'react-router-dom';

const AboutChoose = ({ data }) => {
  return (
    <section className="AboutChoose py-3 py-lg-4 py-lg-5 ">
      <div className="container py-3 py-lg-4 py-lg-5">
        <div className="col-12 ">
          <h2 className="mb-3  ">Why Choose Us ?</h2>
          <p>
            Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut
            pellentesque maximus lacus, nec <br /> pharetra augue.
          </p>
        </div>
        <div className="row gy-5 gy-lg-0">
          <div className="col-12 col-lg-4">
            <div className="single-card">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                <br />
                quod! In vero voluptate blanditiis error cum nesciunt
                exercitationem? Commodi iure, autem eligendi animi soluta
                placeat
                <br />
                ut obcaecati voluptatibus tempore magni! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Lorem ipsum, dolor sit amet
                <br />
                consectetur adipisicing elit. Maxime, dicta! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Repellat, fugit.
              </p>
              <div className="text-center text-md-start">
                <button className="btn btn-lg px-4  ">
                  <Link to="/contact">Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="single-card">
              <ul className="list-unstyled">
                {data.slice(0, 3).map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="d-flex gap-3 single-item">
                        <div>
                          <span className="rounded-circle">{item.icon}</span>
                        </div>
                        <div>
                          <h5 className="">{item.heading}</h5>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="single-card">
              <ul className="list-unstyled">
                {data.slice(3, 6).map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="d-flex gap-3 single-item">
                        <div>
                          <span className="rounded-circle">{item.icon}</span>
                        </div>
                        <div>
                          <h5>{item.heading}</h5>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutChoose;
