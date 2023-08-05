import React from 'react';
import './H-world.css';
import img from '../../assets/welcome.jpg';
import HomeCount from '../HomeCount/HomeCount';

const HomeWorld = () => {
  return (
    <section className="Home-world py-3 py-md-4 py-lg-5">
      <div className="container py-3 py-md-4 py-lg-5 ">
        <div class="row gy-4 ">
          <div className="col-12 col-lg-6">
            <div className="image text-center text-lg-start">
              <img src={img} className="img-fluid w-100  " alt="img" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="info text-center text-lg-start">
              <h2 className="text-white">World Best Univercity</h2>
              <p className="text-white text-start">
                Smply dummy text of the printing and typesetting industry. Lorem
                Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br />
                <br />
                Consequuntur, deserunt. Smply dummy text of the printing and
                typesetting industry. Lorem Ipsum Lorem ipsum dolor sit amet,
                <br />
                <br />
                consectetur adipisicing elit. Consequuntur, deserunt. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptate
                nisi tenetur ratione magni ut at expedita provident, cupiditate.
              </p>
            </div>
          </div>
        </div>
        <HomeCount />
      </div>
    </section>
  );
};

export default HomeWorld;
