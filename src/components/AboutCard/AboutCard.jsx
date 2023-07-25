import React from 'react';
import './AboutCard.css';

import SingleCard from './SingleCard';
const AboutCard = ({ data, logic }) => {
  return (
    <section className="AboutCard py-3 py-md-4   my-3 my-lg-5">
      <div className="container">
        <div className=" row gy-3  gy-md-4 justify-content-center align-items-center flex-wrap    ">
          <SingleCard data={data} logic={logic} />
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
