import React from 'react';
import PropCard from '../../components/PropCard/PropCard';
import NoticeData from '../../data/NoticeData';
import { Link } from 'react-router-dom';
import './Notice.css';

const Notice = () => {
  return (
    <main>
      <PropCard name={'Notice'} link={'Home'} />
      <section className="Notice py-3 py-md-4 py-lg-5 ">
        <div className="container d-flex flex-column gap-4  py-3 py-md-4 py-lg-5 ">
          {NoticeData.map((item) => {
            return (
              <div className="row box py-4 px-3   align-items-center">
                <div className=" col-12 col-md-3 col-lg-2  ">
                  <div className="time">
                    <h3>{item.date}</h3>
                    <h6>{item.month}</h6>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                  <div className="info">
                    <p className="m-0 mb-2">{item.title}</p>
                    <h4>{item.heading}</h4>
                  </div>
                </div>
                <div className=" col-12 col-md-3 col-lg-2 ">
                  <div className="link">
                    <button className="btn rounded-0">
                      <Link to="/">Read More</Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Notice;
