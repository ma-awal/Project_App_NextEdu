import React from 'react';
import './StudentCard.css';
import img from '../../assets/blog_01.jpg';
const StudentCard = ({ data }) => {
  return (
    <div className="row gy-3 gy-lg-5 StudentCard justify-content-center  ">
      <div className="col-12 col-md-4">
        <div className="main-box  d-flex flex-column justify-content-between gap-5  ">
          <div className="search-input px-4 py-5  ">
            <div class="mb-3">
              <h4 className="mb-3">Search Student</h4>
              <select class="form-select  rounded-0 " name="" id="">
                <option value="1">Class One</option>
                <option value="">Class Two</option>
                <option value="">Class There</option>
              </select>
            </div>
            <div class="mb-3">
              <select class="form-select  rounded-0 " name="" id="">
                <option value="1">Section One</option>
                <option value="">Section Two</option>
                <option value="">Section There</option>
              </select>
            </div>
            <div class="mb-3">
              <select class="form-select  rounded-0 " name="" id="">
                <option value="1">Session One</option>
                <option value="">Session Two</option>
                <option value="">Session There</option>
              </select>
            </div>
            <div class="mb-3">
              <input
                type="Id"
                className="form-control rounded-0"
                placeholder="ID Number"
              />
            </div>
            <button className="w-100 rounded-0 btn" type="submit">
              Search Now
            </button>
          </div>
          <div className="broucher   py-3 py-lg-5 px-4">
            <h4 className="mb-3">
              Download Our 2022 College Brochure from here
            </h4>
            <button className="btn rounded-0">Download</button>
          </div>
          <div className="image mt-2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div class="row gy-3 gy-lg-4 col-12 col-md-8 justify-content-center align-items-center">
        {data.slice(0, 4).map((item) => {
          return (
            <div className="col-12 col-md-6" key={item.id}>
              <div className="single-card   border text-center">
                <img
                  src={item.img}
                  className="img-fluid overflow-hidden w-100 h-100 mb-3"
                  alt="img"
                />

                <h5 className="mb-0 mb-1">{item.name}</h5>
                <p className="text-uppercase">
                  <strong>DEP : </strong>
                  <span> {item.dep}</span>
                </p>
                <div className="info d-flex justify-content-around gap-3 algin-items-center">
                  <p>
                    <strong>ID : </strong> <span>{item.userId}</span>
                  </p>
                  <p>
                    <strong>Class : </strong>
                    <span> {item.class}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentCard;
