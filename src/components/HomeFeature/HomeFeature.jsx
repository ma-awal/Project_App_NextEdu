import React from 'react';

import './H-feature.css';
import SingleCard from '../AboutCard/SingleCard';
import AboutData from '../../data/AboutData';

const HomeFeature = () => {
  return (
    <section className="H-feature py-3 py-md-4 py-lg-5   ">
      <div className="container py-3 py-md-4 py-lg-5">
        <div className="H-head text-center  mb-3 mb-md-4 mb-lg-5 ">
          <h5 className="m-0 p-0">our best featuer</h5>
          <h2 className="m-0 p-0">Why We Best</h2>
        </div>
        <div className="row gy-3  gy-md-4 justify-content-center align-items-center flex-wrap  ">
          <SingleCard data={AboutData} />
        </div>
      </div>
    </section>
  );
};

export default HomeFeature;
