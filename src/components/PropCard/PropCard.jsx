import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const PropCard = (props) => {
  const { name, link } = props;
  return (
    <section className="All">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="box  d-flex justify-content-center align-items-center flex-column">
              <h2 className="mb-3">{name}</h2>
              <div className="box-link d-flex gap-4">
                <Link to="/">{link}</Link>
                <li>
                  <Link className="active">{name}</Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropCard;
