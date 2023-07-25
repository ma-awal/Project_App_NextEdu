import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';
import { CgCalendarDates } from 'react-icons/cg';
import { BiSolidTimeFive } from 'react-icons/bi';
const EventCard = ({ data }) => {
  return (
    <div className="container EventCard py-3 py-md-4  py-lg-5">
      <div className="row gy-3 gy-mg-4 gy-lg-5">
        {data.map((item) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="single-event">
                <img src={item.img} className="img-fluid" alt="img" />
                <div className="date d-flex justify-content-between align-items-center my-3">
                  <span>
                    <CgCalendarDates className="icon" />
                    {item.date}
                  </span>
                  <span>
                    <BiSolidTimeFive className="icon" />
                    {item.time}
                  </span>
                </div>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
                <div className="join-btn  ">
                  <button className="btn btn-lg rounded-0 ">
                    <Link to="/join">Join now</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCard;
