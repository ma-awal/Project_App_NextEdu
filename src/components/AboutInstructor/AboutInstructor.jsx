import React from 'react';
import './AboutInstructor.css';
// import TeamData from '../../data/TeamData';
import { Link } from 'react-router-dom';
const AboutInstructor = ({ data }) => {
  return (
    <section className="AboutInstructor py-3 py-lg-4 py-lg-5  ">
      <div className="container py-lg-4 py-lg-5 ">
        <div className="info text-center mb-3 mb-lg-4">
          <h2 className="     mb-2 ">Our Instructor</h2>
          <p>
            Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut
            pellentesque maximus lacus, <br /> nec pharetra augue.
          </p>
        </div>
        <div className="row py-3">
          {data.map((perosn) => {
            const { id, name, title, img, links } = perosn;
            return (
              <div className="col-12 col-md-6 col-lg-3" key={id}>
                <div className="box">
                  <div className="single-person">
                    <img src={img} className="img-fluid w-100" alt="img" />

                    <div className="social-icons">
                      {links.map((link, index) => {
                        return (
                          <Link
                            className="link rounded-circle"
                            key={index}
                            to={link.url}
                          >
                            {link.icon}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="info text-center mt-2">
                    <h5>{name}</h5>
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;
