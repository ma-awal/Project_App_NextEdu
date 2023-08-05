import React from 'react';
import './TeacherCard.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
const TeacherCard = ({ data, myLogic }) => {
  return (
    <div className="row TeacherCard gy-4  ">
      {myLogic ? (
        <>
          {data.map((perosn) => {
            const { id, name, title, img, links } = perosn;
            return (
              <div className="col-12 col-md-6 col-lg-4" key={id}>
                <div className="box shadow-lg">
                  <div className="single-person">
                    <img src={img} className="img-fluid w-100" alt="img" />

                    <div className="social-icons  ">
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
                  <div className="info  text-center  py-2">
                    <h5 className="m-0 mb-1">{name}</h5>
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {data.map((perosn) => {
            const { id, name, title, img, links } = perosn;
            return (
              <div className="col-12 col-md-6 col-lg-3" key={id}>
                <div className="box shadow-lg">
                  <div className="single-person">
                    <img src={img} className="img-fluid w-100" alt="img" />

                    <div className="social-icons d-none">
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
                  <div className="info-2 px-2 text-center d-flex  align-items-center  py-2 gap-2">
                    <div>
                      <h5 className="m-0 mb-1">{name}</h5>
                      <p>{title}</p>
                    </div>
                    <div className="link">
                      <Link to={`/teacher/${id}`}>
                        Details <FaAngleRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default TeacherCard;
